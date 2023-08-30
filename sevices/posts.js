import axios from 'axios';

export async function getPosts() {
  const data = axios
    .get('/api/post')
    .catch((error) => {
      throw error;
    });

  return data;
}
