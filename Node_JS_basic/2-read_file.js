const fs = require('fs');

module.exports = function countStudents(filename) {
  try {
    const data = fs.readFileSync(filename, 'utf8');
    const lines = data.split('\n');
    lines.shift();
    const students = lines.filter((line) => line.length !== 0);

    const groups = students.reduce((acc, line) => {
      const element = line.split(',');
      const firstnames = element[0];
      const field = element[3];
      if (!acc[field]) acc[field] = [];
      acc[field].push(firstnames);
      return acc;
    }, {});
    console.log(`Number of students: ${students.length}`);
    Object.entries(groups).forEach(([field, firstnames]) => {
      console.log(`Number of students in ${field}: ${firstnames.length}. List: ${firstnames.join(', ')}`);
    });
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};
