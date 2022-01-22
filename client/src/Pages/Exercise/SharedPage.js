import './Exercises.css';
import Button from '@mui/material/Button';
import { useQuery, useMutation } from '@apollo/client';
import { USER_EXERCISES, QUERY_BALL, QUERY_BAND, QUERY_VIDEO, QUERY_STRETCH } from '../../utils/queries';
import { REMOVE_EXERCISE, ADD_EXERCISE } from '../../utils/Mutations';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Auth from '../../utils/auth.js';
import { Redirect } from "react-router-dom";
import { useEffect, useState } from "react"
import Card from '../../Components/shared/Card';
import VideoCard from '../../Components/shared/VideoCard'



function SharedPage(categoryState) {
  const [pageState, setPageState] = useState(QUERY_STRETCH)
  const [title, setTitle] = useState("Loading...")

  useEffect(() => {
    let category = categoryState.categoryState
    console.log(category);
    if (category === "ball"){
          setPageState(QUERY_BALL)
          setTitle("Ball Exercises")
    }
    if (category === "band"){
      setPageState(QUERY_BAND)
      setTitle("Band Exercises")
    }
    if (category === "stretch"){
      setPageState(QUERY_STRETCH)
      setTitle("Stretches")
    }
    if (category === "video"){
      setPageState(QUERY_VIDEO)
      setTitle("Videos")
    }
  },[] );

  const buttonText = "Add to my list"
  

  const notify = () => toast("Exercise Added!");
  const [exerciseData, setExerciseData] = useState()
  const { loading, data } = useQuery(pageState);
  console.log(data);
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
    console.log(data.exercise);
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
        <h1>{title}</h1>
     {/* Card */}
     <div>

      {exerciseData &&
        exerciseData?.map((exercise) => exercise.exerciseType !== "video" ?  (
          
          <Card buttonText={buttonText} exerciseData={exerciseData} handleClick={handleClick}  exercise={exercise} />
        ) : <VideoCard buttonText={buttonText} handleClick={handleClick} exercise={exercise}  />)}
      
    </div>
    {/* End Card */}
        </div>

      </div>
    </section>
    ) : (<Redirect to="/" />)}
    </div>
  );
}


export default SharedPage;