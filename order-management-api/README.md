

# 📦 Order Management API
A simple, real-world Order Management REST API built with Node.js, Express, MongoDB Atlas, and JWT authentication.
Users can register, login, place orders, and securely view their own order history — similar to a real e-commerce backend.

---

## ✨ Features

- 🔑 User Registration & Login (passwords hashed with bcryptjs)

- 🔒 JWT-based Authentication for stateless, secure sessions

- 📦 Create Orders with multiple items and total amount

- 👀 View My Orders — each user can only see their own orders

- ☁️ Uses MongoDB Atlas as a cloud database

---

## Tech Stack
- Backend: Node.js, Express.js

- Database: MongoDB Atlas with Mongoose

- Auth: JWT (jsonwebtoken), bcryptjs

- Environment Variables: dotenv

## 📂 Project Structure

```text
.
├── controllers/
│   └── authController.js
└   └── authController.js
├── middleware/
│   └── authMiddleware.js
├── models/
│   └── Order.js
│   └── User.js
├── middleware/
│   └── logger.js
├── routes/
│   └── authRoutes.js
│   └── orderRoutes.js
├── .env
├── .gitignore
├── app.js
├── server.js
├── package.json
└── README.md
```

---

## 📌 API Endpoints


| Method | Endpoint             | Description           |
|--------|----------------------|-----------------------|
| POST    | `/api/auth/register`      | Register a new user      |
| POST    | `/api/auth/login`  | Login user & receive JWT token    |
| POST   | `/api/orders/create`      | Create a new order    |
| GET    | `/api/orders/my-orders`  | Get all orders for the logged-in user  |


