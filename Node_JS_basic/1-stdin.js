const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

process.stdout.write('Welcome to Holberton School, what is your name?\n');

rl.on('line', (answer) => {
  console.log(`Your name is: ${answer}`);
  rl.close();
});

rl.on('close', () => {
  if (!process.stdin.isTTY) {
    console.log('This important software is now closing');
  }
});
