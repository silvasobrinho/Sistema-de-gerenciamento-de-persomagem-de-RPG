import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333/',
});

api.interceptors.request.use(async (config) => {
    try {
      const token = await AsyncStorage.getItem('@tresgRpg:token');
  
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
  
      return config;
    } catch (err) {
      alert(err);
    }
  });

export default api;