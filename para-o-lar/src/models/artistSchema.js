const mongoose = require('mongoose')

const artistSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    artistName: {
        type: String,
        required: true
    },
    birthName: {
        type: String,
        required: true
    },
    category: [String],
    birthday: Date,
    numberOfAlbums: Number
});

module.exports = mongoose.model('artist', artistSchema)