import mongoose from "mongoose"
import mongoosePaginate from'mongoose-paginate-v2';

const ratingSchema = mongoose.Schema({
    movieId: String,
    UserId: String,
    ageGroup: String,
    userType: String,
    rate: Number,
    gender: String,
}, { timestamps: true })

ratingSchema.plugin(mongoosePaginate);

export const Movie = mongoose.model('rating', ratingSchema);

