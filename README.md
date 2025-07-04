
-----

# 📚 BookWish – A Modern Library Management System (Frontend)

**BookWish** is a sleek and minimal **Library Management System frontend** built with modern web technologies. It allows users to browse, manage, and borrow books – all in a fast and intuitive interface.

-----

## 🚀 Tech Highlights

  * ⚛️ **React + TypeScript** – Robust, scalable UI
  * ⚙️ **Redux Toolkit + RTK Query** – State & data management
  * 🎨 **Tailwind CSS + ShadCN UI** – Modern, elegant styling
  * 🔔 **Toast Notifications** – Instant user feedback
  * ⚡ **Vite** – Fast build tool
 

-----

## 🌐 Live Preview

🔗 [Live Site (frontend) – BookWish](https://bookwish3.netlify.app)  
🔗 [Live Site (backend) – BookWish](https://library-management-api-beta-ten.vercel.app/api)

-----

## 🔗 Backend Repository

  * **GitHub Repo**: [Backend](https://github.com/arman-miaa/library-management-api)

-----

## ✨ Features

### 📚 Book Management

  * ➕ Add new books
  * ✏️ Edit or 🗑️ delete existing ones
  * 🔍 Filter by **genre**
  * ⏱️ Sort by newest or oldest
  * ✅ Responsive design, loading states, and clear error messages

### 📖 Borrow Books

  * 📦 Select quantity and due date
  * 🔒 Validation for available copies
  * ❌ Books auto-marked unavailable if copies run out
  * 🔄 Redirect to borrow summary upon success

### 📊 Borrow Summary

  * 📘 Shows borrowed books
  * 🔢 Total quantity calculation
  * 🔎 Displays title and ISBN clearly

-----

## 📁 Folder Structure

Based on your project screenshot:

```
bookwish-frontend/
├── node_modules/         # Project dependencies
├── public/               # Static assets (e.g., index.html, favicon)
├── src/                  # All source code
│   ├── assets/           # Static files like images, fonts, etc.
│   ├── components/       # Reusable UI components
│   ├── layout/           # Application layout components (e.g., Header, Footer)
│   ├── lib/              # Utility functions, helpers
│   ├── pages/            # Main pages/views of the application
│   ├── providers/        # Context providers or global state wrappers
│   ├── redux/            # Redux Toolkit setup, slices, and RTK Query API definitions
│   ├── routes/           # Application route definitions
│   ├── App.tsx           # Main application component
│   ├── hook.ts           # Custom React hooks
│   ├── index.css         # Global CSS styles
│   ├── main.tsx          # Entry point of the React application
│   ├── types.ts          # Global TypeScript type definitions
│   └── vite-env.d.ts     # Vite environment type declarations
├── .gitignore            # Git ignore file

```

-----

## ⚙️ Getting Started

```bash
# 1. Clone the repository
git clone https://github.com/arman-miaa/BookWise
cd BookWise

# 2. Install dependencies
npm install # or pnpm install if you're using pnpm

# 3. Run the development server
npm run dev
```

> 🔁 Make sure your backend is running at `http://localhost:5000`

-----


-----

## 📌 Project Notes

> 📌 This is a public demo — no login or registration required.
> All data is fetched and stored via a live Express + MongoDB backend.

-----