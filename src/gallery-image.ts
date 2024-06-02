import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";
const API_KEY = "OzfFjjr5vwIJ6deZFl4Ce03MfUs6JxE5pSRVoXQLK_w";

export interface responceResult {
  id: string;
  alt_description: string;
  urls: { small: string; regular: string };
}

export const getData = async (
  keyWord: string,
  page: number
): Promise<Array<responceResult>> | never => {
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
