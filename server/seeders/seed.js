const db = require('../config/connection');
const { Exercise, Users } = require('../models');
const exerciseSeeds = require('./exerciseSeeds.json');
const userSeeds = require('./userSeeds.json');

db.once('open', async () => {
  await Exercise.deleteMany({});
  await Exercise.create(exerciseSeeds);
  await Users.deleteMany({});
  await Users.create(userSeeds);

  console.log('=======Seeds planted!=======');
  process.exit(0);
});
