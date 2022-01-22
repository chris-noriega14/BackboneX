import React from 'react'
import Button from '@mui/material/Button';

function Card({buttonText, exerciseData, exercise, handleClick,btnData}) {
   
    

    return (
                <div>
                    <div key={exerciseData.loginEmail} className="card mb-3">
                      <h4 className="card-header bg-primary text-light p-2 m-0">
                        {exercise.exerciseName}  </h4>
                      <br />
                      <div className="card-body bg-light p-2">
                        <img src={`/images/exercises/${exercise.exerciseType}/${exercise.exercisePath}/${exercise.imgStart}`} width="40%" height="40%" />
                      </div>
                      <div className="card-body bg-light p-2">
                        <img src={`/images/exercises/${exercise.exerciseType}/${exercise.exercisePath}/${exercise.imgEnd}`} width="40%" height="40%" />
                      </div>
                      <div>
                        <Button onClick={handleClick.bind(this, btnData)} value={`${exercise._id}`} variant="contained">{buttonText}</Button>
                      </div>
                    </div>

            
              </div>
    )
}

export default Card
