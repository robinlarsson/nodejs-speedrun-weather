import Express from "express";
import { createReadStream, writeFile } from "fs";
import { readFile } from "fs/promises";
import fetch from "node-fetch";

const app = Express();

app.use(Express.json());
app.set('view engine', 'pug');

const port = 3008;

let getLoc = {
    gbg: '2-2673730',
    oslo: '1-72837',
}

app.post('/loc', async (req, res) => {
    const loc = req.body.loc;
    const name = req.body.name;

    console.log(loc, name);
    if (!loc) {
        return res.sendStatus(400);
    }

    const data = await readFile('./cache-locs.json', (err) => {
        if (!err) return;

        console.log(err);
    });

    let locs = JSON.parse(data) ?? getLoc;

    locs[name] = loc;

    writeFile('./cache-locs.json', JSON.stringify(locs), (err) => {
        if (!err) return;

        console.log(err);
    });

    console.log('locs', locs);

    res.send(201).end();
});

app.get('/loc', (_, res) => {
    const locationStream = createReadStream('./cache-locs.json');
    res.setHeader("Content-Type", "application/json");
    locationStream.pipe(res);
})

app.get('/loc/:loc', async (req, res) => {
    const locData = await getWeather(req.params.loc);

    if (!locData) {
        res.sendStatus(404);
    }

    res.render('index', { title: 'Hey', temperature: locData?.temperature?.value ?? '' });
    // const htmlStream = createReadStream('./index.html');

    // res.writeHead(200, 'OK', {
    //     'Content-Type': 'text/html',
    // });
    // res.status(200);
    // htmlStream.pipe(res);
})

app.get('/', async (req, res) => {
    const json = getWeather();

    res.send(json);
    // const loc = req.query['loc'];
});

const getWeather = async (city) => {
    const data = await readFile('./cache-locs.json', (err) => {
        if (!err) return;

        console.log(err);
    });

    const locs = JSON.parse(data);
    const loc = locs[city];

    if (!loc) {
        return false;
    }

    const res = await fetch(`https://www.yr.no/api/v0/locations/${loc}/forecast/currenthour`);

    if (res.status !== 200) {
        return null;
    }

    const json = await res.json();

    return json;
}

app.listen(port, () => {
    console.log('running on port' + port);
});