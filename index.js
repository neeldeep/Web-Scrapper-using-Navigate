console.log('hello world');
var Nightmare = require('nightmare');

var google = new Nightmare()
  .goto('http://www.espncricinfo.com/new-zealand-v-sri-lanka-2015-16/engine/match/914219.html')
  .wait()
  .screenshot('score-update.png')
  .run(function(){
  console.log('Done!')
  });