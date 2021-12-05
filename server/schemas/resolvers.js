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
};

module.exports = resolvers;

