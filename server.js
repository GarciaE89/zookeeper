 const express = require('express');
 const {animals} = require('./data/animals');

 const app = express();

 app.listen(3001, () => {
     console.log(`API server is on port 3001!, ya hurd`);
 });



app.get('/api/animals', (req, res) => {
    res.json(animals);
});
