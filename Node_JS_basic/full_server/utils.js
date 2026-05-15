const fs = require('fs');

module.exports = function readDatabase(filename) {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, 'utf8', (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n');
      lines.shift();
      const students = lines.filter((line) => line.length !== 0);

      const groups = students.reduce((acc, line) => {
        const element = line.split(',');
        const firstname = element[0];
        const field = element[3];
        if (!acc[field]) acc[field] = [];
        acc[field].push(firstname);
        return acc;
      }, {});

      resolve(groups);
    });
  });
};
