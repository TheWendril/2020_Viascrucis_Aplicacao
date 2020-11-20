const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({

    image:{
        type: String
    },
    upvotes: {
        type: Number
    },
    position:{
        type: Number
    }
},

{
      collection:"gallery"
}

);

module.exports = mongoose.model('Gallery', schema);
