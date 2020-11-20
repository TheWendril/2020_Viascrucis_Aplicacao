const nodemailer = require('nodemailer');

const SMTP_CONFIG = require('../config/smtp');

const transporter = nodemailer.createTransport({
  host: SMTP_CONFIG.host,
  port: SMTP_CONFIG.port,
  secure: false,
  auth:{
    user: SMTP_CONFIG.user,
    pass: SMTP_CONFIG.pass,
  },
  tls:{
    rejectUnauthorized: false,
  },
});

exports.sendEmail = async (req, res) => {
  const mailSent = transporter.sendMail({
    text: `De: ${req.body.email} \n\n${req.body.message}`,
    subject: 'Contato Vias Crucis',
    from: `${req.body.name} ${req.body.lastName} <${req.body.email}>`,
    to: 'contatoviascrucis@gmail.com',
  }, (error) => {
    if(error){
      return res.status(400).send('deu erro');
    }
    return res.status(200).send(req.body);
  }

);

  console.log(mailSent);
}
