const url = 'http://localhost:5000/api/news/check';

import axios from 'axios';

export async function verifyNews(text) {
  const response = await axios.post(`${url}`, { text: text });

  if (!response) {
    throw new Error({
      message: 'could not read from the API',
    });
  }

  return response.data;
}
