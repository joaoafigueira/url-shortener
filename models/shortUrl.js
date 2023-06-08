const mongoose = require('mongoose');
const shortId = required('shortid');

const shortUrlSchema = new mongoose.Schema({
    complete: {
        type: String,
        required: true
    },
    short: {
        type: String,
        required: true,
        default: shortId.generate
    },
    clicks:{
        type: Number,
        required: true,
        default: 0
    }
});

module.exports = mongoose.model('ShortUrl', shortUrlSchema);