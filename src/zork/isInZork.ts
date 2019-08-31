import {InstancesGlobal} from "../globalvar";
declare var global : InstancesGlobal;

export default function isInZork(browserId: string): boolean {
    let retVal : boolean = !!global.instances[browserId];
    console.log(retVal);
    return retVal;
}
