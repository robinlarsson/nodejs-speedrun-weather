import { createServer } from 'http';

const port = 3008;

const server = createServer((_req, res) => {
  res.writeHead(200, 'OK', {
    'x-api-hello': 'world',
    'Content-Type': 'application/json',
  });
  res.end(
    JSON.stringify({
      data: [1, 2, 3],
    })
  );
});

server.listen(port);
