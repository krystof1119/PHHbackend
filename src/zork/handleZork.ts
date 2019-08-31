import send from "./send";
import {InstancesGlobal} from "../globalvar";
declare var global : InstancesGlobal;

export default async function handleZork(text: string, browserId: string): Promise<string> {
    if (text.match(/quit/)) {
        delete global.instances[browserId];
        return send('\nquit\ny', browserId);
    }
    return send(text, browserId);
}
