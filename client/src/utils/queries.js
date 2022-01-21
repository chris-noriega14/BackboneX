import { gql } from '@apollo/client';

export const QUERY_BALL = gql`
query getExercises {
  exercises (type: "ball") {
    _id
    exerciseName
    exercisePath
    imgStart
    imgEnd
    exerciseType
  }
}
`;

export const QUERY_BAND = gql`
query getBandExercises {
  exercises (type: "band") {
    _id
    exerciseName
    exercisePath
    imgStart
    imgEnd
    exerciseType
  }
}
`;
export const QUERY_VIDEO = gql`
query getBandExercises {
  exercises (type: "video") {
    _id
    exerciseName
    exercisePath
  }
}
`;

export const QUERY_STRETCH = gql`
query getStretchExercises {
  exercises (type: "stretches") {
    _id
    exerciseName
    exercisePath
    imgStart
    imgEnd
    exerciseType
  }
}
`;

export const USER_EXERCISES= gql`
query getUserExercises ($loginEmail: String!) {
  userExercises (type: $loginEmail) {
    loginEmail
    exercises {
      _id
      exerciseName
      exercisePath
      imgStart
      imgEnd
      exerciseType
    }
  }
}
`;