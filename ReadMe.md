#### SETUP

## Client setup
1. Setup create and tailwind css
```
    1. npm create vite@latest client
    2. follow steps using react as in link: https://tailwindcss.com/docs/guides/vite
```

2. create pages and routes
```
    1. In terminal : npm i react-router-dom
    2. create pages in src folder
    3. create routes in App.js
```

3. create Header components/section
```
    1. create Header Component
    2. npm i react-icons
```

4. react redux setup
```
Link: https://redux-toolkit.js.org/tutorials/quick-start
    to store the user profile and show it, after login
```
5. add redux persist
```
    To store the information in local storage
    Every time refresh the user will logout automatically to handle the error
    In Terminal client side: npm i redux-persist 

```

6. Adding Google OAuth functionality
```
    1. https://firebase.google.com/
    2. npm install firebase

```

### server setup 
1. create and run server
```
    1. create the server folder
    2. npm i express
    3. npm nodemon
    4. create the code in index.js file
    5. update the package.json type:module
    6. in scripts, dev:nodemon index.js
    6. npm run dev
```

2. Database connection
```
    1. npm i mongoose
```