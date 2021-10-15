const { createServer } = require('http');

const users = [
  { id: 1, name: 'Visionwuwu', age: 18, sex: '男', cart: '劳斯莱斯' },
  { id: 2, name: 'yan', age: 18, sex: '女' },
];

const server = createServer((req, res) => {
  const { url, method } = req;
  const { end } = res;
  if (method.toUpperCase() === 'POST' && url === '/users') {
    end(JSON.stringify(users));
  } else {
    end('Not Found！！！');
  }
});

server.listen(3000, () => {
  console.log('server is running 3000 port');
});
