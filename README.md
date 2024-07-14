# Chocolate Euphoria Backend

`Chocolate Euphoria Backend` is a RESTful API built with `Node.js` and `Express.js`, designed to manage products, reviews, subscriptions, and promocodes for a chocolate store.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Routes](#routes)
  - [Products](#products)
  - [Reviews](#reviews)
  - [Subscribe](#subscribe)
  - [Promocodes](#promocodes)
  - [Orders](#orders)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)
- [Deployment](#deployment)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/KristinaHranovska/chocolate-euphoria-backend.git
   cd chocolate-euphoria-backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root directory and add your environment variables (see Environment Variables section).
4. Start the server:
   ```bash
   npm run dev
   ```
   The server will run on `http://localhost:3000`.

## Usage

To interact with the API, you can use tools like `Postman` or `cURL`. Below are the available routes and their descriptions.

## API Documentation

The API is documented using `Swagger`. After starting the server, you can access the `Swagger UI` at:

```arduino
https://chocolate-euphoria-backend.onrender.com/api-docs
```

## Routes

### Products

- Get all products

  ```http
  GET /products
  ```

Response:

```json
[
  {
    "_id": "665b04985a6b6fa18a935f59",
    "productName": "Lime & Sea Salt dark chocolate",
    "category": "Dark chocolate",
    "price": "66 UAH",
    "description": "Sea salt and chocolate is a unique combination that has completely taken...",
    "compound": [
      "Sustainably grown chocolate",
      "Palm oil free & all natural ingredients",
      "Recyclable packaging",
      "Proudly made in York, North Yorkshire",
      "Registered with The Vegan Society"
    ],
    "photo": "https://res.cloudinary.com/dntbkzhtq/image/upload/v1715618947/limeAmdS..."
  }
]
```

- Get a product by ID

  ```http
  GET /products/:id
  ```

  Parameters:

  - `id` (string): The ID of the product.

### Reviews

- Get all reviews

```http
GET /reviews
```

Response:

```json
[
  {
    "_id": "665b04985a6b6fa18a935f59",
    "name": "John Doe",
    "email": "john.doe@example.com",
    "phone": "(12) 345-6789",
    "comment": "Great chocolate! Highly recommend."
  }
]
```

- Create a new review

```http
POST /reviews
```

Request body:

```json
{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "phone": "(12) 345-6789",
  "comment": "Great chocolate! Highly recommend."
}
```

### Subscribe

- Subscribe a user by email

```http
POST /subscribe
```

Request body:

```json
{
  "email": "user@example.com"
}
```

### Promocodes

- Get a random promocode

```http
GET /promocodes
```

Request body:

```json
{
  "promocode": "SAVE10",
  "percent": 10
}
```

- Check a promocode

```http
POST /promocodes/check
```

Request body:

```json
{
  "promocode": "SAVE10"
}
```

Response:

```json
{
  "promocode": "SAVE10",
  "percent": 10
}
```

### Order

- Create a new order

```http
POST /order
```

Request body:

```json
{
  "userContact": {
    "firstName": "John",
    "lastName": "Doe",
    "phone": "12-345-6789",
    "email": "john.doe@example.com",
    "selectRegion": "Some Region",
    "selectCity": "Some City",
    "comment": "Please deliver between 9 AM to 5 PM"
  },
  "order": [
    {
      "nameProduct": "Lime & Sea Salt dark chocolate",
      "photo": "https://res.cloudinary.com/dntbkzhtq/image/upload/v1715618947/limeAmdS...",
      "quantity": 2,
      "total": "132 UAH"
    }
  ],
  "totalPrice": 132,
  "discount": 0,
  "status": "Order accepted"
}
```

## Environment Variables

Create a `.env` file in the root directory of your project and add the following environment variables:

```makefile
DB_HOST=your_mongodb_connection_string
PORT=3000
```

Replace `your_mongodb_connection_string` with your actual MongoDB connection string.

## Contributing

If you would like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Create a new Pull Request.

## Deployment

The code is deployed using [render.com](https://render.com/). You can access the deployed application at:

```arduino
https://chocolate-euphoria-backend.onrender.com
```
