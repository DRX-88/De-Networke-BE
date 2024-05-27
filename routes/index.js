const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

router.use((req, res) => {
  return res.send('Wrong route!');
});

module.exports = router;