import { gql } from '@apollo/client';

export const ADD_EXERCISE = gql`
  mutation addExercise($exerciseObjId: ID!, $email: String!) {
    addExercise(email: $email, exerciseObjId: $exerciseObjId) {
      _id
    }
  }
`;

export const ADD_VIDEO = gql`
mutation addVideo($exerciseName: String!, $exercisePath: String!, $exerciseType: String!) {
  addVideo(exerciseType: $exerciseType, exerciseName: $exerciseName, exercisePath: $exercisePath  ) {
    _id
    exerciseName
    exerciseType
    exercisePath
  }
}
`;


export const INIT_USER = gql`
    mutation initNewUser($email: String!) {
    initNewUser(email: $email) {
        loginEmail
      _id
      }
    }
  
`;
export const REMOVE_EXERCISE = gql`
  mutation removeExercise($exerciseObjId: ID!, $email: String!) {
    removeExercise(email: $email, exerciseObjId: $exerciseObjId) {
      _id
    }
  }
`;