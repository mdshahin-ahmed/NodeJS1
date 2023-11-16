const fs = require("fs");
// reading text asynchronously
// error callback pattern error first then callback
fs.readFile("./texts/read.txt", "utf-8", (err, data) => {
  if (err) {
    throw Error("Error message");
  }
  //   console.log(data);
  // writing text asynchronously
  fs.writeFile("./texts/read2.txt", data, "utf-8", (err) => {
    if (err) {
      throw Error("Error writing data");
    }
  });
});

console.log("testing async");
