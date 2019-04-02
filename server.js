const express = require('express');

const app = express();

app.use(express.static('docs'));

app.get('/api/styles', (req, res) => {
  res.send(process.env.STYLES || 'serious swimwear');
});

app.listen(process.env.PORT || 3909);