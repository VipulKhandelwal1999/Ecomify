# ECOMIFY E-COMMERCE STORE

Ecomify is an E-Commerce platform built using MERN stack & Redux.

### [Live Demo](https://ecomify-store.herokuapp.com/)

![screenshot](https://raw.githubusercontent.com/VipulKhandelwal1999/ecomify/master/uploads/Homepage.png)

![screenshot](https://raw.githubusercontent.com/VipulKhandelwal1999/ecomify/master/uploads/Homepage_Latest_Products.png)

![screenshot](https://raw.githubusercontent.com/VipulKhandelwal1999/ecomify/master/uploads/Product_Page.png)

---

## Features

- Full Featured Shopping Cart
- Product Reviews And Ratings
- Top Products Carousel
- Product Pagination
- Search Products
- User Authentication
- User Profile With Orders
- Admin Panel
- Admin Product Management
- Admin User Management
- Admin Order Details Page
- Checkout Process (Shipping, Payment Method, etc)
- Payment Gateway Integration (PayPal / Razorpay)
- Payment Methods Supported (Paypal / Credit Card / Debit Card / UPI / GPAY / PHONEPE / PAYTM / COD)
- Database seeder (products & users)
- Awesome UI

---

## Tech Stack Used

- [Visual Studio Code](https://code.visualstudio.com/) - A source code editor developed by Microsoft for Windows, Linux and macOS.
- [Git](https://git-scm.com/) - Git is software for tracking changes in any set of files.
- [Github](https://github.com/) - GitHub, Inc. is a provider of Internet hosting for software development and version control using Git.
- [React](https://reactjs.org/) - A javascript library for building user interfaces
- [Create react app](https://create-react-app.dev/) - A quick method to start developing a react application.
- [React Bootstrap](https://react-bootstrap.github.io/) - The most popular front-end framework rebuilt for React.
- [Redux](https://redux.js.org/) - Redux is an open-source JavaScript library for managing application state.
- [Node.js](https://nodejs.org/en/) - Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.
- [Express.js](https://expressjs.com/) - Express.js, or simply Express, is a back end web application framework for Node.js
- [MongoDB](https://www.mongodb.com/) - MongoDB is a general purpose, document-based, distributed database built for modern application developers and for the cloud era.
- [JWT](https://jwt.io/) - JSON Web Tokens are an open, industry standard RFC 7519 method for representing claims securely between two parties.
- [Razorpay](https://razorpay.com/) - Razorpay is the only payments solution in India that allows businesses to accept, process and disburse payments with its product suite.
- [PayPal](https://developer.paypal.com/) - PayPal is the faster, safer way to send money, make an online payment, receive money or set up a merchant account.

---

## Usage

### Prerequisites

The following software is required to be installed on your system:

- Node 14.x
- Npm 6.x

Type the following commands in the terminal to verify your node and npm versions

```bash
node -v
npm -v
```

---

### Env Variables

Create a .env file in then root and add the following

```
NODE_ENV = development
PORT = 5000
MONGO_URI = your mongodb uri
JWT_SECRET = secret231313
PAYPAL_CLIENT_ID = your paypal client id
RAZORPAY_KEY_ID = your razorpay key id
RAZORPAY_KEY_SECRET = your razorpay key secret
```

---

### Install Dependencies (frontend & backend)

```
npm install
cd frontend
npm install
```

---

### Run

```
# Run frontend (:3000) & backend (:5000)
npm run dev

# Run backend only
npm run server
```

---

### Seed Database

You can use the following commands to seed the database with some sample users and products as well as destroy all data.

```
# Import data
npm run data:import

# Destroy data
npm run data:destroy
```

---

### Sample User Logins

```
admin@ecomify.com (Admin)
123456

user1@ecomify.com (Customer)
123456

user2@ecomify.com (Customer)
123456
```

---
