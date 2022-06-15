# Blogs API 📰

 API and database to produce content for a blog
 
# How to run and test the application 👨‍💻:

 * Clone this rep: (SSH) `git clone git@github.com:SamuelDAlencar/blogs_api.git` in the terminal
 * To run it without *Docker*, inside its folder, install all dependencies with `npm install`. With docker, just run `docker-compose up -d` in the terminal inside the root of the rep folder
 * If using docker, run these two in order:
   1. `docker attach blogs_api`
   2. Inside the container bash: `npm start`
  > If an error occurs saying that the port is on use, check if there's other application running on port `3000`
 * Without docker, just run `npm start`

# Skills put into practice ✍:

  * Create a `node.js` application using the `sequelize` package
  * Make a `CRUD` of posts
# Endpoints

## POST `/login`
- O endpoint deve ser acessível através do URL `/login`;
- O corpo da requisição deverá seguir o formato abaixo:
  ```json
  {
    "email": "lewishamilton@gmail.com",
    "password": "123456"
  }
  ```
