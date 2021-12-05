const { Schema, model } = require('mongoose');

const userExerciseSchema = new Schema({
  loginEmail: {
    type: String,
    required: true,
  },
  exercises: [
    {
      type: Schema.Types.ObjectId,
      ref: "Exercise"
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const UserExercise = model('userExercise', userExerciseSchema);

module.exports = UserExercise;
