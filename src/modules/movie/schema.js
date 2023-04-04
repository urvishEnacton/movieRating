export const movieSchema = `
    type Movie {
        movieName: String
        description: String
        poster: String
        category: [String]
        totalRating: Number
        totalUser: Number
        avgRating: Number
        productionHouse: String
        OTTPlatForm: [String]
        releaseDate: Date
        createdAt:Date
        updatedAt:Date
    }
   input movieInput {
        id:ID
        movieName: String
        description: String
        poster: String
        category: [String]
        # totalRating: Number
        # totalUser: Number
        # avgRating: Number
        productionHouse: String
        OTTPlatForm: [String]
        releaseDate: Date
   }
    extend type Query {
        getAllMovie:[Movie]
    }
    extend type Mutation {
        addMovie(input:movieInput):Movie 
        updateMovie(input:movieInput):Movie 
        deleteMovie:Boolean
    }
`;
