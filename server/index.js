const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();

app.use(cors());
app.use(express.json())

app.get('/pokedex', async (req, res) => {
    try {
      const response = await axios.get('https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/pokedex.json');
      res.send(response.data);
    } catch (error) {
      res.status(500).send(error.message);
    }
  });
  
  app.listen(3000, () => {
    console.log('Server listening on port 3000');
  });