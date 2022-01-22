import React from 'react'
import Button from '@mui/material/Button';

function Card({ exercise, handleClick, btnData, buttonText}) {

  
   
    

    return (
                <div>
           <div key={exercise._id} className="card mb-3">
      <h4 className="card-header bg-primary text-light p-2 m-0">
        {exercise.exerciseName} </h4>
        <br />
        <div className="card-body bg-light p-2">
        <iframe width="500" height="500" src={exercise.exercisePath} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; full-screen; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
      <div>
      <Button onClick={handleClick.bind(this, btnData)} value={`${exercise._id}`} variant="contained">{buttonText}</Button>
               </div>
    </div>

            
              </div>
    )
}

export default Card
