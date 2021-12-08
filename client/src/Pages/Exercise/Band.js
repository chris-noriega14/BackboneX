import './Exercises.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_BAND } from '../../utils/queries';
import Button from '@mui/material/Button';
import { ADD_EXERCISE } from '../../utils/Mutations';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { Redirect } from "react-router-dom";

import Auth from '../../utils/auth.js';

const Band = () => {
  const notify = () => toast("Exercise Added!");
  const { loading, data } = useQuery(QUERY_BAND);
  console.log(data);
  const exercises = data?.bandExercises || [];
  const [addExercise, { error }] = useMutation(ADD_EXERCISE);

  const handleClick = async (data, e) => {
    console.log(e.target);
    let exerciseObjId = e.target.value
    console.log(exerciseObjId);
    let email = localStorage.getItem('email');
    console.log(email);
  
    try {
      const addData = await addExercise({
        variables:{ email, exerciseObjId },
      })
    } catch (err) {
      console.error(err)
    }
    notify()
      console.log(e.target.value, data);
  }

  return (
      <div>
         <ToastContainer />
        {Auth.loggedIn() ? ( 
<section id="exercises" className="exercises">
      <div className="container">

        <div className="section-title">
        <h1>Band Exercises</h1>
          
     {/* Card */}
     <div>

{exercises &&
  exercises.map((exercise) => (
    <div key={exercise._id} className="card mb-3">
      <h4 className="card-header bg-primary text-light p-2 m-0">
        {exercise.exerciseName} </h4>
        <br />
        <div className="card-body bg-light p-2">
        <img src={`/images/exercises/band/${exercise.exercisePath}/${exercise.imgStart}`} width="40%" height="40%"/>
      </div>
      <div className="card-body bg-light p-2">
      <img src={`/images/exercises/band/${exercise.exercisePath}/${exercise.imgEnd}`} width="40%" height="40%"/>
      </div>
      <div>
      <Button onClick={handleClick.bind(this, data)} value={`${exercise._id}`} variant="contained">Add to List</Button>
               </div>
    </div>
    
  ))}
</div>
{/* End Card */}
        </div>

      </div>
    </section>
    ) : (<Redirect to="/" />)}
    </div>
  );
}

export default Band;