import { GraphQLClient } from 'graphql-request';
import { CONFIG } from '../../config';

export const graphQLClient = new GraphQLClient(CONFIG.URL, { headers: {} });
