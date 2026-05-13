const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
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
  }
});
app.listen(1245, 'localhost', () => {
  console.log(`Server running at http://localhost:${1245}/`);
});

module.exports = app;
