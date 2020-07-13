import { ApolloServer } from 'apollo-server';
import schema from './schema';

import * as config from './config';

const server = new ApolloServer(schema);

export default {
  start: async () => {
    const { url } = await server.listen(config);
    console.log(`Listening at ${url}`);
  },
};