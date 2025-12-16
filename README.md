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
