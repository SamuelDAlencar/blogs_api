# Blogs API 📰

 API and database to produce content for a blog
 
# How to run and test the application 👨‍💻:

 1. Clone this rep: (SSH) `git clone git@github.com:SamuelDAlencar/blogs_api.git` in the terminal
 2. To run it without *Docker*, inside its folder, install all dependencies with `npm install`. With docker, just run `docker-compose up -d` in the terminal inside the root of the rep folder
 3.1. If using docker, run these in order:
  * `docker attach blogs_api`
  * Inside the container bash: `npm start`
 3.2. Without docker, just run `npm start`

# Skills put into practice ✍:

  * Create a `node.js` application using the `sequelize` package
  * Make a `CRUD` of posts
