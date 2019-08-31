import * as axios from 'axios';
import config from "../config";

import {InstancesGlobal} from "../globalvar";
declare var global : InstancesGlobal;

export default async function enterZork(browserId: string): Promise<string> {
    console.log('Entering the dungeon');
    let data = (await axios.default({
        method: 'POST',
        url: '/create',
        baseURL: config.zorkUri,
        responseType: 'json'
    })).data;
    global.instances[browserId] = data.id;
    return data.text;
}
