import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const movieSchema = mongoose.Schema(
  {
    movieName: { type: String, index: true },
    description: String,
    poster: String,
    category: [String],
    totalRating: { type: Number, default: 0 },
    totalUser: { type: Number, default: 0 },
    avgRating: { type: Number, default: 0 },
    productionHouse: String,
    OTTPlatForm: [String],
    releaseDate: Date,
  },
  { timestamps: true }
);

movieSchema.plugin(mongoosePaginate);

export const Movie = mongoose.model("movie", movieSchema);

