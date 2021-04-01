# Steps in creating this project
Create the Server.js file for the backend and install express 
    install express, dotenv, body-parser, mongoose 

Add basic funcionality to the server.js file 

Create react app in the client folder to have a front end set up 

Change server port / and package.json to run concurrently

Now that the shell for the front an back end are created create user stories for project
    Client Side:
        Given I am a User, When I load the app, Then I am presented an option to login in or register.

        Given I am a User, When I login, Then I am taken to that specific users hompage.

        Given I am a User, When I register, Then I am taken to that specific users hompage.
    Server Side:
        Given I am a UI, When I make a GET API call for Login Info, Then I am given an array of Objects to populate that USER homepage.

        Given I am a UI, When I make a POST API call for Login, Then I am able to create a new User to the Database.

Create the database by setting up the schema and models 

Add middleware for user and item to the server.js file through the controllers

Add proxy for CORS and imported home component into the appjs 

Create UsersController in routes folder to get User Data from DB schema 

Create sign in and register panels for user to enter the portal 

Sign in has password type and when button is clicked it redirects to User page

User page says Welcome Users and has a log out button that redirects back to home page