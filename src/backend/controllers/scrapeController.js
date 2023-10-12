import readline from "readline";
import fs from "fs";

function scrapeController(response) {
  const fileStream = fs.createReadStream(response.data);

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  const data = {};

  // Goes through every line of the file
  rl.on("line", (line) => {
    let columns = JSON.parse(line);
    data.add(columns.path);
    // Object.keys(columns)[1]
    console.log(data);
  });

  rl.on("close", () => {
    console.log("File reading complete.");
  });

  return fileStream;
}

export default scrapeController;
