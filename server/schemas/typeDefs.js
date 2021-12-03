const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Exercise {
  _id: ID
  exerciseName: String
  imgStart: String
  imgEnd:String
}

type Query {
    exercises (type: String): [Exercise]
  }
`;

module.exports = typeDefs;

