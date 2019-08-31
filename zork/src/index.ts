import * as express from 'express';
import {Express} from "express";
import create from "./handlers/create";
import {ZorkGlobal} from "./globalvar";
import text from "./handlers/text";
declare let global: ZorkGlobal;

global.instances = {};

const app : Express = express();

app.use(express.json());

app.post('/create', create);
app.post('/text', text);

app.listen(12364, () => {
    console.log('Listening on port 12364');
});
