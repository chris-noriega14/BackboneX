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
    exercisePath
    imgStart
    imgEnd
  }
}
`;

export const QUERY_STRETCH = gql`
query getStretchExercises {
  stretchExercises (type: "stretches") {
    _id
    exerciseName
    exercisePath
    imgStart
    imgEnd
  }
}
`;

export const USER_EXERCISES= gql`
query getUserExercises ($loginEmail: String!) {
  userExercises (type: $loginEmail) {
    loginEmail
    exercises {
      exerciseName
      exercisePath
      imgStart
      imgEnd
      exerciseType
    }
  }
}
`;