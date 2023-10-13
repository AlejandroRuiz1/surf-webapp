// import readline from "readline";

import { json } from "express";

function scrapeController(response) {
  let textData = response.data;
  var lines = (textData.split("\n"));
  var headers = lines[0]
  headers = headers.split(/\s+/);
  headers[0] = "YY"
  var jsonObj = []
  console.log(headers)
  for (var i = 1; i < lines.length; i++) {
    var data = lines[i].split(/\s+/);
    var obj = {};
    for (var j = 0; j < data.length; j++) {
      obj[headers[j].trim()] = data[j].trim();
    }
    jsonObj.push(obj);
  }
  console.log(jsonObj[10].YY)
  JSON.stringify(jsonObj);
  return jsonObj;


}

export default scrapeController;
