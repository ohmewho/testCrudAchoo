// to run the app
// get your command line program to the repo's directory
// then put
// 'npm run app'
// or
// 'node app.js'
// into the command line
const os = require("os");
var fs = require("fs");
//fs.appendFile();
//fs.open();
//fs.writeFile();
//fs.appendFile();

var count = 1;

// try to read if there is memory
async function readFile() {
  count = await fs.readFile("./memory.json", function (err, data) {
    // throw error if no data
    if (err) {
      fs.writeFile("./memory.json", 0, function (err) {
        return 0;
      });
      throw err;
    } //
    data = parseInt(data);
    // if data is bigger or = to count
    // then I have opened this program before
    if (count <= data) {
      // increase count of "times opened"
      count += data;
    }
    console.log(count);
    return count;
  });
  return count;
}

// Write count to a file
readFile().then((res) => {
  fs.writeFile("./memory.json", res, function (err) {
    if (err) throw err;
    console.log(`Saved!${res} ${count}`);
  });
});

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
//console.log(os.networkInterfaces());
//os.networkInterfaces()
