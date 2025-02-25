<h2 align="center">Backend API</h2>

## About:

This project is a simple backend API built with Node.js, Express, and MongoDB. It was created as a learning exercise to understand the fundamentals of backend development, including setting up an Express server, connecting to a MongoDB database, and performing CRUD (Create, Read, Update, Delete) operations.

## Features:

### CRUD Operations

- **Create Product:** Add new products to the database.
- **Read Products:** Retrieve details of all products or a specific product by ID.
- **Update Product:** Modify existing product details.
- **Delete Product:** Remove products from the database.

### Database Connectivity

- **MongoDB Integration:** Uses MongoDB for data storage, providing a flexible and scalable NoSQL database solution.
- **Mongoose ORM:** Simplifies interactions with MongoDB, enabling easy schema definition and validation.

### Middleware

- **JSON Parsing:** Automatically parses incoming JSON requests.
- **URL Encoded Data:** Supports URL-encoded data, allowing form submissions.

## Built With

- ![Node.js][Node.js]
- ![Express][Express]
- ![MongoDB][MongoDB]

## Detailed explanation
#### `index.js`
- This is the entry point of the application.
- It sets up the Express server, connects to the MongoDB database, and defines the middleware for parsing JSON and URL-encoded data.
- It also imports and uses the routes described in `product.route.js`.

#### `product.controller.js`
- This file contains the logic for handling product-related requests.
- It defines functions for getting all products, getting a product by ID, creating a new product, updating an existing product, and deleting a product.

#### `product.route.js`
- This file defines the API routes for product management.
- It imports the controller functions and maps them to the corresponding HTTP methods and routes.

#### `product.model.js`
- This file defines the Mongoose schema and model for products.
- It specifies the structure of the product documents in the MongoDB database.

## Project Directory Structure

```plaintext
MEN-STACK/
│
├── controller/
│   └── product.controller.js
│
├── models/
│   └── product.model.js
│
├── node_modules/
│
├── routes/
│   └── product.route.js
│
├── .gitignore
├── index.js
├── package-lock.json
├── package.json
```
<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[Node.js]: https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white
[Express]: https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white
[MongoDB]: https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white
