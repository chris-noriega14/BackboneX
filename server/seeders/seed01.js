// const db = require('../config/connection');
const { Exercise, UserExercise } = require('../models');
const users = require('../models/Users');
const exerciseSeeds = require('./exerciseSeeds.json');
const userSeeds = require('./usersSeeds.js');
const userExerciseSeeds = require('./userExerciseSeeds.json');
const mongoose = require('mongoose');
const sequelize = require('../config/connection')

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/exercise',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);

const db = mongoose.connection;

db.once('open', async () => {
  await Exercise.deleteMany({});
  await Exercise.create(exerciseSeeds);
  await UserExercise.deleteMany({});
  await UserExercise.create(userExerciseSeeds);

  console.log('=======Seeds planted!=======');
  // process.exit(0);
});

const seedAll = async () => {
  await sequelize.sync({force: false});
  await userSeeds();
  console.log('<-- all seeds planted-->');

  process.exit(0);
};

seedAll();