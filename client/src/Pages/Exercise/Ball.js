import './Exercises.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_BALL } from '../../utils/queries';

const Ball = () => {
  const { loading, data } = useQuery(QUERY_BALL);
  console.log(data);
  const exercises = data?.exercises || [];

  return (
      <div>
<section id="exercises" className="exercises">
      <div className="container">

        <div className="section-title">
        <h1>Ball Exercises</h1>
     {/* Card */}
     <div>

      {exercises &&
        exercises.map((exercise) => (
          <div key={exercise._id} className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2 m-0">
              {exercise.exerciseName} <br />
              <img src={`/images/exercises/ball/${exercise.exercisePath}/${exercise.imgStart}`}/>
            </h4>
            <div className="card-body bg-light p-2">
            <img src={`/images/exercises/ball/${exercise.exercisePath}/${exercise.imgEnd}`}/>
            </div>
            <Link
              className="btn btn-primary btn-block btn-squared"
              to={`/exercise/${exercise.exerciseType}`}
            >
            </Link>
          </div>
        ))}
    </div>
    {/* End Card */}
        </div>

      </div>
    </section>
    </div>
  );
}

export default Ball;