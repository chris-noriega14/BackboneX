const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Exercise {
  _id: ID
  exerciseName: String
  exercisePath: String
  imgStart: String
  imgEnd:String
}

type Query {
    exercises (type: String): [Exercise]
    bandExercises (type: String): [Exercise]
    stretchExercises (type: String): [Exercise]
  }
`;

module.exports = typeDefs;

