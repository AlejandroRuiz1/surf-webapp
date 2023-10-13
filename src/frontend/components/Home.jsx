import axios from "axios";
import { useState } from "react";

function Home() {

  const [data, setData] = useState("");

  function getData() {
    axios.get("http://localhost:8000/api/scrape", { crossdomain: true }).then((res) => {
      console.log("andy", res.data)
      var final = dataFormatter(res.data)
      setData(final);
    }).catch(error => {
      console.log(error);
    })
  }

  function dataFormatter(data) {
    console.log("hi")
    var toReturn = ""
    for (let i = 1; i < 10; i++) {
      toReturn = toReturn.concat(JSON.stringify(data[i]));
      console.log(data[i]);
    }
    console.log('andy is aweswome', toReturn)
    return toReturn
  }

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={getData}>
        Last 5 hours
      </button>
      <button className="clear" onClick={() => setData("")}>
        Clear Data
      </button>
      <p className="scrape">{data}</p>
    </div>
  )
}

export default Home