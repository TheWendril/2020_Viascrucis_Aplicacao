const mongoose = require('mongoose');
const Gallery = mongoose.model('Gallery');

exports.sendImages = async (req, res) => {
  try {
    const imagem = new Gallery({
      image: req.body.image,
      upvotes: req.body.upvotes
    });
    console.log(imagem)
    await imagem.save();

    res.status(201).send({message: 'Imagem cadastrada com sucesso!'});
  } catch (e) {
    res.status(500).send({message: 'Falha ao cadastrar a imagem.'});
  }
};
exports.getImages = async (req, res) => {
  try {
    const data = await Gallery.find({});
    console.log(data)
    res.status(200).send(data);
  } catch (e) {
    res.status(500).send({message: 'Falha ao carregar as imagens.'});
  }
};

exports.addUpvote = async (req, res) => {
  try {
    const data = await Gallery.findOne({'position': req.body.position});
    
    data.upvotes++

    await data.save();

    res.status(200).send(data);
  } catch (e) {
    res.status(500).send({message: 'Falha ao add upvote.'});
  }
};

 
