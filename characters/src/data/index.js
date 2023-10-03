

const axios = require("axios");

module.exports = {
  list: async () => {
    const results = await axios.get("http://database:8005/Character");
    return results.data;
  },
  get: async(id)=>{
    const results = await axios.get( `http://database:8005/Character/${id}`);
    return results.data;
  },

  delete: async(id)=>{
    const results = await axios.delete( `http://database:8005/Character/${id}`);
    return results.data;
  },
  createCharacter: async (obj) => {
    const results = await axios.post("http://database:8005/Character", obj);
    return results.data;
  },
  updateCharacter: async (id, obj) => {
   
    const results = await axios.put(`http://database:8005/Character/${id}`, obj);
    return results.data;
  }
};
