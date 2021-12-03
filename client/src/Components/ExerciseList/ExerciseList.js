import React from 'react';
import { Link } from 'react-router-dom';
import image1 from "../../images/exercises/ball/ab_crunch/resized_480x360_ab_end.jpg"

const ExerciseList = ({ exercises, title }) => {
  if (!exercises.length) {
    return <h3>No Exercises</h3>;
  }

  return (
    <div>
      <h3>{title}</h3>
      {exercises &&
        exercises.map((exercise) => (
          <div key={exercise._id} className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2 m-0">
              {exercise.exerciseName} <br />
              <img src={image1}/>
            </h4>
            <div className="card-body bg-light p-2">
              <p>{exercise.imgEnd}</p>
            </div>
            <Link
              className="btn btn-primary btn-block btn-squared"
              to={`/exercise/${exercise.exerciseType}/`}
            >
            </Link>
          </div>
        ))}
    </div>
  );
};

export default ExerciseList;