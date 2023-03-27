

const ratingSchema = `
    type Rating {
        movieId: String
        UserId: String
        ageGroup: String
        userType: String
        rate: Number
        gender: String
        createdat:Date
        updatedAt:Date
    }
   input ratingInput {
        id:ID
        movieId: String
        UserId: String
        ageGroup: String
        userType: String
        rate: Number
        gender: String
   }
    extend type Query {
        getAllRating:[Rating]
    }
    extend type Mutation {
        addRating(input:ratingInput):Rating 
        deleteRating:Boolean
    }
`

module.exports = { ratingSchema }
