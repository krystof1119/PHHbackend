import {Arg, Query, Resolver} from "type-graphql";
import Data from "../types/data";
import findAndExecuteBestAction from "../../findAndExecuteBestAction";

@Resolver(Data)
export default class DataResolver {
    @Query(() => String)
    async res(@Arg('var') val: string, @Arg('browserId') browserId: string): Promise<string> {
        return findAndExecuteBestAction(val, browserId);
    }
}
