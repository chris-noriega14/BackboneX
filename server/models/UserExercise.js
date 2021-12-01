const { Schema, model } = require('mongoose');

const userExerciseSchema = new Schema({
  exerciseId: {
    type: Number,
    required: true,
  },
  loginEmail: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const UserExercise = model('userExercise', userExerciseSchema);

module.exports = UserExercise;