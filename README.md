# 🎓 **Seeker - Learning Management System**

_A modern platform for learning, teaching, and growing knowledge._

Seeker is a sleek, full-featured **Learning Management System (LMS)** built with **React** and **Node.js**. Designed for both **students** and **educators**, it offers a smooth, intuitive, and powerful online education experience — from course creation to immersive learning.

---

## ✨ **Features**

### 👨‍🎓 For Students

- 🔍 **Explore** and search through courses
- 📘 **Detailed course pages** with rich content
- ✅ **Enroll** in courses easily
- 📊 Track **your personal learning progress**
- ▶️ **Video lesson player** with seamless streaming
- ⏳ Friendly **loading states** for smooth UX

### 👨‍🏫 For Educators

- 🧭 **Dashboard** for full course control
- 🛠️ **Create and manage** your own courses
- 👥 Monitor **student enrollments**
- 📈 Get access to **course analytics**
- 📤 Upload and manage rich course content

---

## 🛠️ **Tech Stack**

### 🖥️ Frontend

- ⚛️ **React** (v19)
- ⚡ **Vite** – lightning-fast build tool
- 🧭 **React Router DOM** (v7)
- 🎨 **Tailwind CSS** – utility-first styling
- 📡 **Axios** – HTTP requests
- 🔔 **React Hot Toast** – Toast notifications
- ✍️ **Quill** – Rich text editing
- 📺 **React YouTube** – Embed video lessons
- 📶 **RC Progress** – Display progress bars

### 🖥️ Backend

- 🚀 **Node.js** + **Express** – REST API
- 🍃 **MongoDB** + **Mongoose** – NoSQL database
- 🔐 **Clerk** – User authentication
- ☁️ **Cloudinary** – Image & video storage
- 💳 **Stripe** – Secure payments
- 📦 **Multer** – File uploads
- 🌐 **CORS** – Cross-origin resource sharing

---

## 📁 **Project Structure**

```bash
client/
├── src/
│   ├── assets/         # Static files
│   ├── components/     # UI components
│   │   ├── educator/   # Educator UI
│   │   └── student/    # Student UI
│   ├── context/        # Global context
│   ├── pages/          # Route pages
│   │   ├── educator/   # Educator pages
│   │   └── student/    # Student pages
│   ├── App.jsx         # Root component
│   └── main.jsx        # App entry point

server/
├── configs/            # Configuration
├── controllers/        # Logic controllers
├── middlewares/        # Middleware functions
├── models/             # DB schemas
├── routes/             # API routes
└── server.js           # Express app entry
```

---

## 🔗 **App Routes**

### 🎓 Student

- `/` – Home
- `/course-list` – View all courses
- `/course-list/:input` – Search courses
- `/course/:id` – View course details
- `/my-enrollments` – Your enrolled courses
- `/player/:courseId` – Video player

### 🧑‍🏫 Educator

- `/educator` – Dashboard
- `/educator/add-course` – Create a course
- `/educator/my-courses` – Manage your courses
- `/educator/students-enrolled` – View student enrollments

---

## 🚀 **Getting Started**

1. 📦 **Clone** the repository
2. 📁 **Install dependencies**:

   ```bash
   # Client
   cd client
   npm install

   # Server
   cd server
   npm install
   ```

3. ⚙️ **Set up environment variables**
4. ▶️ **Start development servers**:

   ```bash
   # Client
   cd client
   npm run dev

   # Server
   cd server
   npm run server
   ```

---

## 💻 **Development Scripts**

### Client

- `npm run dev` – Launch dev server
- `npm run build` – Create production build
- `npm run preview` – Preview production build

### Server

- `npm run server` – Start server with nodemon
- `npm start` – Start production server

---

## ⚙️ **Environment Variables**

### 📄 Frontend (`.env`)

```bash
VITE_CLERK_PUBLISHABLE_KEY=your-clerk-key
VITE_CURRENCY=$
VITE_BACKEND_URL=http://localhost:5000
```

### 📄 Backend (`.env`)

```bash
# MongoDB
MONGODB_URI=your-mongodb-uri

# Clerk Auth
CLERK_WEBHOOK_SECRET=your-secret
CLERK_PUBLISHABLE_KEY=your-key
CLERK_SECRET_KEY=your-secret

# Cloudinary
CLOUDINARY_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-key
CLOUDINARY_SECRET_KEY=your-secret

# Stripe
STRIPE_PUBLISHABLE_KEY=your-publishable-key
STRIPE_SECRET_KEY=your-secret-key
STRIPE_WEBHOOK_SECRET=your-webhook-secret

# Currency
CURRENCY=USD
```

---

## 📝 **License**

Licensed under **ISC** 📄

---

## 🤝 **Contributing**

Have ideas or want to help improve Seeker?  
We welcome **issues**, **pull requests**, and **feature suggestions**. Let's build something amazing together! 💡🚀
