
const API_KEY = process.env.API_KEY
const API_URL = process.env.API_URL

const fetchNASAData = async (urlParams = "") => {
  const apiUrlWithParams = `${API_URL}?api_key=${API_KEY}${urlParams}`;

  try {
    const response = await fetch(apiUrlWithParams);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export default fetchNASAData;
