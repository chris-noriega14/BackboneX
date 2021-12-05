import { gql } from '@apollo/client';

export const ADD_EXERCISE = gql`
  mutation addExercise($exerciseObjId: ID!, $email: String!) {
    addExercise(email: $email, exerciseObjId: $exerciseObjId) {
      _id
    }
  }
`;