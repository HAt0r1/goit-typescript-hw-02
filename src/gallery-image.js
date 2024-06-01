import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";
const API_KEY = "OzfFjjr5vwIJ6deZFl4Ce03MfUs6JxE5pSRVoXQLK_w";

export const getData = async (keyWord, page) => {
  const responce = await axios.get("/search/photos", {
    params: {
      client_id: API_KEY,
      query: keyWord,
      page: page,
      per_page: 12,
    },
  });
  return responce.data.results;
};
