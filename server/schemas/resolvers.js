const { Exercise, Users } = require('../models');

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
    users: async (parent, args) => {
      return await Users.findOne({_id: args.id});
    },
  },
};

module.exports = resolvers;

