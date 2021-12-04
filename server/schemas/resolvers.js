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
      return await UserExercise.find({ loginEmail: args.type}).populate('exercises');
    },
  },


  Mutation: {
    // exercise ID & user email
    addExercise: async (parent, { exerciseId, loginEmail }) => {
      const userExercise = await userExercise.create({ exerciseId, loginEmail });
      const token = signToken(userExercise);

      return { token, userExercise };
    },
  },
    deleteExercise: async (parent, { exerciseId, exerciseType }) => {
    return userExercise.findOneAndUpdate(
      { _id: exerciseId },
      { $pull: { exercise: exerciseType } },
      { new: true }
    );
  },
};

module.exports = resolvers;

