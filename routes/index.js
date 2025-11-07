
var express = require('express');
var router = express.Router();
// loads expres router
// 
// Home (when someone goes to /contact, it goes to the views/index.ejs page)
router.get('/', (req, res) => {
  res.render('index', { title: 'Home' });
});

// About (when someone goes to /about, it goes to the views/about.ejs page)
router.get('/about', (req, res) => {
  res.render('about', { title: 'About Me' });
});

// Projects (when someone goes to /projects, it goes to the views/projects.ejs page)
router.get('/projects', (req, res) => {
  res.render('projects', { title: 'Projects' });
});

// Contact (when someone goes to /contact, it goes to the views/contact.ejs page)
router.get('/contact', (req, res) => {
  res.render('contact', { title: 'Contact Me' });
});

// makes router available to app.js
module.exports = router;

