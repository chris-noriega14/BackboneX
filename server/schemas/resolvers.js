const { Exercise, UserExercise } = require('../models');

const resolvers = {
  Query: {
    exercises: async (parent, args) => {
      return await Exercise.find({ exerciseType: args.type });
    },
    bandExercises: async (parent, args) => {
      return await Exercise.find({ exerciseType: args.type });
    },
    stretchExercises: async (parent, args) => {
      return await Exercise.find({ exerciseType: args.type });
    },
    video: async (parent, args) => {
      return await Exercise.find({ exerciseType: args.type });
    },
    userExercises: async (parent, args) => {
      return await UserExercise.find({ loginEmail: args.type }).populate('exercises');
    },
    
  },
  Mutation: {
    addExercise: async (parent, { email, exerciseObjId }) => {
      return UserExercise.findOneAndUpdate(
        { loginEmail: email },
        {
          $addToSet: { exercises: exerciseObjId },
        },
        {
          new: true
        },
      );
    },
    addVideo: async (parent, { exerciseName, exerciseType, exercisePath }) => {
      const video = Exercise.create({
        exerciseName,
        exerciseType,
        exercisePath
      });
      console.log(video);
        return {exerciseName}
    },
    initNewUser: async (parent, { email }) => {
      const loginEmail = UserExercise.create({
        loginEmail: email
      });
      console.log(loginEmail);
        return {loginEmail}
    },
    removeExercise: async (parent, { email, exerciseObjId }) => {
      return UserExercise.findOneAndUpdate(
        { loginEmail: email },
        {
          $pull: { exercises: exerciseObjId },
        },
        {
          new: true
        },
      );
    }
  }
};

module.exports = resolvers;

