import express from "express";
import { fetchCountries, fetchHolidays } from "./services";

const router = express.Router();

// GET /holidays?country=PAK&year=2024
router.get("/holidays", async (req, res) => {
  const { country, year } = req.query;

  if (!country || !year) {
    return res.status(400).json({ error: "Country and year are required" });
  }
  try {
    const response = await fetchHolidays(
      country as string,
      parseInt(year as string, 10)
    );
    if (response.meta.code === 200) {
      const holidays = response.response.holidays;
      res.json({ holidays });
    } else {
      return res
        .status(response.meta.code)
        .json({ error: response.meta.message });
    }
  } catch (error) {
    return res.status(500).json({ error: "Failed to fetch holidays" });
  }
});
router.get("/countries", async (req, res) => {
  try {
    const response = await fetchCountries();
    if (response.meta.code === 200) {
      const countries = response.response.countries;
      res.json({ countries });
    } else {
      return res
        .status(response.meta.code)
        .json({ error: response.meta.message });
    }
  } catch (error) {
    return res.status(500).json({ error: "Failed to fetch countries" });
  }
});
export default router;
