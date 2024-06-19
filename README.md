# User Search Application

This is a full-stack application built with React (TypeScript) for the frontend and Node.js (Express.js, TypeScript) for the backend. It allows users to search for data from a JSON file based on email and optional number criteria. The backend simulates a delayed response of 5 seconds to mimic a slow server response.

## Table of Contents

- [User Search Application](#user-search-application)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Technologies Used](#technologies-used)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Running the Application](#running-the-application)
  - [Backend API](#backend-api)
    - [Endpoints](#endpoints)
    - [Request Payload](#request-payload)
    - [Response Format](#response-format)
  - [Frontend](#frontend)
    - [Form](#form)
    - [Validation](#validation)
  - [Folder Structure](#folder-structure)
  - [License](#license)

## Features

- User can search for data based on email (required) and number (optional).
- Backend simulates a 5-second delay in processing requests.
- Frontend displays search results from the backend.

## Technologies Used

- **Frontend:**
  - React
  - TypeScript
  - Tailwindcss
  - axios (for API requests)
  - react-text-mask (for input masking)

- **Backend:**
  - Node.js
  - Express.js
  - TypeScript

## Getting Started

### Prerequisites

Make sure you have Node.js and npm (or yarn, pnpm) installed on your machine.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/thezathe/user-search-task.git
   cd user-search-task
   ```

2. Install dependencies for both frontend and backend:

   ```bash
   # Install frontend dependencies
   cd client
   npm install # I recommend using pnpm

   # Install backend dependencies
   cd server
   npm install
   ```

### Running the Application

1. **Run the Backend:**

   ```bash
   cd server
   npm run dev
   ```

   This will start the backend server at `http://localhost:3000`.

2. **Run the Frontend:**

   Open a new terminal tab or window.

   ```bash
   cd client
   npm run dev
   ```

   This will start the frontend development server at `http://localhost:5173`.

## Backend API

### Endpoints

- **POST /api/search**

  Endpoint to search for users based on email and optional number.

### Request Payload

```json
{
  "email": "user@example.com",
  "number": "12-34-56" // Optional
}
```

- **email** (required): Valid email address.
- **number** (optional): Number with format XX-XX-XX.

### Response Format

```json
[
  {
    "email": "user@example.com",
    "number": "123456"
  }
]
```

## Frontend

### Form

- **Email Field:**
  - Required input field for email address.

- **Number Field:**
  - Optional input field with masking (XX-XX-XX format).

### Validation

- **Email Validation:**
  - Valid email format check on frontend using regex.

- **Number Validation:**
  - Frontend handles formatting (masking) of number input.

## Folder Structure

```
project-root/
│
├── server/            # Backend Node.js application
│   ├── src/
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── data.json
│   │   └── server.ts
│   ├── package.json
│   └── tsconfig.json
│
└── client/           # Frontend React application
    ├── public/
    ├── src/
    │   ├── components/
    │   ├── hooks/
    │   ├── utils/
    │   ├── App.tsx
    │   ├── index.tsx
    │   └── ...
    ├── package.json
    └── tsconfig.json

```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.