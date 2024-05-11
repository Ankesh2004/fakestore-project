# Fakestore Project

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Project Setup

This project is a React application with TypeScript. It uses the context API for state management and Tailwind CSS for styling.

### Directory Structure

The main codebase resides in the src/ directory. Here's a brief overview of the directory structure:

- `App.tsx`: The main application component.
- `components/`: Contains reusable components like CartItem, Navbar, ProductCard, and Spinner.
- `contexts/`: Contains the context providers for the application. The CartContext.tsx and ProductContext.tsx files define the application's state and the functions to manipulate it.
- `pages/`: Contains the different pages of the application like Cart, Home, and ProductDetails.

### Dependencies used :

- `react`: The main library for building the user interface.
- `react-dom`: Enables the React components to interact with the DOM.
- `react-scripts`: Includes scripts and configuration used by Create React App.
- `typescript`: Adds static types to JavaScript, enhancing code quality and understandability.
- `react-icons`: Icon library
- `tailwindcss`: Devloper dependencies to speed up development process.


## Running the Application Locally

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install the dependencies by running the following command in your terminal:
   ```
   npm install
   ```
4. Start the development server:
   ```
   npm run start
   ```
5. The application will start running on `http://localhost:3000`. Open this URL in your browser to view the application.

## Testing
To run the tests, use the following command:
```
npm run test
```
## Building for Production
To create a production build, use the following command:
```
npm run build
```
The built static files will be in the build directory.

## Note
The application uses local storage to persist the cart state. The key used for this is `cart`, as defined in the `CartContext provider`.
