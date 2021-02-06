# React state management

- Managing React State by Cory House

# npm commands

npx create-react-app react-state-management

## 1.2 setup json server

- npm i json-server
- "start-api": "json-server --port 3001 --watch db.json --delay 0",
- http://localhost:3001/products

## 1.3 Add cross-env to pass environment variable

- npm i cross-env --save
- npm i npm-run-all --save
- "start": "run-p start-app start-api",
- "start-app": "cross-env REACT_APP_API_BASE_URL='http://localhost:3001/' react-scripts start",
- "start-api": "json-server --port 3001 --watch db.json --delay 0",

## 3.1 convert to controlled component [achieve 2way binding effect-react it is not 2way binding]

- useState hook use

## 3.2 display filtered product list

## 3.3 hook- use effect lifecycle hook. loaddata in page initialization

## 3.4 Handling error via Error Boundry- Must be Class Component

## 3.5 Handling Loading state

## 3.6 Implementing Async/await in useEffect

## 3.7 Consuming a Custom Hook

# 4 Implementing Routing – react router v 6

## 4 install react Router v-6 and add it to index page

- npm i react-router-dom@6.0.0-beta.0 --save

install dependency

- npm i history@5 --save

## 4.2 create seperate page for productsand remove product detail from app.js

### 4.3 Create several pages and add multiple routes

### 4.4 Read Url parameters and redirect to page not found if incorrect param

### 4.5 Implement client side navigation

### 4.6 Navigate to Shoe details page

### 4.7 redirect to cart page

### 5.6 add shoes to cart

### 5.7 update quantity of the cart

### 5.8 store data locally using localStaorage
