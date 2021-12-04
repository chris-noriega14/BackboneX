import { gql } from '@apollo/client';

export const ADD_EXERCISE = gql`
mutation addExercise($exerciseId: ID!, $loginEmail: String!) {
  addExercise(exerciseId: $exerciseId, loginEmail: $loginEmail) {
    exerciseName
    exercisePath
    imgStart
    imgEnd
    exerciseType
    startingTip
    endingTip
    diagnosis
  }
}
`;

export const DELETE_EXERCISE = gql`
mutation deleteExercise($exerciseId: ID!, $loginEmail: String!) {
  deleteExercise(exerciseId: $exerciseId, loginEmail: $loginEmail) {
    exerciseName
    exercisePath
    imgStart
    imgEnd
    exerciseType
    startingTip
    endingTip
    diagnosis
  }
}
`;

export const LOGIN_USER = gql`
  mutation login($loginEmail: String!, $password: String!) {
    login(loginEmail: $loginEmail, password: $password) {
      token
      userExercise {
        loginEmail
        exerciseId
      }
    }
  }
`;
