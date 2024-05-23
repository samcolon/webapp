const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse URL-encoded data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve a form to the user
app.get('/', (req, res) => {
  res.send(`
    <form action="/greet" method="POST">
      <label for="location">What part of the world are you from?</label>
      <input type="text" id="location" name="location">
      <button type="submit">Submit</button>
    </form>
  `);
});

// Handle form submission
app.post('/greet', (req, res) => {
  const location = req.body.location;
  res.send(`Hello! That is so cool that you are from ${location}!`);
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
