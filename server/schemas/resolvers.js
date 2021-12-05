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
        }
      );
    }
  }
};

module.exports = resolvers;

