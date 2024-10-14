# Creating an API

## Steps to Follow

### 1. npm i -g express-generator
### 2. mkdir api (if haven't already), cd api, npx express-generator --no-view --git
### 3. mv app.js server.js
### 4. change 'app' to 'server' in www file of bin directory
### 5. rm routes/index.js routes/users.js
### 6. rmdir public
### 7. Create directories for routes (mkdir routes/api/v1)
### 8. Create index.js file in that directory (touch routes/api/v1/index.js)
### 9. Change route variables in server.js file
### 10. Set up the index.js file to use express and router
### 11. Ensure all npm packages are installed (npm i)
### 12. npm start, go to localhost:3000/api/v1 to see 'Root API route'
### 13. Set up MongoDb Cluster
### 14. npm i mongoose dotenv app-module-path cors
### 15. Set up Model(s) in a models directory for mongoose
### 16. Set up middleware for all packages install in step 14 in server.js
### 17. Create .env and .env.example for mongo connection string
### 18. Add new route(s) for MongoDB Model, test in api to see the route works
### 19. Set up git repository, push to GitHub
