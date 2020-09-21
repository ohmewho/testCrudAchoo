// to run the app
// get your command line program to the repo's directory
// then put
// 'npm run app'
// or
// 'node app.js'
// into the command line
const os = require("os");

console.log("Hello world");
var operatingSystem = os.arch();
console.log(
  `Hmm it looks like the operating system I'm in is: ${operatingSystem}`
);

var userCpus = os.cpus();

if (typeof userCpus.model !== "undefined") {
  console.log(`the processor I can think with is: ${userCpus.model}`);
}
if (typeof userCpus.speed !== "undefined") {
  console.log(`the processor is: ${userCpus.speed}`);
}
console.log(`it looks like I can use these devices to talk on...`);
console.log(os.networkInterfaces());
//os.networkInterfaces()
