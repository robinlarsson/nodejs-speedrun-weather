import express from 'express';
import { camelCase } from 'change-case';

const app = express();

app.get('/', function (req, res) {
  res.send(camelCase(req.query.message));
});

app.listen(3000);
