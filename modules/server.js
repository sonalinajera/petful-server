const app = require('../modules/app/app')
const knex = require('knex');
const { PORT, DATABASE_URL } = require('./config');

const db = knex({
  client: 'pg',
  connection: DATABASE_URL
});

app.set('db', db);

const port = process.env.PORT || 8000

app.listen(port, () => {
  console.log(`[petful-server] Listening on ${ port }.`)
})
