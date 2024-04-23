# JWT Basic

JWT Basic is a simple project that demonstrates user authentication using JSON Web Tokens (JWT). It includes a login functionality where users can authenticate using a username and password, and a protected dashboard route accessible only to authenticated users without the need for a database.

## Features

- **User Authentication**: Users can log in using a username and password.
- **JSON Web Tokens (JWT)**: JWTs are used for authentication and authorization.
- **Protected Dashboard Route**: Access to the dashboard route is restricted to authenticated users.
- **No Database Dependency**: The project does not require a database, making it easy to set up and use for demonstration purposes.

## Technologies Used

- **Backend**: Node.js, Express.js
- **Authentication**: JSON Web Tokens (JWT)
- **Additional libraries**: jsonwebtoken for JWT generation and verification, etc.

## Installation

1. Clone the repository: `git clone https://github.com/Shahzaib-ur-Rehman/jwt-basic.git`
2. Navigate to the project directory: `cd jwt-basic`
3. Install dependencies: `npm install`
4. Start the server: `npm start`

## Usage

1. Start the server according to the installation instructions.
2. Use any API testing tool (such as Postman) to send requests to the following endpoints:
   - `/api/login`: POST request to authenticate with username and password.
   - `/api/dashboard`: GET request to access the protected dashboard route.
3. Upon successful login, you will receive a JWT token. Include this token in the Authorization header as a Bearer token for accessing the dashboard route.
4. If the token is missing or invalid, access to the dashboard route will be denied.

## Example Requests

### Login
