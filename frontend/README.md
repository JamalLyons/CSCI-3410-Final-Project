# Task Manager App

This is a Task Manager application built with Java Spring Boot for the backend and React for the frontend.

## Overview

The Task Manager allows users to perform CRUD (Create, Read, Update, Delete) operations on tasks. It provides endpoints for managing tasks on the backend and a user interface to interact with these endpoints on the frontend.

## Backend

The backend of the Task Manager is built with Java Spring Boot, providing RESTful API endpoints for managing tasks. It uses the following algorithms and data structures:

- Data Structures:
  - HashMap: Used for storing tasks in memory.

- Endpoints:
  - GET /tasks: Retrieve all tasks.
  - POST /tasks: Create a new task.
  - PUT /tasks/{id}: Update an existing task.
  - DELETE /tasks/{id}: Delete a task by ID.

## Frontend

The frontend of the Task Manager is built with React, providing a user interface to interact with the backend API. It uses the following components:

- TaskList: Displays a list of tasks fetched from the backend every 5 seconds.
- CreateTask: Allows users to create a new task by providing a title, description, due date, and priority.
- UpdateTask: Allows users to update an existing task by providing the task ID along with updated information.
- DeleteTask: Allows users to delete a task by providing the task ID.

The frontend interacts with the backend API using Axios to perform HTTP requests to the corresponding endpoints.

## Running the Application

### Backend
1. Clone the repository: `git clone <repository-url>`
2. Navigate to the backend directory: `cd backend`
3. Run the Spring Boot application: `./mvnw spring-boot:run`

The backend will run on port 8080 by default.

### Frontend
1. Navigate to the frontend directory: `cd frontend`
2. Install dependencies: `npm install`
3. Start the React development server: `npm start`

The frontend will run on port 3000 by default.

## Dependencies

### Backend
- Spring Boot: Backend framework for building Java applications.
- Spring Web: Dependency for building web applications with Spring MVC.
- Spring Data JPA: Allows easy implementation of JPA-based repositories.
- H2 Database: In-memory database for storing tasks during development.

### Frontend
- React: JavaScript library for building user interfaces.
- Axios: Promise-based HTTP client for making requests to the backend API.
- Tailwind CSS: Utility-first CSS framework for styling components.