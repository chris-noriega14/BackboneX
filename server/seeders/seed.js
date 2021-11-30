const db = require('../config/connection');
const { Exercise, Users, UserExercise } = require('../models');
const exerciseSeeds = require('./exerciseSeeds.json');
const userSeeds = require('./userSeeds.json');
const userExerciseSeeds = require('./userExerciseSeeds.json');

db.once('open', async () => {
  await Exercise.deleteMany({});
  await Exercise.create(exerciseSeeds);
  await Users.deleteMany({});
  await Users.create(userSeeds);
  await UserExercise.deleteMany({});
  await UserExercise.create(userExerciseSeeds);

  console.log('=======Seeds planted!=======');
  process.exit(0);
});
