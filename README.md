`npm start` - starts server at port 5000

# CRUD operations

* create user - POST /user/
* read all - GET /user
* read single - GET /user/{id}
* autosuggest - GET /user/autosuggest?substr={loginSubstring}&limit={limit}
* update user info - PATCH /user/{id}
* delete softly - DELETE /user/{id}


For debugging purposes Postman was used with x-www-form-urlencoded with body like this:
id:2
login:art2
password:1234s
age:27
isDeleted:false
