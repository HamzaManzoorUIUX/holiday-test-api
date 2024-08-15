import axios from "axios";
import { config } from "./config";

export const fetchHolidays = async (country: string, year: number) => {
  const response = await axios.get(`${config.calendarificBaseUrl}/holidays`, {
    params: {
      api_key: config.calendarificApiKey,
      country,
      year,
    },
  });
  return response.data;
};
export const fetchCountries = async () => {
  const response = await axios.get(`${config.calendarificBaseUrl}/countries`, {
    params: {
      api_key: config.calendarificApiKey,
    },
  });
  return response.data;
};
