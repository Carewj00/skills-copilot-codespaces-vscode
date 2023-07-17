// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Import comment data
const comments = require('./data/comments');

// Import post data
const posts = require('./data/posts');

// Import user data
const users = require('./data/users');

// Import moment.js
const moment = require('moment');

// Import lodash
const _ = require('lodash');

// Set view engine to ejs
app.set('view engine', 'ejs');

// Set static folder
app.use(express.static('public'));

// Home page
app.get('/', (req, res) => {
  res.render('index', {
    posts: posts,
    comments: comments,
    users: users,
    moment: moment,
  });
});

// Post details page
app.get('/post/:id', (req, res) => {
  const id = req.params.id;
  const post = _.find(posts, ['id', id]);

  res.render('post', {
    post: post,
    comments: comments,
    users: users,
    moment: moment,
  });
});

// User details page
app.get('/user/:id', (req, res) => {
  const id = req.params.id;
  const user = _.find(users, ['id', id]);
  const userPosts = _.filter(posts, ['userId', id]);

  res.render('user', {
    user: user,
    userPosts: userPosts,
    comments: comments,
    users: users,
    moment: moment,
  });
});

// Listen to port
app.listen(port, () => console.log(`Example app listening on port ${port}!`));