import axios from 'axios';

const API_KEY = '24229447-882d2f373c0694f721fc94563';
const BASE_URL_REQUEST = `&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=15`;

axios.defaults.baseURL = 'https://pixabay.com/api/';

export const fetchImage = async (query, page) => {
  const response = await axios.get(
    `?q=${query}&page=${page}${BASE_URL_REQUEST}`
  );
  return response.data;
};
