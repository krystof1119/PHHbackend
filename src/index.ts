import 'reflect-metadata';
import * as express from 'express';
import * as cors from 'cors';
import CONFIG from './config';
import {buildSchema} from "type-graphql";
import {GraphQLSchema} from "graphql";
import * as graphqlHTTP from "express-graphql";

async function main(): Promise<void> {
    let schema : GraphQLSchema = await buildSchema({
        resolvers: []
    });



    const app: express.Application = express();

    app.use(cors());

    app.use('/graphql', graphqlHTTP({schema, graphiql: true}));

    app.listen(CONFIG.PORT, () => {console.log(`Server started on port ${CONFIG.PORT}`)})

}

main().then((): void => {});
