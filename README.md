# nodejs-demo-api
Nodejs+Express+MongoDB+swagger (User, auth, Empoyees CRUD)

### Enviroment

* [NodeJS](https://nodejs.org)

* [MongoDB](https://www.mongodb.com/)

* [Postman](https://www.postman.com/) - optional (collection into root dir)

### Installing

Clone repository

```
git clone https://github.com/snmartusenko/nodejs-demo-api.git
cd nodejs-demo-api
```

Install npm modules

```
npm install
```

### Running

```
npm run start
```

### Authorization

This api server uses JWTokens. So you need register new user (http://localhost:3000/users/register)
and make login (http://localhost:3000/auth/login) for obtaining of JWT token.
All next requests to different end points has to have this token in "x-access-token" headers.

### Swagger api documentation

```
http://localhost:3000/api-docs/
```
