# movieRating
movie rating system 

MODULES

* User
* Movie
* Rating
* Category

1. User

    {
    * firstName: "suraj",
    * lastName: "abc",
    *    photo: "abc",
    *    Address: "abc",
    *    Email: "abc@gmail.com",
    *    Password: "abc",
    *    Gender: "male",
    *    bitrthDate: "22-02-2000",
    *    phoneNumber: "1234567890",
    *    isVerified: false,
    *    userType: "admin",
    *    createdAt: "22-02-2000"
  
    }

2. Movie
    {
        
     * movieName: "abc",
     * Description: "abc",
     * Photo:["abc/photo.png","abc/photo.png"],
     * category: [ "drama",  "thriller"],
     * totalRating: 100,
     * totalUser: 20,
     * avgRating: 5,
     * productionHouse: "abc/id",
     * OTTplatForm: ["abc/id"],
     * cast: ["abc","abc"],
     * director:[ "abc","abc"],
     * producer: [ "abc","abc"],
     * generRating: { 

         thriller:200,
        
        drama:255

         },
      * generCount: {

        thriller:12,

        drama:12 

        },
     * ReleaseDate: "22-02-2000",
     * createdAt: "abc"

    }

3. Rating
    {

      * movieId: "1234",
      * UserId: "1234" ,
      * ageGroup: "18-20",
      * userType: "critic",
      * CategoryWiseRating: {

        thriller:4,

        drama: 5,

        },
      * rate: "4.5",
      * createdAt: "12/12/2022",
      * gender: "male",

    }

4. Category

    {
    * Type : "drama/user-type"
    
    }

API Needed

* Create(director/cast/producer)
* Signup
* Sign-In
* Get All User by User-Type
* Movie
* Create by admin
* Update by admin
* Delete by admin
* get All Movies / by Category /get month and year wise
* get top 10 high movie / get top 10 worst movie / get     month and year wise
* top 5 movie of cast / producer / director
* by default, some data have to insert like role and some category of  movie 
* Rating
* Create rating
* Update rating
* Delete rating


Technologies

   * Node.js + Apollo - Express + Graph-QL

Data Base

   * Mongo-DB

Packages 

*  Mongoose
*  http
*  Express
*  @apollo/server
*  graphQL
*  body-parser
*  ASYNC
*  jsonwebtoken
*  bcryptjs
*  mongoose-paginate-v2

Functional details 

 * only admin create movie/cast/director/producer
 * user can sign-up by it self
 * give/ update rating by logged-in user
 * get top 10 movies / it is must have at least 1000 rating 
 * get top 10 popular movie who have most rating same as 10 worst
 * get 10 worst movies/ it is must have at least 1000 rating
 * need to apply year filter on all API
 * also add category filter
 * search movie
 * also have to apply filter of production house and OTT platform
 * also show age wise popular movie
 * also have ratings by user type like normal audience and * critics and have to apply a user filter on all get queries like top 10 and worst 10 etc..
 * critic can give rating after he is verified by admin 
 * gender wise good and worst movie also gender + age group wise 
 * A critic can only write a description and upload a video regarding a movie rating. 

Task wise timing

    o   Setup and crud of user and other module - 1 day
    o   Query for get different type of data - 2 day
    o   And for testing - 1 day
    o   Approx we need 4 day to complete all task*


1000 doller 

* only audience and admin login
* give only rating
* get different type of information 
    * without paid 
        * normal information like top 10 worst 10 movies.
        * get some filters like director, cast, producer, year category. 
    * in paid plan
        * can read movie rating which given by experts (which add admin)

		
2500 doller 

* audience, critic and admin login
* give only rating + write description and also upload video of review 
* get different type of information 
    * without paid 
        * normal information like top 10 worst 10 movies.
        * get some filters like director, cast, producer, year, category + user wise rating audience and critic .
        * Users give over all reviews and critics can give category wise reviews like character, story lineup , etc. and critics also upload video of movie reviews. 
        * gender and age wise popular movies.
        * get overall rating across multiple platform 
    * in paid plan
        * can read and watch movie reviews given by critics.
        * which category type is most liked by the viewer nowadays. 
        * category wise movie rating given by critics.(for director/producer)

