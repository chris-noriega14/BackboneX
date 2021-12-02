const { Exercise } = require('../models');

const resolvers = {
  Query: {
    exercises: async (parent, args) => {
      return Exercise.find({ exerciseType: args.type });
    },
  },
};

module.exports = resolvers;

