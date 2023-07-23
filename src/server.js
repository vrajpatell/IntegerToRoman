const app = require('./app');

const now = new Date();
const timestamp = now.toISOString();

const port = 8080;

app.listen(port, () => {
  console.log(`API listening on port ${port} || Timestamp ${timestamp}`);
});