import './Exercises.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_VIDEO } from '../../utils/queries';
import Button from '@mui/material/Button';
import { ADD_VIDEO} from '../../utils/Mutations';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { Redirect } from "react-router-dom";
import { TextField } from '@mui/material';

import VideoCard from "../../Components/shared/VideoCard"

import Auth from '../../utils/auth.js';

const Admin = () => {
  const notify = () => toast("Exercise Added!");
  // const { loading, data } = useQuery(QUERY_VIDEO);
  const exercises =  [];
  const [addVideo, { error }] = useMutation(ADD_VIDEO);

  const [exerciseName, setExerciseName] = useState('')
  const [exercisePath, setExercisePath] = useState('')
  const [exerciseType, setExerciseType] = useState('video')

  const handleInputChange =  (e) => {
    const {name, value } = e.target

    name === 'exerciseName' ? setExercisePath(value) : setExerciseName(value)
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {

      const test = await addVideo({
         variables: { exerciseName, exerciseType, exercisePath },
       })
       console.log(test);
     } catch (err) {
       console.error(err)
     } 
     notify()

    // setExerciseName('');
    // setExerciseUrl('');
  }

  const buttonText = "Delete video from database"

  const handleClick = async (data, e) => {
    let exerciseObjId = e.target.value

  
   
      
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
 <VideoCard buttonText={buttonText} handleClick={handleClick} exercise={exercise} />
    
  ))}
</div>
{/* End Card */}
        </div>

      </div>
      <div>
      <TextField onChange={handleInputChange} id="outlined-basic" name='exerciseName' label="YouTube URL" variant="outlined" />
      <TextField onChange={handleInputChange} id="outlined-basic" name='exerciseUrl' label="Video Title" variant="outlined" />

<Button onClick={handleFormSubmit} variant="contained">Add Video to database</Button>
      </div>
    </section>
    ) : (<Redirect to="/" />)}
    </div>
  );
}

export default Admin;