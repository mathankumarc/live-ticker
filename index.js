const express = require('express');

const app = express();
const http = require('https');
const path = require('path');

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: true }));

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

// Serve the static asset files.
app.use(express.static(`${__dirname}/dist/`));

app.get('*', (req, res, next) => {
  res.sendFile(path.join(`${__dirname}/dist/index.html`));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`App started on Port:${PORT}`);
});
