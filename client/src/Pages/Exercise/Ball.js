import './Exercises.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_BALL } from '../../utils/queries';
import Button from '@mui/material/Button';

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
              {exercise.exerciseName} </h4>
              <br />
              <div className="card-body bg-light p-2">
              <img src={`/images/exercises/ball/${exercise.exercisePath}/${exercise.imgStart}`} width="40%" height="40%"/>
            </div>
            <div className="card-body bg-light p-2">
            <img src={`/images/exercises/ball/${exercise.exercisePath}/${exercise.imgEnd}`} width="40%" height="40%"/>
            </div>
            <div>
             <Button variant="contained">Add to List</Button>
               </div>
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