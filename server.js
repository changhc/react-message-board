const express = require('express');
const bodyParser = require('body-parser');

const server = express();

const port = 5000;
const data = { child: [] };

server.use(express.static('/public'));
server.use(bodyParser.json());
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

server.get('/api/comments', (req, res) => {
  res.send(200, JSON.stringify(data));
});

server.post('/api/comments', (req, res) => {
  const list = req.body.id.split('-');
  console.log(list);
  console.log('new comment!');
  let temp = data;
  let i = 0;
  while (i !== list.length - 1) {
    temp = temp.child[parseInt(list[i], 10)];
    i += 1;
  }
  temp.child.push(req.body);
  // data.push(req.body);
  res.sendStatus(202);
});

server.listen(port, () => {
  console.log('%s listening on %s', server.name, port);
});
