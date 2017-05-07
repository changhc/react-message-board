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
  const comment = req.body;
  const list = req.body.parentId.split('-');
  console.log(list);
  console.log('new comment!');
  let temp = data;
  let i = 1;
  while (i !== list.length) {
    temp = temp.child[parseInt(list[i], 10)];
    i += 1;
  }
  comment.id = `${req.body.parentId}-${temp.child.length}`;
  temp.child.push(comment);
  // data.push(req.body);
  res.sendStatus(202);
});

server.get('/:user', (req, res) => {
  res.status(200).send(req.params.user);
});

server.listen(port, () => {
  console.log('%s listening on %s', server.name, port);
});
