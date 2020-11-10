`npm start` - starts server at port 5000
`npm test` - runs tests silently
`npm run coverage` - runs test showing tests coverage

# CRUD operations

* create user - POST /users
* read all user - GET /users
* read single user by id - GET /users/{id}
* autosuggest - GET /users/autosuggest?substr={loginSubstring}&limit={limit}
* update user info - PATCH /users/{id}
* delete user(soft) - DELETE /users/{id}


* create group - POST /groups
* read all groups - GET /groups
* read single group by id - GET /groups/{id}
* update group info - PATCH /groups/{id}
* delete group - DELETE /groups/{id}


* add users to group - POST /groups/{groupId}/addUsers


To connect to pregenerated online database create .env file with this content:
DB_DIALECT=postgres
DB_API_KEY=pbrqydwx:7EJDAau16x4krX1LCgHEoXvsufY8PWWV@kandula.db.elephantsql.com
DB_PORT=5432
DB_PASSWORD=pbrqydwx

add any AUTH_TOKEN to it like in .env.example