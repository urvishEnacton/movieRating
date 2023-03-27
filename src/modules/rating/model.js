const mongoose = require("mongoose");
const mongoosePaginate = require('mongoose-paginate-v2');

const ratingSchema = mongoose.Schema({
    movieId: String,
    UserId: String,
    ageGroup: String,
    userType: String,
    rate: Number,
    gender: String,
}, { timestamps: true })

ratingSchema.plugin(mongoosePaginate);

const Movie = mongoose.model('rating', ratingSchema);
module.exports = { Movie }
