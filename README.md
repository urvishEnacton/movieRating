# movieRating
movie rating system 

### **MODULES**

* User
* Movie
* Rating
* Category

####  1. User
```JSON
    {
        firstName: "suraj",
        lastName: "abc",
        photo: "abc",
        Email: "abc@gmail.com",
        Password: "abc",
        Gender: "male",
        userType: "admin",
        createdAt: "22-02-2000"
    }
```
####  2. Movie
  ```JSON
    {  
        movieName: "abc",
        Description: "abc",
		Poster : "img.png",
        category: [ "drama",  "thriller"],
        totalRating: 100,
        totalUser: 20,
        avgRating: 5,
        ReleaseDate: "22-02-2000",
        createdAt: "abc"
    }
```
#### 4. Rating
   ```JSON
    {

      movieId: "1234",
      UserId: "1234" ,
      userType: "critic",
      rate: "4.5",
      createdAt: "12/12/2022",
      gender: "male",
    }
```

#### 6. Category
  ```JSON
    {
        Type : "drama/user-type"
    }
```
### **API Needed**
  
* Auth module
  * Sign-up
  * Sign-In
 
* Movie module
  * CRUD 
  * get movie with filter like
    * top-10/worst-10 (min 1000 review needed)
    * year
    * category
 
* Rating module
  * create/update/delete by user
  * other filtered query
 
-----
### **Technologies**

   * Node.js + Apollo - Express + Graph-QL
----
### **Data Base**

   * Mongo-DB
---
### **Packages** 

*  Mongoose
*  http
*  Express
*  @apollo/server
*  graphQL
*  body-parser
*  ASYNC
*  JSONwebtoken
*  bcryptjs
*  mongoose-paginate-v2
---
### **Functional details** 

 * only admin create movie
 * user can sign-up by it self
 * give/ update rating by logged-in user
 * get top 10 movies / it is must have at least 10 rating 
 * get top 10 popular movie who have most rating same as 10 worst
 * get 10 worst movies/ it is must have at least 10 rating
 * need to apply year filter on all API
 * also add category filter
 * search movie
 * also have to apply filter of production house and OTT platform
 * also show age wise popular movie
 * also have ratings by user type like normal audience and * critics and have to apply a user filter on all get queries like top 10 and worst 10 etc..
 * critic can give rating after he is verified by admin 
 * gender wise good and worst movie also gender + age group wise 
 *  Rating distribution

---

### **Task wise timing**

*  Setup and crud of user and other module - 1 day
*  Query for get different type of data - 2 day
*  And for testing - 1 day
*  Approx we need 4 day to complete all task*

------

