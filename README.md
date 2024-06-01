# Chocolate Euphoria Backend

Chocolate Euphoria Backend is a RESTful API built with `Node.js` and `Express.js`, designed to manage products and reviews for a chocolate store.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Routes](#routes)
  - [Products](#products)
  - [Reviews](#reviews)
  - [Subscribe](#subscribe)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)
- [License](#license)

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

# Products

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
