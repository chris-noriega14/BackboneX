import './Exercises.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_VIDEO } from '../../utils/queries';
import Button from '@mui/material/Button';
import { ADD_EXERCISE } from '../../utils/Mutations';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { Redirect } from "react-router-dom";

import VideoCard from "../../Components/shared/VideoCard"

import Auth from '../../utils/auth.js';

const Video = () => {
  const notify = () => toast("Exercise Added!");
  const { loading, data } = useQuery(QUERY_VIDEO);
  console.log(data);
  const exercises = data?.exercises || [];
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
      
  }

  return (
      <div>
         <ToastContainer />
        {Auth.loggedIn() ? ( 
<section id="exercises" className="exercises">
      <div className="container">

        <div className="section-title">
        <h1>Videos</h1>
          
     {/* Card */}
     <div>

{exercises &&
  exercises.map((exercise) => (
 <VideoCard handleClick={handleClick} exercise={exercise} />
    
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

export default Video;