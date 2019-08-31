import {Arg, Query, Resolver} from "type-graphql";
import Data from "../types/data";
import findAndExecuteBestAction from "../../findAndExecuteBestAction";
import isInZork from "../../zork/isInZork";
import handleZork from "../../zork/handleZork";

@Resolver(Data)
export default class DataResolver {
    @Query(() => String)
    async res(@Arg('var') val: string, @Arg('browserId') browserId: string): Promise<string> {
        if (isInZork(browserId)) {
            return handleZork(val, browserId);
        }
        return findAndExecuteBestAction(val, browserId);
    }
}
