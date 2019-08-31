import * as stringSimilarity from 'string-similarity';
import keywords from "./keywords";
import {BestMatch} from "string-similarity";

export default async function findAndExecuteBestAction(val: string, browserId: string): Promise<string> {
    let matches: BestMatch = stringSimilarity.findBestMatch(val, Object.keys(keywords));
    if (matches.bestMatch.rating < 0.25) {
        return '';
    }
    let bestKeyword : string = matches.bestMatch.target;
    let bestFunction : Function = keywords[bestKeyword];
    return bestFunction(val, browserId);
}
