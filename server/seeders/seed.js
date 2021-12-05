const { Exercise, UserExercise } = require('../models');
const userExerciseSeeds = require('./userExerciseSeeds.json');
const exerciseSeeds = require('./exerciseSeeds.json');
const mongoose = require('mongoose');

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
  try {
    await Exercise.deleteMany({});
    await UserExercise.deleteMany({});

    await UserExercise.create(userExerciseSeeds);

    for (let i = 0; i < exerciseSeeds.length; i++) {
      const { _id, loginEmail } = await Exercise.create(exerciseSeeds[i]);
      const userExercise = await UserExercise.findOneAndUpdate(
        { loginEmail: loginEmail },
        {
          $addToSet: {
            exercises: _id,
          },
        }
      );
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
