import Global = NodeJS.Global;
export interface InstancesGlobal extends Global {
    instances: {
        [key: string]: string
    }
}
