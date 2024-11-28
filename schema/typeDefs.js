const { gql } = require('apollo-server');

const typeDefs = gql`
  type Product {
    id: ID!
    name: String!
    price: Float!
    stock: Int!
    category: String!
  }

  type Order {
    id: ID!
    product: Product!
    quantity: Int!
    total: Float!
    status: String!
  }

  type User {
    id: ID!
    username: String!
    role: String!
  }

  type Query {
    products: [Product]
    orders: [Order]
    users: [User]
  }

  type Mutation {
    addProduct(name: String!, price: Float!, stock: Int!, category: String!): Product
    updateProduct(id: ID!, stock: Int!): Product
    deleteProduct(id: ID!): String
  }
`;

module.exports = typeDefs;
