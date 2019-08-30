import {Field, ObjectType} from "type-graphql";

@ObjectType()
export default class Data {
    @Field()
    res: string;
}
