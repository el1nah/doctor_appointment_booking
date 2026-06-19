# Doctor Appointment Booking Web Application
A full-stack medical booking system featuring secure role-based access control, automated scheduling workflows, and a live administrative data dashboard.

## Table of Contents
1. [Technology Stack and Utilities](#technology-stack-and-utilities)
2. [Core Engineering Features](#core-engineering-features)
3. [Installation and Setup](#installation-and-setup)
4. [Modular Project Layout](#modular-project-layout)
  
## Technology Stack and Utilities
- MongoDB
- Express.js
- React.js
- Node.js
- Tailwind CSS
- Axios
- Cloudinary
- JWT
  
## Core Engineering Features
- **Multi-Role Authentication:** Isolated, secure system portals for platform administrators and standard users via custom JSON Web Token (JWT) verification middleware.
- **Dynamic Scheduling Pipeline:** Live booking architecture allowing users to secure specific calendar slots, with real-time tracking for available doctor sessions.
- **Data Integrity & Normalization:** Relational Mongoose data modeling connecting appointments to live user references via `ObjectId`, preventing stale data states.
- **Administrative Control Panel:** Master CRUD capabilities allowing admins to globally oversee doctor directories, monitor user profiles, and audit scheduling flows.
- **Cloud Assets Management:** Integrated Cloudinary storage API for secure, optimized image processing and user avatar tracking.  
  
## Installation and Setup
Follow these steps to run the application locally on your machine.

### 1. Clone the Repository
```bash
git clone https://github.com.git
cd <your-repo-name>
```

### 2. Configure Environment Variables
Create a `.env` file in your backend directory and populate the required credentials:
```env
PORT = your_backend_port
MONGODB_URI = your_mongodb_connection_string
JWT_SECRET = your_jwt_token_secret
ADMIN_EMAIL = your_admin_email
ADMIN_PASSWORD = your_admin_password
CLOUDINARY_NAME = your_cloudinary_name
CLOUDINARY_API_KEY = your_api_key
CLOUDINARY_SECRET_KEY = your_secret_key
```
Create a `.env` file in your frontend directory and populate the required credentials:
```env
PORT = your_frontend_port
```
Create a `.env` file in your admin directory and populate the required credentials:
```env
PORT = your_admin_port
```

### 3. Install Dependencies & Start Services
Open three terminal windows to launch the backend server and the React frontend and admin client.

#### For the Backend Server:
```bash
cd backend
npm install
npm run server
```

#### For the Frontend Client:
```bash
cd frontend
npm install
npm run dev
```
#### For the Admin:
```bash
cd admin
npm install
npm run dev
```



## Modular Project Layout
```text
├── backend/
│   ├── config/             # MongoDB & Cloudinary setup
│   ├── controllers/        # Core admin, user, doctor controller logic
│   ├── middleware/         # Admin/User Authentication guards with multer
│   ├── models/             # Structured Mongoose schemas (User, Appointment, Doctor)
│   └── routes/             # Express route mappings
├── frontend/
│    └── src/
│       ├── assets/          # Assets files like images
│       ├── components/      # Reusable UI modules (Navbar, Footer, etc.)
│       ├── context/         # Global state providers (AppContext, AdminContext)
│       ├── pages/           # Portal layouts (Home, About, Login, etc.)
│       └── App.jsx          # Primary route configuration
└── admin/
    └── src/
        ├── assets/          # Assets files like images
        ├── components/      # Reusable UI modules (Navbar, Sidebar)
        ├── context/         # Global state providers (AppContext, AdminContext)
        ├── pages/           # Portal layouts (Dashboard, etc.)
        └── App.jsx          # Primary route configuration
```
