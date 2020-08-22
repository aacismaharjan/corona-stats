import axios from "axios";
const URL = "https://covid19.mathdro.id/api";

export const fetchData = async (country) => {
  let dURL = URL;
  if (country) dURL += `/countries/${country}`;

  try {
    const { data } = await axios.get(dURL);
    const { confirmed, recovered, deaths, lastUpdate } = data;

    const formattedData = {
      confirmed: confirmed.value,
      recovered: recovered.value,
      deaths: deaths.value,
      lastUpdate,
    };
    return formattedData;
  } catch (err) {
    console.log(err);
  }
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${URL}/daily`);

    let modifiedData = data.map((dailyData, index) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      reportDate: dailyData.reportDate,
    }));

    return modifiedData;
  } catch (err) {
    console.log(err);
  }
};

export const fetchCountries = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(`${URL}/countries`);

    return countries.map((country) => country.name);
  } catch (err) {
    console.log(err);
  }
};
