

const axios = require("axios");

module.exports = {
  list: async () => {
    const results = await axios.get("http://database:8005/Film");
    return results.data;
  },
  get: async(id)=>{
    const results = await axios.get(`http://database:8005/Film/${id}`);
    return results.data;
  },

  delete: async(id)=>{
    const results = await axios.delete( `http://database:8005/Film/${id}`);
    return results.data;
  },
  createFilm: async (obj) => {
    const results = await axios.post(`http://database:8005/Film`, obj);
    return results.data;
  },
  updateFilm: async (id, obj) => {
   
    const results = await axios.put(`http://database:8005/Film/${id}`, obj);
    return results.data;
  }
};
