const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const readfile = process.argv[2];
  let output = 'This is the list of our students\n';
  const originalLog = console.log;
  console.log = (msg) => { output += `${msg}\n`; };

  countStudents(readfile)
    .then(() => {
      console.log = originalLog;
      res.end(output.trimEnd());
    })
    .catch((err) => {
      console.log = originalLog;
      res.end(err.message);
    });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

module.exports = app;
