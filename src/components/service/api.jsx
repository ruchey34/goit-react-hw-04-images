import axios from 'axios';

const API_KEY = '33562871-22ba653f4e30c176890be9b43';
let Api = `https://pixabay.com/api/`;

export const fetchImg = async (query, page = 1) => {
  const response = await axios.get(
    `${Api}?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return response.data;
};