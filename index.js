const app = require('./src/app.js');
const pool = require('./src/pool');

pool
  .connect({
    host: 'ps-users-aurora-instance-1.czzlhurgfltv.us-east-1.rds.amazonaws.com',
    port: 5432,
    database: 'postgres',
    user: 'jmechristian',
    password: 'Love093010!',
  })
  .then(() => {
    app().listen(3005, () => {
      console.log('Listening on port 3005');
    });
  })
  .catch((err) => console.error(err));

app();
