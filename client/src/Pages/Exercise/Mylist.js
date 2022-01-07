import './Exercises.css';
import Button from '@mui/material/Button';
import { useQuery, useMutation } from '@apollo/client';
import { USER_EXERCISES } from '../../utils/queries';
import { REMOVE_EXERCISE } from '../../utils/Mutations';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Auth from '../../utils/auth.js';
import { Redirect } from "react-router-dom";
import { useEffect, useState } from "react"

function Mylist() {
  const [exerciseData, setExerciseData] = useState()
  const notify = () => toast("Exercise Deleted!");
  const loginEmail = localStorage.getItem('email');
  const [removeExercise, { error }] = useMutation(REMOVE_EXERCISE);
  const { loading, data, refetch } = useQuery(USER_EXERCISES, {
    variables: { loginEmail: loginEmail },
   
  });

;
  const handleClick = async (data, e) => {
    console.log(e.target);
    let exerciseObjId = e.target.value
    let email = localStorage.getItem('email');
    try {
     const removeData = await removeExercise({
        variables: { email, exerciseObjId },
      })
    } catch (err) {
      console.log(err);
    }
    refetch()
    notify()
  }

  useEffect(() => {

    if (!loading && data) {
      setExerciseData(data.userExercises[0].exercises)
      console.log(data.userExercises[0].exercises);
    }

  }, [loading,data])

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

                {exerciseData &&
                  exerciseData?.map((exercise) => (
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
                        <Button onClick={handleClick.bind(this, data)} value={`${exercise._id}`} variant="contained">Delete</Button>
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



export default Mylist;