// full_server/controllers/StudentsController.js
const readDatabase = require('../utils');

class StudentsController {
  static getAllStudents(req, res) {
    const file = process.argv[2];
    readDatabase(file)
      .then((students) => {
        const fields = Object.keys(students).sort(
          (a, b) => a.toLowerCase().localeCompare(b.toLowerCase()),
        );
        const lines = ['This is the list of our students'];
        for (const field of fields) {
          lines.push(`Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}`);
        }
        res.status(200).send(lines.join('\n'));
      })
      .catch(() => res.status(500).send('Cannot load the database'));
  }

  static getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    if (major !== 'CS' && major !== 'SWE') {
      return res.status(500).send('Major parameter must be CS or SWE');
    }
    const file = process.argv[2];
    return readDatabase(file)
      .then((students) => {
        const list = students[major] || [];
        res.status(200).send(`List: ${list.join(', ')}`);
      })
      .catch(() => res.status(500).send('Cannot load the database'));
  }
}

module.exports = StudentsController;
