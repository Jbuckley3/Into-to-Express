// Load express
const express = require('express');
const path = require('path');

// require the To Do 'database', now students
const studentDb = require('./data/student-db'); 

// Create our express app
const app = express();

// Configure the app (app.set)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))
// Mount middleware (app.use)

// Mount routes

// Define a "root" route directly on app
app.get('/', function (req, res) {
    // This path MUST start with a leading slash
    res.redirect('/todos');
});

app.get('/home', function (req, res) {
    res.render('home');
});

/* old code 
app.get('/todos', function(req, res) {
    const todos = todoDB.getAll();
    res.render('todos/index', { todos }); 
})
*/

// Add a new route for students
app.get('/students', function(req, res) {
    res.render('students/index', {
      students: studentDb.getAll(),
    });
  });

// Tell the app to listen on port 3000
// for HTTP requests from clients
app.listen(3000, function() {
    console.log('listening on port 3000');
})