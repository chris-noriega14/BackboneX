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
import Card from '../../Components/shared/Card';
import VideoCard from '../../Components/shared/VideoCard'



function Mylist() {
  const [exerciseData, setExerciseData] = useState()
  const notify = () => toast("Exercise Deleted!");
  const loginEmail = localStorage.getItem('email');
  const [removeExercise, { error }] = useMutation(REMOVE_EXERCISE);
  const { loading, data, refetch } = useQuery(USER_EXERCISES, {
    variables: { loginEmail: loginEmail },
  });

;
  const handleClick = async (btnData, e) => {
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
      console.log("this is it", data);
      console.log(data.userExercises[0].exercises);
      setExerciseData(data.userExercises[0].exercises)
    }

  }, [loading,data])

  if(!exerciseData || exerciseData.length === 0) {
    return <h1 className='blank-exercises'>You Haven't Added any Exercises Yet!</h1>
}
  return (
    <div>
      <ToastContainer />
      {Auth.loggedIn() ? (
        <section id="exercises" className="exercises">
          <div className="container">

            <div className="section-title">
              <h1>My Exercises</h1>
              {exerciseData &&
                 exerciseData?.map((exercise) => exercise.exerciseType !== "video" ?  (
          
                  <Card exerciseData={exerciseData} handleClick={handleClick}  exercise={exercise} />
                ) : <VideoCard handleClick={handleClick} exercise={exercise}  />)}
            </div>

          </div>
        </section>
      ) : (<Redirect to="/" />)}
    </div>
  );
}


export default Mylist;