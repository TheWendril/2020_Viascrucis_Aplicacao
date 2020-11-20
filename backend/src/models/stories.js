
 const mongoose = require('mongoose');
 const Schema = mongoose.Schema;

const schema = new Schema({
    firstName:{
        type: String,
        required: true,
        trim: true
    },
    lastName:{
        type: String,
        required: true
    },
    telefone:{
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    degreeOfKinship:{
        type: String,
        required: true
    },
    firstNameHonor:{
        type: String,
        required: true
    },
    lastNameHonor:{
        type: String,
        required: true
    },
    idade:{
        type: Number,
        required: true
    },
    anoNascimento:{
        type: Number,
        required: true
    },
    textTribute:{
        type: String,
        required: true
    },
    epitafio:{
        type: String,
        required: true
    },
    bornCity:{
        type: String,
        required: true
    },
    bornState:{
        type: String,
        required: true
    },
    deadCity:{
        type: String,
        required: true
    },
    deadState:{
        type: String,
        required: true
    }
  },
  {
        collection:"stories"
  }

);

module.exports = mongoose.model('Stories', schema);
