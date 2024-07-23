# TODO-BackEnd-API

Todo application using Node.js as the backend framework.

1.  Initializing our project

    -- npm init -y

2.  Setting up package.json
    i. Install the following dependencies

        --npm i cors dotenv express mongoose

ii. Install the following development dependencies

      --npm i -D nodemon

After installing the dependencies the package.json folder should look as follows.

<!-- // package.json
{
  "name": "mern-todo",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "config": "^3.3.6",
    "cors": "^2.8.5",
    "dotenv": "^10.0.0",
    "express": "^4.17.1",
    "mongoose": "^5.13.2"
  },
  "devDependencies": {
    "nodemon": "^2.0.11"
  }
} -->

iii. change the main entry point to server.js

  <!-- "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon index.js"
  } -->

And start the server using nodemon using the following code.

     -- npm run start

# API Endpoints

#### Register User

#### Login User

#### Get All Todos

#### Post a Todo by a registered and logged in user

#### Delete a Todo by a registered and logged in user

#### Edit a Todo by a registered and logged in user

#### Get all Todos by a single user

#### Get a Todo by a single ID

## API Documentation Link

https://documenter.getpostman.com/view/37120696/2sA3kUH2zU

