# 📦 Product Management RESTful API

This is a simple but industry-style **RESTful API** built using **Node.js** and **Express**.  
It supports basic **CRUD operations** for a `products` resource — perfect for practicing real-world API development structure.

---

## ✨ Features

- Get all products
- Get a single product by ID
- Create a new product
- Update an existing product
- Delete a product
- Uses environment variables for configuration
- Custom logger middleware
- In-memory product list (no database for now)

---

## 📂 Project Structure

```text
.
├── config/
│   └── config.js 
├── models/
│   └── productModeljs
├── routes/
│   └── productRoutes.js
├── middleware/
│   └── logger.js
├── controllers/
│   └── productControllerjs
├── .env
├── .gitignore
├── app.js
├── server.js
├── package.json
└── README.md
```

---

## 📌 API Endpoints

Base URL: `http://localhost:3000/api/products`

| Method | Endpoint             | Description           |
|--------|----------------------|-----------------------|
| GET    | `/api/products`      | Get all products      |
| GET    | `/api/products/:id`  | Get product by ID     |
| POST   | `/api/products`      | Create new product    |
| PUT    | `/api/products/:id`  | Update product by ID  |
| DELETE | `/api/products/:id`  | Delete product by ID  |

### Example POST body
```json
{
  "name": "Tablet",
  "price": 300,
  "description": "A lightweight portable tablet."
}
