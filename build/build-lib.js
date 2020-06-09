const shell = require('shelljs');
const signale = require('signale');

const { Signale } = signale;
const tasks = [
  'bootstrap',
  'clean',
  'build:entry',
  'lint',
  'lib',
  'build:style'
];

tasks.forEach(task => {
  signale.start(task);
  const interactive = new Signale({ interactive: true });
  interactive.pending(task);
  shell.exec(`npm run ${task} --silent`);
  interactive.success(task);
});
