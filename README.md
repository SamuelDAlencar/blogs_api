# Blogs API 📰

 API and database to produce content for a blog
 
# Skills put into practice ✍:

  * Create a `node.js` application using the `sequelize` package
  * Make a `CRUD` of posts
 
# How to run and test the application 👨‍💻:

 * Clone this rep: (SSH) `git clone git@github.com:SamuelDAlencar/blogs_api.git` in the terminal
 * To run it without *Docker*, inside its folder, install all dependencies with `npm install`. With docker, just run `docker-compose up -d` in the terminal inside the root of the rep folder
 * If using docker, run these two in order:
   1. `docker attach blogs_api`
   2. Inside the container bash: `npm start`
  > If an error occurs saying that the port is on use, check if there's other application running on port `3000`
 * Without docker, just run `npm start`

Now the application and the database should be already running, to access the endpoints you can try in your browser, or applications like `insomnia` or `postman`
> The URL should be `http://localhost:3000`, for both ways (docker and no docker)

# Endpoints:

### POST `/login`

- The login info must already exist in the database;
- The requisition body should follow this format:
  ```json
  {
    "email": "lewishamilton@gmail.com",
    "password": "123456"
  }
  ```

### POST `/user`

- The endpoint is accessible through the URL `/user`;
- This endpoint adds a new `user` in the database
- The requisition body should follow this format:
  ```json
  {
    "displayName": "Brett Wiltshire",
    "email": "brett@email.com",
    "password": "123456",
    "image": "http://4.bp.blogspot.com/_YA50adQ-7vQ/S1gfR_6ufpI/AAAAAAAAAAk/1ErJGgRWZDg/S45/brett.png"
  }
  ```

### GET `/user`

- The endpoint is accessible through the URL `/user`;
- This endpoint brings all the users in the database;

### GET `/user/:id`

- The endpoint is accessible through the URL `/user/:id`;
- This endpoint brings the `user` that corresponds with the `id` passed in the URL param (if it already exists in the database);

### POST `/categories`

- The endpoint is accessible through the URL `/categories`;
- This endpoint adds a new `category` in the database;
- The requisition body should follow this format:
  ```json
  {
    "name": "Typescript"
  }
  ```

### GET `/categories`

- The endpoint is accessible through the URL `/categories`;
- This endpoint brings all `categories` in the database;

### POST `/post`

- The endpoint is accessible through the URL `/post`;
- This endpoint adds a new `post` and links it with its `categories` in the database; 
- The requisition body should follow this format:
  ```json
  {
    "title": "Latest updates, August 1st",
    "content": "The whole text for the blog post goes here in this key",
    "categoryIds": [1, 2]
  }
  ```
  
 ### GET `/post`

- The endpoint is accessible through the URL `/post`;
- This endpoint brings all `posts`, its `user` owner and its `categories` from the database;
 
 ### GET `/post/:id`

- This endpoint is accessible through the URL `/post/:id`;
- This endpoint brings the `post` that corresponds with the `id` passed in the URL param (if it already exists in the database);
 
 ### PUT `/post/:id`

- This endpoint is accessible through the URL `/post/:id`;
- This endpoint updates a post that already exists in the database;
- You can only edit the post if you are the owner of it;
- You can't change the post's `category`, only the `title` and `content`;
- The requisition body should follow this format:
  ```json
  {
    "title": "Latest updates, August 1st",
    "content": "The whole text for the blog post goes here in this key"
  }
  ```
 
 ### DELETE `/post/:id`

- This endpoint is accessible through the URL `/post/:id`;
- This endpoint deletes an existing post based on the `id` passed in the URL param;
- You can only delete the post if you are the owner of it;

    ```
 ### DELETE `/user/me`

- This endpoint is accessible through the URL `/user/me`;
- O endpoint deve ser capaz de deletar você do banco de dados, baseado no `id` que esta dentro do seu `token`;
- This endpoint deletes yourself in the database, by decrypting your token and finding your login data;
 
 ### GET `/post/search?q=:searchTerm`

- This endpoint is accessible through the URL `/post/search`;
- This endpoint brings results with `title` or `content` that match the search term passed in the URL query;
- The requisition body should follow this format:
  ```js
    http://localhost:PORT/post/search?q=vamos
  ```
