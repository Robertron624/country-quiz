import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../constants";
import { Country as CountryType} from "../types/countryTypes";

// Hook for getting all countries from api

export const useCountries = () => {
  const [countries, setCountries] = useState<CountryType[]>([]);

  useEffect(() => {
    axios
      .get<CountryType[]>(`${API_URL}`)
      .then((response) => setCountries(response.data))
      .catch((error) => console.log(error));
  }, []);

  return countries;
};