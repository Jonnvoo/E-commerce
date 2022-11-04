# E-commerce

## Description 
In this app, it uses sequelize and SQL to create a database for an e-commerce store. The sequelize package helps us create the SQL tables for our data to sit in. Within the model 
When the tables are created we seed the data given. Also in the models we created, we have foreign keys to connect our tables to each other, "belongsToMany" and "hasMany" were used to connect the products, tags, and categories to each other. Once everything is connected and the seed is placed we have routes for the categories, prodcuts, and tags. All three of these routes have a get all, get single id, create new, update an id, and delete id.

## User Story 
AS A manager at an internet retail company</br>
I WANT a back end for my e-commerce website that uses the latest technologies</br>
SO THAT my company can compete with other e-commerce comp</br>

## Acceptance Criteria 
GIVEN a functional Express.js API</br>
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file</br>
THEN I am able to connect to a database using Sequelize</br>
WHEN I enter schema and seed commands</br>
THEN a development database is created and is seeded with test data</br>
WHEN I enter the command to invoke the application</br>
THEN my server is started and the Sequelize models are synced to the MySQL database</br>
WHEN I open API GET routes in Insomnia Core for categories, products, or tags</br>
THEN the data for each of these routes is displayed in a formatted JSON</br>
WHEN I test API POST, PUT, and DELETE routes in Insomnia Core</br>
THEN I am able to successfully create, update, and delete data in my database</br>

## Installation
npm i sequelize</br>
npm i mysql2</br>
npm i express</br>
npm i dotenv</br>
npm i nodemon</br>

## Usage
The mysql2 package helps with bringing the data base from SQL to your javascript file. Sequelize lets you model the tables to be created in SQL from the javascript file. Express will allow you to host your local server to test the routes. The dotenv allows you to encrypt your password, username, and data_base. Just be sure to create a ".env" file to put your encryptions. Also, make sure the names match with the connection.js file. Nodemon isn't a required package but it restarts your server every time you run it so you won't have to keep "node server.js".
## ScreenShot
Example of the All Products route
![ ScreenShot](./assets/AllProducts.PNG)




## Link
https://www.youtube.com/watch?v=PnQZUCG7kdE



## Questions 
Message me at these links for further questions.

https://github.com/Jonnvoo</br>
Jonathanvu2065@gmail.com

