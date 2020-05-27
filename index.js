require("dotenv").config()
const server = require('./server');

const port = process.env.PORT || 4900;
console.log(port)
server.listen(port, () => {
  console.log(`\n=== Server listening on port ${port} ===\n`);
});
