var argv = require('yargs')
  .option('d', {
    alias: 'data',
    default: [],
    type: 'array'
  })
  .argv;

console.log(process.argv);

console.log(argv);

console.log('hello world');
