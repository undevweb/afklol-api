import {ImageInterface} from "./image.interface";

export interface SpellInterface {
    id?: string;
    name?: string;
    description?: string;
    tooltip?: string;
    leveltip?: { label?: string[], effect?: string[] };
    maxrank?: number;
    cooldown?: number[];
    cooldownBurn?: string;
    cost?: number[];
    costBurn?: string[];
    datavalues?: {};
    effect?: number[][];
    effectBurn?: string[];
    vars?: any[];
    costType?: string;
    maxammo?: string;
    range?: number[];
    rangeBurn?: string;
    image?: ImageInterface;
    resource?: string;
}
