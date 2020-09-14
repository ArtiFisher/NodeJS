`npm start` - starts server at port 5000

# CRUD operations

* create user - POST /user/
* read all user - GET /user
* read single user by id - GET /user/{id}
* autosuggest - GET /user/autosuggest?substr={loginSubstring}&limit={limit}
* update user info - PATCH /user/{id}
* delete user(soft) - DELETE /user/{id}


* create group - POST /group/
* read all groups - GET /group
* read single group by id - GET /group/{id}
* update group info - PATCH /group/{id}
* delete group - DELETE /group/{id}



To connect to pregenerated online database create .env file with this content:
DB_DIALECT=postgres
DB_API_KEY=pbrqydwx:7EJDAau16x4krX1LCgHEoXvsufY8PWWV@kandula.db.elephantsql.com
DB_PORT=5432
DB_PASSWORD=pbrqydwx
