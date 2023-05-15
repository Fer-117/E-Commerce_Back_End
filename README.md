# E-Commerce Back End

![License](https://img.shields.io/badge/license-mit-GREEN.svg)

## Table of contents

- [E-Commerce Back End](#e-commerce-back-end)
  - [Table of contents](#table-of-contents)
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [MIT License](#mit-license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

## Description

An e-commerce back end using express.js and sequelize.

## Installation

Since this is only a back-end project at the moment what you need to do is download or clone the repository first. Then open your IDE and in the terminal run npm install to download all the necessary dependencies. Make sure to remove the 'EXAMPLE' portion from the .env file and add your password as well as the user for your database.

## Usage

Once you have completed the installation instructions, you now have to create the database. Since I'm using MySql I open the MySql console and run 'source db/schema.sql' to run the schema.sql file which will create the database I need. You might have to follow different steps depending on the database you are using. After we have created the database, we can run 'npm run seed' in the terminal so that the database is seeded with data. Once we have completed these steps, we can run 'npm start' to start the server. When the server is up and running you can begin to consult the routes for this project using a tool like insomnia or postman. The routes you will use to consult the database are the following:

Category routes

- GET `http://localhost:3001/api/categories` &mdash; Get all categories
- GET `http://localhost:3001/api/categories/:id` &mdash; Get a single category by id. (Replace :id with the number of the category)
- POST `http://localhost:3001/api/categories` &mdash; Add a new category with the body syntax: <br>`{
	 "category_name": "example"
}`
- PUT `http://localhost:3001/api/categories/:id` &mdash; Update an existing category following the syntax: <br>`{
	"category_name": "example"
}`
- DELETE `http://localhost:3001/api/categories/:id` &mdash; Replace id number of the category you want to delete.

Product routes

- GET `http://localhost:3001/api/products` &mdash; Get all products
- GET `http://localhost:3001/api/products/:id` &mdash; Get a single product by id. (Replace :id with the number of the product)
- POST `http://localhost:3001/api/products` &mdash; Add a new product with the body syntax: <br>`{
  "product_name": "example",
  "price": example_decimal_number,
  "stock": example_integer,
  "tagIds": [Example_TagId_1, Example_TagId_2, Example_TagId_3]
}`
- PUT `http://localhost:3001/api/products/:id` &mdash; Update an existing product. Replace id with the id of the product and follow the syntax: <br>`{
  "product_name": "example",
  "price": example_decimal_number,
  "stock": example_integer,
  "tagIds": [Example_TagId_1, Example_TagId_2, Example_TagId_3]
}`
- DELETE `http://localhost:3001/api/products/:id` &mdash; Replace id number of the product you want to delete.

Tag routes

- GET `http://localhost:3001/api/tags` &mdash; Get all tags
- GET `http://localhost:3001/api/tags/:id` &mdash; Get a single tag by id. (Replace :id with the number of the tag)
- POST `http://localhost:3001/api/tags` &mdash; Add a new tag with the body syntax: <br>`{
	 "tag_name": "example"
}`
- PUT `http://localhost:3001/api/tags/:id` &mdash; Update an existing tag. Replace the :id with the id of the tag and follow the syntax: <br>`{
	 "tag_name": "example"
}`
- DELETE `http://localhost:3001/api/tags/:id` &mdash; Replace id number of the tag you want to delete.

## MIT License

A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.

## Contributing

There are no guidelines for contributing at the moment but feel free to reach out to me with any questions or suggestions.

## Tests

There are no tests for this project at the moment.

## Walkthrough video
See the video [here](#https://drive.google.com/file/d/1mFvtZJV3T9gKkVtxRkL2cDOP_Qu8-34Y/view)

## Questions

My [Github](#https://github.com/Fer-117)

Feel free to reach out to the following email with any questions or suggestions.
fsg11497@gmail.com
