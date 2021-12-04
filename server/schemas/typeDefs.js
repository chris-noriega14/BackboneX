const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Exercise {
  _id: ID
  exerciseName: String
  exercisePath: String
  imgStart: String
  imgEnd:String
}

type Users {
  id: ID
  firstName: String
  lastName: String
  email: String
  password: String
}

type Query {
    exercises (type: String): [Exercise]
    bandExercises (type: String): [Exercise]
    stretchExercises (type: String): [Exercise]
    users (id: Int): [Users]
  }
`;

module.exports = typeDefs;

