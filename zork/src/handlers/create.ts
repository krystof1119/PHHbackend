import {Request, Response} from "express";

import {ZorkGlobal} from '../globalvar';
import {ChildProcess, spawn} from "child_process";
declare let global: ZorkGlobal;

export default function create(req: Request, res: Response) {
    console.log(1);
    let id : string = (Math.random()*16*16*16*16).toString(16);
    let zork : ChildProcess = spawn('/zork/zork', [], {
        stdio: ['pipe', 'pipe', 2],
        cwd: '/zork'
    });
    global.instances[id] = zork;
    let toSend : string = '';
    zork.stdout.on('data', data => toSend += data);
    zork.on('close', () => delete global.instances[id]);
    setTimeout(() => res.send({id, text: toSend}), 250);
}
