import axios from "axios";
import { useState } from "react";

function Home() {

  const [data, setData] = useState("");

  function getData() {
    axios.get("http://localhost:8000/api/scrape", { crossdomain: true }).then((res) => {
      setData(res.data);
    }).catch(error => {
      console.log(error);
    })
  }


  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={getData}>
        Click Me!
      </button>
      <button className="clear" onClick={() => setData("")}>
        Clear Data
      </button>
      <p className="scrape">{data}</p>
    </div>
  )
}

export default Home