const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
    title: {
        required: true,
        type: String
    },
    // image: {
    //     type: String
    // },
    author: {
        required: true,
        type: String
    },
    description: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model('Article', articleSchema);
