import express from "express";
import scrape from "./routes/scrape.js";

const port = 8000;
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ msg: "Hello from backend!" });
});

app.use("/api", scrape);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
