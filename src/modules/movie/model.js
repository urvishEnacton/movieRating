const mongoose = require("mongoose");
const mongoosePaginate = require('mongoose-paginate-v2');

const movieSchema = mongoose.Schema({
    movieName: String,
    Description: String,
    poster: String,
    category: [String],
    totalRating: Number,
    totalUser: Number,
    avgRating: Number,
    productionHouse: String,
    OTTplatForm: [String],
    ReleaseDate: Date,
}, { timestamps: true })

movieSchema.plugin(mongoosePaginate);

const Movie = mongoose.model('movie', movieSchema);
module.exports = { Movie }
