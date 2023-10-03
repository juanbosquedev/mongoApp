const axios = require("axios");

module.exports = {
  list: async () => {
    const results = await axios.get("http://database:8005/Planet");
    return results.data;
  },
  get: async(id)=>{
    const results = await axios.get( `http://database:8005/Planet/${id}`);
    return results.data;
  },

  delete: async(id)=>{
    const results = await axios.delete( `http://database:8005/Planet/${id}`);
    return results.data;
  },
  create: async (obj) => {
    const results = await axios.post("http://database:8005/Planet", obj);
    return results.data;
  },
  update: async (id, obj) => {
   
    const results = await axios.put(`http://database:8005/Planet/${id}`, obj);
    return results.data;
  }
};
