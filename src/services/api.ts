// src/services/api.ts
import axios from 'axios';

const API_URL = 'https://dummy-rest-api.specbee.site/api/v1/news';

export const fetchArticles = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching articles:', error);
    throw error;
}
};