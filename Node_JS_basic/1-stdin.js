const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });

rl.question('Welcome to Holberton School, what is your name?\n',  (answer) => {
  console.log(`Your name is: ${answer}`)
  rl.close();
});
if (process.stdin.isTTY === true) {
	rl.on('close', (stdout) => {(console.log("This important software is now closing"))});
}
