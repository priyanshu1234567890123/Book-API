 Book-API

A simple RESTful API for managing books and user reviews with authentication.

  Project Setup

1. Clone the repo:
   
   git clone https://github.com/your-username/Book-API.git
   cd Book-API
   
2. Install dependencies:
   
   npm install
   
3. Create a `.env` file:
   env
   PORT=5000
   MONGO_URL=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
  
4. Run the server:
   
   npm run dev

 Run Locally
Use VS Code terminal or command line:

npm run dev
Visit: `http://localhost:5000`

 Authentication
Use `/signup` and `/login` to create and log in users. JWT token is sent as a cookie.

Example API Requests (Postman or curl)
Create Book (Authenticated)
http POST /api/books

 Get Books with Pagination & Filter
http GET /api/books?page=1&limit=5&author=George Orwell
 Post Review
http POST /api/books/:id/reviews

 Design Decisions & Assumptions
- Users can only review a book once
- JWT stored as HTTP-only cookie for auth
- Modular folder structure

 Database Schema
User:
 username, email, password (hashed)

Book:
title, author, genre, description, createdBy (User)

Review:
 book (ref Book), user (ref User), rating, comment
 Unique index on (book + user)



