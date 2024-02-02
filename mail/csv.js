const j2csv = require("json2csv");

const countries = [
  {
    name: "Cameroon",
    capital: "Yaounde",
    countryCode: "CM",
    phoneIndicator: 237,
  },
  { name: "France", capital: "Paris", countryCode: "FR", phoneIndicator: 33 },
  {
    name: "United States",
    capital: "Washington, D.C.",
    countryCode: "US",
    phoneIndicator: 1,
  },
  {
    name: "India",
    capital: "New Delhi",
    countryCode: "IN",
    phoneIndicator: 91,
  },
  {
    name: "Brazil",
    capital: "Brasília",
    countryCode: "BR",
    phoneIndicator: 55,
  },
  { name: "Japan", capital: "Tokyo", countryCode: "JP", phoneIndicator: 81 },
  {
    name: "Australia",
    capital: "Canberra",
    countryCode: "AUS",
    phoneIndicator: 61,
  },
  { name: "Nigeria", capital: "Abuja", countryCode: "NG", phoneIndicator: 234 },
  { name: "Germany", capital: "Berlin", countryCode: "DE", phoneIndicator: 49 },
];

const fields = ["name", "capital", "countryCode", "phoneIndicator"];
const json2csv = new j2csv.Parser({ fields });
const csv = json2csv.parse(countries);

module.exports = {
  csv,
};
