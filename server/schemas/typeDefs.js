const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Exercise {
  _id: ID
  exerciseName: String
  exercisePath: String
  imgStart: String
  imgEnd:String
  exerciseType: String
}

type UserExercise {
  _id: ID
  loginEmail: String
  exercises: [Exercise]
}

type Query {
    exercises (type: String): [Exercise]
    bandExercises (type: String): [Exercise]
    stretchExercises (type: String): [Exercise]
    userExercises (type: String): [UserExercise]
  }
type Mutation {
  addExercise(email: String!, exerciseObjId: ID! ): UserExercise
  removeExercise(email: String!, exerciseObjId: ID! ): UserExercise
  initNewUser(email: String!): UserExercise

}
`;


module.exports = typeDefs;

