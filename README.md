📦 Inventory Management API

A production-ready backend REST API built with Node.js, Express, and MongoDB to manage products, suppliers, stock transactions, reports, authentication, and file uploads, with JWT security and cloud deployment on Render.

📌 Features

Authentication & Authorization

JWT-based login & registration

Role-based access control (Admin/User)

Product Management

Create, update, delete, and view products

Search, filter, and paginate product listings

Attach product images via Cloudinary

Stock Management

Stock In & Stock Out operations

Automatic quantity updates

Track inventory movement

Supplier Management

Add and manage suppliers

Link suppliers to products

Reports & Analytics

Inventory summary reports

Stock overview and insights

File Uploads

Image upload using Multer

Cloud storage with Cloudinary

Deployment

Hosted on Render

MongoDB Atlas cloud database

🛠 Tech Stack

Node.js → Backend runtime environment

Express.js → REST API framework & routing

MongoDB → NoSQL database

Mongoose → ODM for schema & data modeling

JWT → Authentication & authorization

Multer → File upload handling

Cloudinary → Cloud image storage

Render → Cloud deployment

🌐 Live API

🔗 https://inventory-management-api-kd6n.onrender.com/

Health Check:

GET /
→ Inventory API is running

🔑 API Highlights
POST   /api/auth/register
POST   /api/auth/login

POST   /api/products
GET    /api/products
PUT    /api/products/:id
DELETE /api/products/:id

POST   /api/stock/in
POST   /api/stock/out

GET    /api/reports/summary
POST   /api/upload

📸 API Testing (Postman)

JWT-protected routes using Authorization: Bearer <token>

Tested using Postman with real cloud deployment

🚀 Deployment

Backend deployed on Render

Database hosted on MongoDB Atlas

Environment variables securely configured













#  🚀 Inventory Management API
# A fully featured Inventory & Stock Management Backend built with Node.js, Express, MongoDB (Atlas), JWT Authentication, and Cloudinary uploads.
This project is designed as a production-ready REST API used for managing products, suppliers, stock transactions, reports, and file uploads.


##
🌐 Live API URL
👉 https://inventory-management-api-kd6n.onrender.com

Check health:
GET /
→ Inventory API is running

🧩 Features---

🔐 Authentication & Roles:
Register / Login with JWT
Role-based access (admin, user)
Secured protected routes


📦 Product Management:
Add new products
Update product details
Soft delete / remove
Search + filter + pagination
Attach product images via Cloudinary


🚚 Supplier Management--
Add suppliers
List suppliers
Update supplier details


📊 Stock Control--
Stock In (purchase / add quantity)
Stock Out (sales / remove quantity)
Automatic stock level updates
Track total quantity and history


📁 File Uploads--
Cloudinary storage for image uploads
Upload product images using form-data


📈 Reports & Analytics--
Inventory summary
Stock movement stats
Low stock alerts (if implemented in UI)


☁ Production Deployment-
Hosted on Render
UseD MongoDB Atlas
EnvirOnment variables secured


🛠 Tech Stack

Backend:
Node.jS
Express.js

Database:
MongoDB Atlas
Mongoose ORM



Authentication:
JWT (JSON Web Tokens)


File Uploads:
Multer
Cloudinary


Hosting:
Render (Web Service)




📂 Project Structure
Inventory-Management-API/
│
├── server.js
├── package.json
├── .gitignore
├── .env  (not included in repo)
│
└── src/
    ├── config/
    │   ├── db.js
    │   └── cloudinary.js
    │
    ├── controllers/
    │   ├── authController.js
    │   ├── productController.js
    │   ├── stockController.js
    │   ├── reportController.js
    │   ├── supplierController.js
    │   └── uploadController.js
    │
    ├── middleware/
    │   ├── auth.js
    │   └── errorHandler.js
    │
    ├── models/
    │   ├── User.js
    │   ├── Product.js
    │   ├── Supplier.js
    │   └── Stock.js
    │
    ├── routes/
    │   ├── authRoutes.js
    │   ├── productRoutes.js
    │   ├── stockRoutes.js
    │   ├── reportRoutes.js
    │   ├── supplierRoutes.js
    │   └── uploadRoutes.js
    │
    └── utils/
        └── queryFeatures.js
