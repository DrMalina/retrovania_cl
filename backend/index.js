const app = require('./src/app');
require('./src/database/database');

app.listen(process.env.PORT, () => {
  console.log(`up&running on ${process.env.PORT}.`);
});