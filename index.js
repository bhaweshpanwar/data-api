const express = require('express');
const cors = require('cors');
const fs = require('fs')
const csv = require('csv-parser')
const app = express();
const PORT = 3000;


app.use(cors());


app.get('/api/data', (req, res) => {
  const results = [];
  fs.createReadStream('data.csv')
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', () => {
      res.json(results);  // send as JSON
    });
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
