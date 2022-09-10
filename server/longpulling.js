const express = require('express');
const cors = require('cors');
const events = require('events');

const emiter = new events.EventEmitter()
const PORT = 5000;

const app = express();
app.use(cors())

app.get('get-message', ((req, res)=>{
      emiter.once('newMessage', (message)=>{
          res.json(message)
      })
}))

app.post('new-message', ((req, res)=>{
      const message = req.body;
      emiter.emit('newMessage', message)
      res.status(200);
}))

app.listen(PORT, ()=>{
    console.log(`Server start on port ${PORT}`);
})