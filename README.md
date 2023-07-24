# Integer to Roman Numeral Converter

This JavaScript Program will convert any positive Number to Roman Numeral from 1 to 3999 range. 

## Features
* API endpoint that accepts an integer and returns the Roman numeral representation.
* Validates input is between 1 and 3999
* Logs requests and errors
* Sends email notifications on server start and errors
* Unit and integration tests

## Usage
```bash
GET /romannumeral?query=5

Response: 
{
  "input": 5,
  "output": "V"
}
```

## Package Layout
Inside the `src` folder there are four sub folders:
1. `Routes` - It contains the accepted URLs and redirects to main service depending on input query.
2. `Service` - It contain two services. One is for sending alerts on email and another is the main service which converts Integer to Roman.
3. `test` - This contains test file to for various scenarios.
4. `util` - Contains utility function for logging.

apart from these folders there is `app.js` which creates instance of express application. `server.js` file is responsible to start the server and assigns the port to our application. There is also README.md file which consists of all the requirments and steps to run the application, with other information.

```bash
src
 ┣ Routes
 ┃ ┗ romanNumeralRouter.js
 ┣ Service
 ┃ ┣ emailService.js
 ┃ ┗ integerToRoman.js
 ┣ Test
 ┃ ┗ test.js
 ┣ util
 ┃ ┣ logs
 ┃ ┃ ┗ routerLogs.log
 ┃ ┗ logger.js
 ┣ .gitignore
 ┣ app.js
 ┣ Dockerfile
 ┣ package-lock.json
 ┣ package.json
 ┣ README.md
 ┗ server.js
```

## Installation and Requirments

1. Download and Install the latest version of [Nodejs](https://nodejs.org/en/download) to run and build.
2. Clone this repository from [GitHub](https://github.com/vrajpatell/RomanToInteger) and save it in one separate folder on the Local machine.
3. Download [Docker](https://www.docker.com/) to run and build Docker image and Container 
4. Navigate to the working directory and run the command below to install dependencies for the package.json file.

```bash
npm install
```

## Dependencies
1. [Express.js](https://expressjs.com/en/starter/installing.html) `npm install express` - Web framework for building the API routes and middleware.
2. [nodemailer](https://nodemailer.com/usage/) `npm install nodemailer` - Module for sending email notifications.
3. [mocha](https://mochajs.org/) `npm install --save-dev mocha` - Test framework.
4. [chai](https://www.chaijs.com/) `npm install chai` - Assertion library.
5. [supertest](https://www.npmjs.com/package/supertest) `npm install supertest` - HTTP assertions for testing Express routes.

## Build and Run
Run in Local machine

1. Navigate to the source folder and RUN `server.js` using the following command.
```bash
node server.js
```
2. Open a web browser and run `localhost:8080` with this query.
```bash
http://localhost:8080/romannumeral?query={integer}
```
Example:

a. http://localhost:8080/romannumeral?query=2
```
{
  "input": 2,
  "output": "II"
}
```
b. http://localhost:8080/romannumeral?query=123
```
{
  "input": 123,
  "output": "CXXIII"
}
```

## Docker commands

1. Download Docker to run Dockerfile from the repository.
  Build the Docker image.: Use the following command to build the Docker image:
```bash
docker build -t roman-numeral-converter .
```
2. Run the Docker container.: Use the following command to run the Docker container:
```bash
docker run -p 8080:8080 roman-numeral-converter
```


## Testing methodologies
This is integration testing which includes multiple test cases, including edge cases and out of range cases.
the test file runs and gives a results for each test case whether they pass or fail. It uses Mocha testing framework.
To perform test cases, please run the following command. 
```bash
npm test
```

## References
* [Wikipedia](https://en.wikipedia.org/wiki/Roman_numerals)
* [expressjs](https://expressjs.com/en/starter/installing.html)
* [nodemailer](https://nodemailer.com/about/)
* [mocha-chai-supertest](https://dev-tester.com/dead-simple-api-tests-with-supertest-mocha-and-chai/)


## License

[MIT](https://choosealicense.com/licenses/mit/)