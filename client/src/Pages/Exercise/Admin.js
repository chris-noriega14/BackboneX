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
    const reg = /(https:\/\/www.youtube.com\/embed\/)+\w+/g

    


    name === 'exerciseName' ? setExercisePath(reg.exec(value)[0]) : setExerciseName(value)
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
        <h3>Adding a New Video</h3>
        <div>Step 1: Navigate to desired Youtube video and right click</div>
        <div>Step 2: Select "Copy embed code" from the available options</div>
        <div>Step 3: Type in the video title in the first text field</div>
        <div>Step 4: Paste the embedded code in the text field labeled Youtube URL</div>
        <br></br>
        <div>
          <div className="d-flex flex-column col-8">
      <TextField onChange={handleInputChange} id="outlined-basic" name='exerciseUrl' label="Video Title" variant="outlined" />
      <br></br>
      <TextField
          id="outlined-multiline-static"
          label="YouTube URL"
          name='exerciseName'
          multiline
          rows={4}
        />
          </div>
      <br></br>
      <Button onClick={handleFormSubmit} variant="contained">Add Video to database</Button>
      </div>  
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
      
    </section>
    ) : (<Redirect to="/" />)}
    </div>
  );
}

export default Admin;