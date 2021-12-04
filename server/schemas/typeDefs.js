const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Exercise {
  _id: ID
  exerciseName: String
  exercisePath: String
  imgStart: String
  imgEnd:String
}

type UserExercise {
  exerciseId: ID
  loginEmail: String
}

type Query {
    exercises (type: String): [Exercise]
    bandExercises (type: String): [Exercise]
    stretchExercises (type: String): [Exercise]
    userExercises (type: String): [UserExercise]
  }
`;

module.exports = typeDefs;

