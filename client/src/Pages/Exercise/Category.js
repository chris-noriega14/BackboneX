import './Exercises.css';
import Auth from '../../utils/auth.js';
import { Redirect } from "react-router-dom";
import { useState } from 'react'
import SharedPage from './SharedPage';
import CategoryCard from './CategoryCard.jsx'

function Category() {

  const [categoryState, setCategoryState] = useState("category")

 

  return (
    <div>
      
      {Auth.loggedIn() && categoryState === "category" ? ( 
<CategoryCard />
  
    ) : (<SharedPage categoryState={categoryState} />)}
    </div>
  );
}

export default Category;