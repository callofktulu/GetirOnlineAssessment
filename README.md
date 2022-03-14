# Getir Online Assessment Test API

Usage:
Go to the provided api url and post the correct payload to recieve records. An example JSON payload is as follows:

```
{
"startDate": "2016-01-26",
"endDate": "2018-02-02",
"minCount": 2700,
"maxCount": 3000
}
```

This returns the following response from the API:

```
{
"code":0,
"msg":"Success",
"records":[
{
"key":"TAKwGc6Jr4i8Z487",
"createdAt":"2017-01-28T01:22:14.398Z",
"totalCount":2800
},
{
"key":"NAeQ8eX7e5TEg7oH",
"createdAt":"2017-01-27T08:19:14.135Z",
"totalCount":2900
}
]
}
```
Code 0 signifies a successful query. Code -1 indicates an error. You can check msg for the detailed error.

Used packages:
Built based on the skeletal project provided by npx package create-express-api

* [nodemon](https://www.npmjs.com/package/nodemon)
  * nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.
* [eslint](https://www.npmjs.com/package/eslint)
  * ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code.
* [mocha](https://www.npmjs.com/package/mocha)
  * ☕️ Simple, flexible, fun JavaScript test framework for Node.js & The Browser ☕️
* [supertest](https://www.npmjs.com/package/supertest)
  * HTTP assertions made easy via superagent.
* [morgan](https://www.npmjs.com/package/morgan)
  * HTTP request logger middleware for node.js
* [helmet](https://www.npmjs.com/package/helmet)
  * Helmet helps you secure your Express apps by setting various HTTP headers. It's not a silver bullet, but it can help!
* [dotenv](https://www.npmjs.com/package/dotenv)
  * Dotenv is a zero-dependency module that loads environment variables from a `.env` file into `process.env`

And also mongoose for ORM.

## Setup

```
npm install
```

## Lint

```
npm run lint
```

## Test

```
npm run test
```

## Development

```
npm run dev
```
# GetirOnlineAssessment
# GetirOnlineAssessment
