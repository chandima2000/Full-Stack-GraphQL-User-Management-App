# 🚀 GraphQL User Management App

## 📌 Overview
This project is a simple full-stack application demonstrating GraphQL with Apollo Server (Node.js backend) and Apollo Client (React frontend). It performs basic CRUD operations for a user entity including querying all users, getting a user by ID, and creating a new user.

## 🔧 Tech Stack

- **Frontend**: React, Apollo Client, GraphQL
- **Backend**: Node.js, Apollo Server
- **GraphQL**: Schema-based API with Queries and Mutations

## 🧪 Features

- Fetch all users
- Fetch a user by ID
- Create a new user
- React hooks for data fetching and mutations

## 🖥️ Backend Setup (Node.js + Apollo Server)

### 📄 server.js

Defines GraphQL types, queries, mutations, and an in-memory dataset.

### 🔧 Install & Run

```bash
cd backend
npm install @apollo/server graphql
node server.js
```

## 💻 Frontend Setup (React + Apollo Client)

### 📄 App.jsx

- Fetches all users using GET_USERS query

- Fetches a user by ID using GET_USER_BY_ID

- Adds a new user via CREATE_USER mutation

### 🔧 Install & Run

```bash
cd frontend
npm install @apollo/client graphql react react-dom
npm run dev
```

## 🧑‍💻 Author
Made by Chandima Maduwantha. Open to contributions, improvements, or questions!

## 📄 Documentations

- **Apollo Server** :- https://www.apollographql.com/docs/apollo-server
- **Apollo Client** :- https://www.apollographql.com/docs/react
- **GraphQl** :- https://graphql.org/learn/