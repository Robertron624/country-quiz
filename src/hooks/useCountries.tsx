import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../constants";
import { Country} from "../types/countryTypes";

// Hook for getting all countries from api

export const useCountries = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    axios
      .get<Country[]>(`${API_URL}`)
      .then((response) => {
        setCountries(response.data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  return {countries, loading};
};