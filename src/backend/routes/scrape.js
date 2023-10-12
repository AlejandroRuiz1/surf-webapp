// import puppeteer from "puppeteer";
import express from "express";
import axios from "axios";
import scrapeController from "../controllers/scrapeController.js";

const router = express.Router();

const websiteURL = "https://www.ndbc.noaa.gov/data/realtime2/41115.spec";

router.get("/scrape", async (req, res) => {
  try {
    const response = await axios.get(websiteURL);
    if (response.status === 200) {
      let data = scrapeController(response);
      res.send(data);
    } else {
      console.error(
        "Failed to get wave data file. Status Code:",
        response.status
      );
      res
        .status(response.status)
        .json({ message: "Failed to get wave data file." });
    }
  } catch (error) {
    console.error("Error scraping data:", error);
    res.status(500).json({ message: "Scraping failed!" });
  }
});

export default router;
