import { gql } from 'apollo-server';
import { fetchLocal } from '../connection';

const typeDefs = gql`  
  type Local {
    cep: String!
    logradouro: String!
    complemento: String!
    bairro: String!
    localidade: String!
    uf: String!
    unidade: String!
    ibge: String!
    gia: String!
  }

  type Query {
    local(cep: String!): Local
  }
`;

const resolvers = {
  Query: {
    local: async (parent, { cep }) => fetchLocal(cep),
  },
};

export default { typeDefs, resolvers };