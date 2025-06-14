# 🌿 Leave Management System

A simple and functional **Leave Management System** built with **Node.js**, **Express.js**, and a custom HTML/CSS/JS frontend. This application allows employees to submit leave requests and view all submitted leaves.

> ✅ Created as part of my internship at **Celebal Technologies** in the Node.js domain.

---

## 📌 Features

- 📝 Submit leave request with name, reason, and date range
- 📃 View all leave requests
- 🔄 Refresh leave list without reloading the page
- 🎨 Clean and modern UI using plain HTML, CSS & JS (no frameworks)
- 🚀 Simple Express.js backend with RESTful API routes

---

## ⚙️ Tech Stack

- **Backend**: Node.js, Express.js
- **Frontend**: HTML5, CSS3, JavaScript
- **Dev Tools**: Nodemon (auto-restart during development)


---

## 🧠 Key Concepts Used

### ✅ Routing

All API endpoints are handled through a separate router:

```js
app.use("/api/leaves", require("./routes/leaveRoutes"));
