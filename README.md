# React Shopping Cart using Context API & useReducer

## Project Overview
This is a simple Shopping Cart application developed using React.  
The project demonstrates how to manage global state using **Context API** and **useReducer** instead of Redux.
Users can:
- Add products to the cart
- Remove products from the cart
- View cart items dynamically

## Technologies Used
- React
- Context API
- useReducer Hook
- JavaScript (ES6)
- CSS

## Features
- Global state management using Context API
- Add to Cart functionality
- Remove from Cart functionality
- Clean and responsive UI
- Reusable React components

## How It Works
- `CartContext` provides global cart state
- `useReducer` manages ADD and REMOVE actions
- `ProductItem` dispatches ADD action
- `Cart` displays items and dispatches REMOVE action

## Learning Outcome
- Understanding Context API
- Implementing useReducer
- Managing global state without Redux
- Component-based React architecture

## Conclusion
This Shopping Cart project successfully demonstrates the use of **React Context API** and **useReducer** for managing global state in a React application.  
By avoiding external state management libraries, the project shows how React’s built-in tools can efficiently handle complex state logic.  

The application is modular, easy to understand, and scalable.  
This project helped in improving understanding of **state flow, actions, reducers, and component communication** in React, making it a strong foundation for real-world React applications.
