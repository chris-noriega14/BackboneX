import { gql } from '@apollo/client';

export const QUERY_EXERCISES = gql`
query getExercises {
  exercises {
    _id
    exerciseName
    imgStart
    imgEnd
  }
}
`;