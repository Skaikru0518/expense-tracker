# 💸 Expense Tracker

A modern, full-stack web application to track your incomes and expenses efficiently. It provides detailed statistics, charts, and transaction history – all wrapped in a clean, responsive UI.

🌐 **Live Demo**: [expense-tracker-1rww.onrender.com](https://expense-tracker-1rww.onrender.com/)

---

## 📌 Features

- 🔐 User authentication (signup/login)
- 📈 Interactive charts (bar, line, pie) for financial insights
- 🧾 Add/view/edit/delete income and expense entries
- 📊 Dashboard with 30-day trends and financial overview
- 🖼 Profile image upload with emoji picker
- 💾 Data persistence with MongoDB
- 🔄 JWT-based API authentication

---

## 🛠 Tech Stack

### Frontend
- React + Vite
- Axios
- Recharts
- Tailwind CSS (or custom styling)

### Backend
- Node.js + Express
- MongoDB + Mongoose
- Multer (image upload)
- JSON Web Token (JWT)
- dotenv, bcryptjs, cors

---

## 📂 Project Structure

```
skaikru0518-expense-tracker/
├── backend/
│   ├── controllers/, models/, routes/, middleware/
│   └── server.js (Express entry point)
└── frontend/
    └── expense-tracker/
        ├── src/
        │   ├── pages/, components/, layouts/, hooks/
        │   └── context/UserContext.jsx
        └── index.html, vite.config.js, etc.
```

---

## 🚀 Getting Started

### 📦 Prerequisites
- Node.js (v18 or higher)
- MongoDB running locally or Atlas cluster

### 🔧 Backend Setup

```bash
cd backend
npm install
# Add your MongoDB URI to .env as MONGO_URI
npm run dev
```

### 🧪 Frontend Setup

```bash
cd frontend/expense-tracker
npm install
npm run dev
```

---

## 🔐 Environment Variables

In the backend `.env` file:

```
PORT=5000
MONGO_URI=your_mongo_uri
JWT_SECRET=your_jwt_secret
```

---

## 📸 Screenshots

![Dashboard](https://github.com/Skaikru0518/expense-tracker/blob/master/screenshots/dashboard.png)
![Expense](https://github.com/Skaikru0518/expense-tracker/blob/master/screenshots/expense1.png)
<!-- Replace or add actual screenshots if available -->

---

## 👤 Author

- **GitHub**: [skaikru0518](https://github.com/skaikru0518)
- Project by a junior backend-focused full-stack developer 🚀

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
