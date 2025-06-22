# 📦 CRUD API with MongoDB & Mongoose

This is a simple Node.js application that allows us to **Create**, **Read**, **Update**, and **Delete (CRUD)** product entries in a MongoDB database using **Express** and **Mongoose**.

## 📁 Project Structure

```text
.
├── controllers/
│   └── product.controller.js 
├── models/
│   └── product.model.js
├── routes/
│   └── product.route.js
├── .env
├── .gitignore
├── index.js
├── package.json
└── README.md
```

---

## ⚙️ Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB Atlas**
- **Mongoose**
- **dotenv**

---
## 📡 API Endpoints

| Method | Endpoint              | Description          |
|--------|-----------------------|----------------------|
| GET    | `/api/products`       | Get all products     |
| GET    | `/api/products/:id`   | Get a single product |
| POST   | `/api/products`       | Create a new product |
| PUT    | `/api/products/:id`   | Update a product     |
| DELETE | `/api/products/:id`   | Delete a product     |


