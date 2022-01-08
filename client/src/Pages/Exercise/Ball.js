import './Exercises.css';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_BALL } from '../../utils/queries';
import { ADD_EXERCISE } from '../../utils/Mutations';
import Button from '@mui/material/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { Redirect } from "react-router-dom";
import Card from '../../Components/shared/Card';


import Auth from '../../utils/auth.js';

const Ball = (modifyKo, setModifyKo) => {

  const notify = () => toast("Exercise Added!");
  const [exerciseData, setExerciseData] = useState()
  const { loading, data } = useQuery(QUERY_BALL);
  const [addExercise, { error }] = useMutation(ADD_EXERCISE);



 const handleClick = async (btnData, e) => {
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


useEffect(() => {

  if (!loading && data) {
    console.log(data.exercises);
    setExerciseData(data.exercises)
    setModifyKo(false)
  }

}, [loading,data])

if(loading) return <h1 className='blank-exercises'>You Haven't Added any Exercises Yet!</h1>
 
  return (
      <div>
      <ToastContainer />

        {Auth.loggedIn() ? ( 
<section id="exercises" className="exercises">
      <div className="container">

        <div className="section-title">
        <h1>Ball Exercises</h1>
     {/* Card */}
     <div>

      {exerciseData &&
        exerciseData?.map((exercise) => (
          <Card modifyKo={modifyKo} exerciseData={exerciseData} handleClick={handleClick}  exercise={exercise} />
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

export default Ball;