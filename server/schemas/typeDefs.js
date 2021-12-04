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
  exerciseId: ID 
  loginEmail: String
  exercise: [Exercise]
}

type Query {
    exercises (type: String): [Exercise]
    bandExercises (type: String): [Exercise]
    stretchExercises (type: String): [Exercise]
    userExercises (type: String): [UserExercise]
  }

  type Mutation {
    
    addExercise

    deleteExercise
  }

`;

module.exports = typeDefs;

