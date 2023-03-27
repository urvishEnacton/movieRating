

const movieSchema = `
    type Movie {
        movieName: String
        Description: String
        poster: String
        category: [String]
        totalRating: Number
        totalUser: Number
        avgRating: Number
        productionHouse: String
        OTTplatForm: [String]
        ReleaseDate: Date
        createdAt:Date
        updatedAt:Date
    }
   input movieInput {
        id:ID
        movieName: String
        Description: String
        poster: String
        category: [String]
        # totalRating: Number
        # totalUser: Number
        # avgRating: Number
        productionHouse: String
        OTTplatForm: [String]
        ReleaseDate: Date
   }
    extend type Query {
        getAllMovie:[Movie]
    }
    extend type Mutation {
        addMovie(input:movieInput):Movie 
        deleteMovie:Boolean
    }
`

module.exports = { movieSchema }
