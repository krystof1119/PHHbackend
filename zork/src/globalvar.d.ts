import {ChildProcess} from "child_process";

import Global = NodeJS.Global;
export interface ZorkGlobal extends Global {
    instances: {
        [key: string]: ChildProcess
    }
}
