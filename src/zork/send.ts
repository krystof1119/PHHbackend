import * as axios from 'axios';
import config from "../config";

import {InstancesGlobal} from "../globalvar";
declare var global : InstancesGlobal;

export default async function send(text: string, browserId: string): Promise<string> {
    return (await axios.default({
        method: 'POST',
        url: '/text',
        baseURL: config.zorkUri,
        data: {
            id: global.instances[browserId],
            text
        }
    })).data.text;
}
