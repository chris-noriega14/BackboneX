import './Exercises.css';
import Button from '@mui/material/Button';
import { useQuery, useMutation } from '@apollo/client';
import { USER_EXERCISES } from '../../utils/queries';
import { REMOVE_EXERCISE } from '../../utils/Mutations';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Auth from '../../utils/auth.js';

function Mylist() {
  const notify = () => toast("Exercise Deleted!");
  const loginEmail = localStorage.getItem('email');
  const { loading, data } = useQuery(USER_EXERCISES,{
    variables: { loginEmail: loginEmail },
  });
  console.log(data);
  const exercises = data?.userExercises[0].exercises || [];
  const [removeExercise, { error }] = useMutation(REMOVE_EXERCISE);
console.log(exercises);
 const handleClick = async (data, e) => {
  console.log(e.target);
  let exerciseObjId = e.target.value
  console.log(exerciseObjId);
  let email = localStorage.getItem('email');
  console.log(email);

  try {
    const removeData = await removeExercise({
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
                  <img src={`/images/exercises/${exercise.exerciseType}/${exercise.exercisePath}/${exercise.imgStart}`} width="40%" height="40%"/>
                  </div>
                <div className="card-body bg-light p-2">
                <img src={`/images/exercises/${exercise.exerciseType}/${exercise.exercisePath}/${exercise.imgEnd}`} width="40%" height="40%"/>
                </div>
                <div>
                <Button onClick={handleClick.bind(this, data)} value={`${exercise._id}`} variant="contained">Delete</Button>
                   </div>
                       </div>
                 
              
            ))}
          
        </div>
        {/* End Card */}
            </div>
    
          </div>
        </section>
        ) : (<div>
          <h1>Please login to view exercises!</h1>
          </div>)}
        </div>
      );
    }
    
  

export default Mylist;