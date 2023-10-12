// import readline from "readline";

function scrapeController(response) {
  let textData = response.data;
  const lines = textData.split("\n");
  return lines[2];
}

export default scrapeController;
