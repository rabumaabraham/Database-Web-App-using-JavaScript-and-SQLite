# Student Database Web App.

A simple web app built with **Node.js**, **Express.js**, and **SQLite** to manage student records. It allows you to **create**, **read**, and **view** student information.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)

## Features

- Allows creating a new student with **name**, **age**, and **grade**.
- Retrieve and view all student records stored in the **SQLite database**.
- Automatically creates the `students.db` SQLite database and a table for students if not already present.
  
## Technologies Used

- **Node.js** - JavaScript runtime to build the server.
- **Express.js** - Web framework for handling HTTP requests and routes.
- **SQLite** - Lightweight database for storing student records.
- **JavaScript** - Used for creating server-side logic.

## Installation

1. **Clone the repository**:

    ```bash
    git clone https://github.com/rabumaabraham/Database-Web-App-using-JavaScript-and-SQLite
    ```

2. **Navigate into the project directory**:

    ```bash
    cd student-database-web-app
    ```

3. **Install dependencies**:

    Make sure you have Node.js installed. Then, run:

    ```bash
    npm install
    ```

4. **Start the server**:

    Run the following command to start the server:

    ```bash
    node server.js
    ```

    The server will start on **http://localhost:3000**.

## Usage

1. **Get all students**:

    ```bash
    GET http://localhost:3000
    ```

    This will retrieve all student records stored in the database.

2. **Add a new student**:

    Send a **POST** request to add a new student:

    ```bash
    POST http://localhost:3000/add
    Content-Type: application/json
    {
        "name": "John Doe",
        "age": 18,
        "grade": "A"
    }
    ```

    This will add a new student to the `students.db` SQLite database.

3. **View the student list**:

    Once the student is added, you can go to the **home page** (`http://localhost:3000`) to see the updated list of students.

## Contributing

Contributions are welcome! If you would like to improve this project, follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit the changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Create a pull request.
