import './Exercises.css';
import Button from '@mui/material/Button';
import { useQuery } from '@apollo/client';
import { USER_EXERCISES } from '../../utils/queries';

function Mylist() {
  const loginEmail = localStorage.getItem('email');
  const { loading, data } = useQuery(USER_EXERCISES,{
    variables: { loginEmail: loginEmail },
  });
  console.log(data);
  const exercises = data?.userExercises[0].exercises || [];
  console.log(exercises)
  return (
    <div>
    <section id="exercises" className="exercises">
          <div className="container">
    
            <div className="section-title">
            <h1>My Exercises</h1>
         {/* Card */}
         <div>
    
          {exercises &&
            exercises.map((exercise) => (
              <div key={exercises.loginEmail} className="card mb-3">
                <h4 className="card-header bg-primary text-light p-2 m-0">
                  {exercise.exerciseName}  </h4>
                   <br />         
                   <div className="card-body bg-light p-2">         
                  <img src={`/images/exercises/${exercise.exerciseType}/${exercise.exercisePath}/${exercise.imgStart}`}/>
                  </div>
                <div className="card-body bg-light p-2">
                <img src={`/images/exercises/${exercise.exerciseType}/${exercise.exercisePath}/${exercise.imgEnd}`}/>
                </div>
                <div>
                 <Button variant="contained">Delete</Button>
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
    
  

export default Mylist;