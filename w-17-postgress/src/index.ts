import {Client}  from 'pg'
import express from 'express';

const app = express();
const port = 3000;

const client = new Client("postgresql://neondb_owner:npg_UoBQ01tiOVWE@ep-icy-heart-a8ty11st-pooler.eastus2.azure.neon.tech/neondb?sslmode=require")
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

async function main() {
  await client.connect();
  const response = await client.query(`SELECT * FROM users`)
  console.log(response);
  app.listen(port,() => {
    console.log(`Server is running on port ${port}`);
  })
}
main();
