# 🚀 CodeAlpha — URL Shortener Web Application

A full-stack URL Shortener Web Application developed as part of the *CodeAlpha Internship Program*.  
This project allows users to convert long URLs into short, shareable links and automatically redirects users to the original destination.

---

## 📌 Overview

The application provides an easy way to shorten long URLs using a modern full-stack architecture.  
It includes a backend API, database integration, and a simple frontend interface.

---

## ✨ Features

✅ Shorten long URLs into unique short links  
✅ Automatic redirection to original URL  
✅ REST API based backend  
✅ MongoDB database integration  
✅ User-friendly frontend interface  
✅ Real-time short link generation  

---

👩‍💻 Author

Madhulina Ghosh
CodeAlpha Internship Project

---

📄 Internship Details

Organization: CodeAlpha

Domain: Backend Development

Project: URL Shortener Web Application

---

## 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| Backend | Node.js, Express.js |
| Database | MongoDB |
| Frontend | HTML, CSS, JavaScript |
| Tools    | VS Code, Git, GitHub |

---

⚙️ Setup Instructions

1️⃣ Clone the Repository

git clone https://github.com/madhulina-ghosh/CodeAlpha_URL_Shortner.git
2️⃣ Navigate to Project

cd CodeAlpha_Tasks/CodeAlpha_URL_Shortner

3️⃣ Install Backend Dependencies

cd Backend
npm install

4️⃣ Create Environment File

Create .env file inside Backend folder.

MONGO_URI=your_mongodb_connection_string
PORT=5000

5️⃣ Run Backend Server

npm start

6️⃣ Open Frontend

Open Frontend/index.html using Live Server.


---

## 🔌 API Endpoints

### ➤ Create Short URL
*POST* /api/shorten

*Request Body*
json
{
  "longUrl": "https://example.com"
}

Response

{
  "shortUrl": "http://localhost:5000/abc123"
}


---

➤ Redirect to Original URL

GET /:shortCode

Redirects users to the original long URL.


---

CodeAlpha_URL_Shortner/
|
│
├── backend/
│   ├── server.js        ← App entry point
│   ├── db.js            ← MongoDB connection logic
│   ├── .env.example            
│   ├── routes/
│   │   └── urlRoutes.js ← API routes
│   ├── models/
│   │   └── Url.js       ← MongoDB schema
│   └── package.json
│
└── frontend/
    ├── index.html
    ├── style.css
    └── script.js
    │
    ├── .gitignore
    └── README.md


---

⚙️ How It Works

1. User enters a long URL in frontend.


2. Frontend sends request to backend API.


3. Backend generates a unique short code.


4. URL is stored in MongoDB database.


5. Short URL is returned to the user.


6. Opening the short URL redirects to original website.