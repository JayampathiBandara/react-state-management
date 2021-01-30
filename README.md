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
