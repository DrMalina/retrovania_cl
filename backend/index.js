require('app-module-path').addPath(`${__dirname}/src`);

const app = require('app');
require('database/database');

app.listen(process.env.PORT, () => {
  console.log(`up&running on ${process.env.PORT}.`);
});
