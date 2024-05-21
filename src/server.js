import express from 'express';
import { createClient } from 'redis';
import { getAllClients } from './mocks/request';

const app = express();
const client = createClient();

app.get('/', async (req, res) => {
  const clientsFromChace = await client.get('getAllClients');
  if(clientsFromChace){
    return res.send(JSON.parse(clientsFromChace));
  }
  
  const clients = await getAllClients();
  await client.set('getAllClients', JSON.stringify(clients), {EX: 60})
  res.send(clients)
});

const startup = async () => {
  await client.connect().catch(console.error);
  app.listen(3000, () => {
    console.log("server running...")
  });
};

startup();