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
  exercise: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Exercise',
    },
  ],
});

const UserExercise = model('userExercise', userExerciseSchema);

module.exports = UserExercise;
