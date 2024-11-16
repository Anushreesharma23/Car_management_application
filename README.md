# Car-Tunes 🚗

This project is a Car Management Application where users can create, view, edit, and delete car entries. The application allows users to manage their cars by uploading images, setting a title, adding a description, and tagging the cars with various attributes. It supports user authentication to ensure data privacy, where each user can only access and manage their own car entries.

[Live Demo](https://graceful-gumption-bf7a01.netlify.app/)

[Backend Link](https://car-management-application-8dkv.onrender.com)

---

## 🛠 Features

- User Authentication: Secure sign-up and login functionality.
- Create Car Entry: Users can add a car with:
  - Up to 10 images
  - Title
  - Description
  - Tags
- View Cars:
  - View all cars created by the user.
  - Search across all cars using a keyword
  - Filter the cars with the tags
- Car Details: Click on any car to view its details.
- Edit Car Entry: Update the car's title, description, tags, or images. (For the original creator of the entry only)
- Delete Car Entry: Delete an existing car entry. (For the original creator of the entry only)

---

## 🖥 Frontend Pages

0. Home Page:

   - Tells about the deesciption of the idea to the user

1. Sign Up / Login Page:

   - User registration and login for accessing the app.

2. All Cars Page:

   - Displays all cars created by the logged-in user.
   - Includes a search bar for easy filtering. Filtering can be done based on Tags as well as Keywords in D

3. Add Car Page:

   - Form for uploading car details including images, title, description, and tags.

4. My Car Page:
   - Displays all details of a selected car.
   - Provides options to edit or delete the car entry.

---

## 📡 API Endpoints

The application uses a RESTful API to manage data. Here's a list of available endpoints:
The Base URL is the backend URL: (https://car-management-application-8dkv.onrender.com)

- User Management:

  - POST /api/user/register-user : Create a new user.
  - POST /api/user/login-user : Authenticate a user.

- Car Management:
  - GET /api/product/all-products : Shows the list of all the Cars made by all the users.
  - GET /api/product/my-products : Shows a list of all the Cars made by a particular user. The user must be authenticated to see it.
  - POST /api/product/create-product : Creates a new Car for the user. The user must be authenticated to create the car.
  - PUT /api/product/update-product/:id : Updates a specific car's details. The user must be authenticated to use this request.
  - DELETE /api/product/delete-product/:id : Deletes a car entry for a user. The user must be authenticated to delete their cars.

> API documentation is available via Postman at (/api/docs/user-docs) and (/api/docs/product-docs) for easy testing and integration.

---

## ⚙ Tech Stack

- Frontend: React.js
- Backend: Node.js, Express.js
- Database: MongoDB
- Authentication: JSON Web Tokens (JWT)
- Cloud Deployment: Deployed on Netlify and Render
- API Documentation: Postman

---

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps:

### Installation

1. Clone the repository and navigate to it:

   git clone https://github.com/Anushreesharma23/Car_management_application/
   

2. Setup the backend:

   cd ./Backend
   
   yarn
   
   nodemon index.js
   

4. Setup the frontend:
   
   cd ./Frontend
   
   yarn
   
   yarn dev
   
