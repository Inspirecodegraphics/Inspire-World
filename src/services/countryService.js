import http from "./httpService";

const apiEndPoint = "https://restcountries.eu/rest/v2";

export const getAllCountries = () => {
  return http.get(`${apiEndPoint}/all`);
};
export const getCountryByCode = (id) => {
  return http.get(`${apiEndPoint}/alpha/${id}`);
};

export default {
  getAllCountries,
  getCountryByCode,
};
