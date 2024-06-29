# Novamed Hospital Management System (MERN Stack)

Welcome to **Novamed Hospital Management System**! This comprehensive application is designed to streamline the process of managing hospital services while also allowing users to schedule appointments with in-house doctors across various departments. Built using the powerful MERN stack (MongoDB, Express.js, React.js, Node.js), this project combines modern web technologies to provide a seamless user experience.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)

---

## Features

- **User Authentication**: Secure login and registration for users.
- **Department Selection**: Browse and select from a variety of medical departments.
- **Doctor Appointment Booking**: Schedule appointments with doctors from chosen departments.
- **Admin Dashboard**: Allows the admin to add new doctors, confirm appointments, and provide other admin-related insights.
- **Responsive Design**: Accessible on both desktop and mobile devices.

---

## Installation

To get started with this project, follow these steps:

### Clone the Repository

```bash
git clone https://github.com/yourusername/novamed-hospital-management.git
cd novamed-hospital-management
```


## Installation

### Install Dependencies

#### Backend

```bash
cd backend
npm install
```

#### Frontend

```bash
cd ../frontend
npm install
```

### Set Up Environment Variables

- Create a `.env` file in the `backend` directory.
- Add the following variables:

```plaintext
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

### Run the Application

#### Backend

```bash
cd backend
npm start
```

#### Frontend

```bash
cd frontend
npm start
```

Open your browser and navigate to `http://localhost:3000` to use the application.

## Usage

### Sign Up / Login

- Users can create accounts or log in with existing credentials.

### Browse Departments

- Explore available medical departments.

### Book Appointments

- Select a department, choose a doctor, and schedule appointments.

### Admin Dashboard

- See all the apointments, assign admin roles, add doctors
  

## Technologies Used

- **MongoDB**: NoSQL database to store application data.
- **Express.js**: Backend web application framework for Node.js.
- **React.js**: JavaScript library for building user interfaces.
- **Node.js**: JavaScript runtime environment.

```
