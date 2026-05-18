# IntraView — Real-Time Collaborative Coding Platform

🚀 **Live Demo:** [IntraView Live Demo](https://intraview.onrender.com?utm_source=chatgpt.com)

IntraView is a full-stack collaborative coding and technical interview platform built for real-time problem solving. Users can create interview rooms, communicate through live video and chat, and collaboratively write and execute code together.

---

# ✨ Features

* 🎥 Real-time video calling & chat using Stream
* 💻 Collaborative coding environment
* ⚡ Live code execution for JavaScript, Python, and Java
* 🔐 Secure authentication with Clerk
* 🔄 Event-driven user syncing with Inngest
* 📊 Responsive dashboard for sessions and problems

---

# 🛠️ Tech Stack

### Frontend

* React.js (Vite)
* Tailwind CSS
* Zustand / React Context
* Axios

### Backend

* Node.js
* Express.js
* MongoDB & Mongoose

### Services

* Clerk (Authentication)
* Stream (Video & Chat)
* Inngest (Background Jobs)
* Paiza.io (Code Execution)

---

# 🧠 Architecture Highlights

### Monolithic Deployment

The Express backend serves both API routes and the compiled React frontend from a single origin to ensure secure cookie-based authentication without CORS issues.

### Backend Proxy Execution

User code is securely sent to the backend, which forwards execution requests to Paiza.io. This protects API credentials and bypasses browser CORS restrictions.

### Event-Driven Syncing

Clerk webhooks trigger Inngest background jobs that automatically sync users across MongoDB and Stream.

---

# 🚀 Local Setup

## Clone Repository

```bash
git clone https://github.com/yourusername/intraview.git
cd intraview
```

---

## Backend `.env`

```env
PORT=3000
DB_URL=your_mongodb_connection_string

NODE_ENV=development
CLIENT_URL=http://localhost:5173

STREAM_API_KEY=your_stream_key
STREAM_API_SECRET=your_stream_secret

CLERK_SECRET_KEY=your_clerk_secret
CLERK_PUBLISHABLE_KEY=your_clerk_publishable
```

---

## Frontend `.env`

```env
VITE_API_URL=http://localhost:3000/api
VITE_STREAM_API_KEY=your_stream_key
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable
```

---

## Install & Build

```bash
npm run build
```

---

## Run Application

### Production

```bash
npm run start
```

### Development

Frontend:

```bash
cd frontend
npm run dev
```

Backend:

```bash
cd backend
npm run dev
```

---
