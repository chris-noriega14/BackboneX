const { Schema, model } = require('mongoose');

const exerciseSchema = new Schema({
  exerciseName: {
    type: String,
    required: true,
  },
  exercisePath: {
    type: String,
    required: true,
  },
  imgStart: {
    type: String,
    required: true,
  },
  imgEnd: {
    type: String,
    required: true,
  },
  startingTip: {
    type: String,
    required: true,
  },
  endingTip: {
    type: String,
    required: true,
  },
  diagnosis: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Exercise = model('Exercise', exerciseSchema);

module.exports = Exercise;
