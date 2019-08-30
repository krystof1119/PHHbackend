import {Arg, Query, Resolver} from "type-graphql";
import Data from "../types/data";

@Resolver(Data)
export default class DataResolver {
    @Query(() => String)
    async res(@Arg('var') val: string): Promise<string> {
        return 'test';
    }
}
