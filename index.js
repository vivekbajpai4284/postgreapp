const express = require('express')

const app = express();

const { Client } = require('pg')
const client = new Client({
    user: 'postgres',
    host: 'db',
    database: 'postgres',
    password: 'p',
    port: 5432
  })
  client.connect()
  client.query('CREATE TABLE IF NOT EXISTS data (id integer); INSERT INTO data(id) SELECT 0 where not exists(select * from data);', (err, res)=>
  {
    
  })

  


app.get('/', (req, res) =>{
        
    client.query('SELECT id FROM data;')
    .then(dres=>
    {        
        var counter = dres.rows[0].id;
        counter += 1;
        client.query('UPDATE data SET id = ' + counter)
        .then(r=>
        {
            res.send('The software is running. Number of visits when you refresh from the browser: ' + counter ); 
            console.log(counter);
        });
    })
});

const port = 8080;

app.listen(port, ()=>{
    console.log('Listening on port ' + port);
});
