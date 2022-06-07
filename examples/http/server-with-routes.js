import { createServer } from 'http';
import { createReadStream, statSync } from 'fs';
import { resolve } from 'path';

const port = 3008;
const users = [
  {
    id: 1,
    name: 'Jane',
  },
  {
    id: 2,
    name: 'Joe',
  },
];

const controllers = [
  {
    path: new RegExp(/\/api\/users$/),
    handler: (_req, res) => {
      res.writeHead(200, 'OK');
      res.end(JSON.stringify(users));
    },
  },
  {
    path: new RegExp(/\/api\/users\/(?<userId>\d)/),
    handler: (req, res) => {
      const user = users.find((user) => user.id == req.params.userId);

      if (!user) {
        res.writeHead(404, 'Not Found');
        res.end();

        return;
      }

      res.writeHead(200, 'OK');
      res.end(
        JSON.stringify({
          id: req.params.userId,
          name: 'Jane',
        })
      );
    },
  },
  {
    path: new RegExp(/\//),
    handler: (_req, res) => {
      const path = resolve(process.cwd(), 'examples/http/index.html');
      const fileSize = statSync(path);
      const htmlStream = createReadStream(path);

      res.writeHead(200, 'OK', {
        'Content-Length': fileSize.size,
        'Content-Type': 'text/html',
      });
      htmlStream.pipe(res);
    },
  },
];

const server = createServer((req, res) => {
  const controller = controllers.find(({ path }) => {
    const r = path.exec(req.url);
    const isMatch = req.url.match(path);

    if (isMatch && r.groups) {
      req.params = r.groups;
    }

    return isMatch;
  });

  if (!controller) {
    res.writeHead(404, 'Not Found');
    res.end();

    return;
  }

  controller.handler(req, res);
});

server.listen(port);
