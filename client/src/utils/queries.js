import { gql } from '@apollo/client';

export const QUERY_BALL = gql`
query getExercises {
  exercises (type: "ball") {
    _id
    exerciseName
    exercisePath
    imgStart
    imgEnd
  }
}
`;

export const QUERY_BAND = gql`
query getBandExercises {
  bandExercises (type: "band") {
    _id
    exerciseName
    imgStart
    imgEnd
  }
}
`;

export const QUERY_STRETCH = gql`
query getStretchExercises {
  stretchExercises (type: "stretch") {
    _id
    exerciseName
    imgStart
    imgEnd
  }
}
`;