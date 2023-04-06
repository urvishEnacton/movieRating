export const userSchema = `
    type User {
        id:ID
        firstName: String
        lastName: String
        photo: String
        address: String
        email: String
        password: String
        gender: String
        userType: String
        isVerified: Boolean
        createdAt: Date
        updatedAt: Date
    }
    input userInput {
        id:ID
        firstName: String
        lastName: String
        photo: String
        address: String
        email: String
        password: String
        gender: Gender
        # userType: String
    }

    type signInRes {
        token :String
        user:User
     }

    extend type Query {
        getAllUser:[User]
        hello:String
    }
    extend type Mutation {
        signUp:JSON
        signIn(email:String,password:String):signInRes
        verifyEmail(email:String):Boolean
        deleteUser:Boolean
        fileUpload(img:String):String
    }
`;
