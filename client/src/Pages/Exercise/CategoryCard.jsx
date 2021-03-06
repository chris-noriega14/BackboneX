import './Exercises.css';
import { BiBasketball, BiHourglass, BiDotsHorizontal, BiCommand } from "react-icons/bi";
import Auth from '../../utils/auth.js';
import { Redirect } from "react-router-dom";
import { useState } from 'react'
import SharedPage from './SharedPage';

function Category() {

  const [categoryState, setCategoryState] = useState("category")

  function setBall(){
    setCategoryState("ball")
  }
  function setStretch(){
    setCategoryState("stretch")
  }
  function setBand(){
    setCategoryState("band")
  }
  function setMyList(){
    setCategoryState("mylist")
  }
  
  function setVideo(){
    setCategoryState("video")
  }

  


  return (
    <div>
      
      {Auth.loggedIn() && categoryState === "category" ? ( 
<section id="exercises" className="exercises">

      <div className="container">

        <div className="section-title">
          
          <h1>Exercises</h1>
          <p>Please choose from the following available options:</p>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="fade-up">
            <div className="icon-box">
              <div className="icon"><BiBasketball/></div>
              <h4><a onClick={setBall}>Ball Exercises</a></h4>
              <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="fade-up" data-aos-delay="150">
            <div className="icon-box">
              <div className="icon"><BiCommand/></div>
              <h4><a onClick={setStretch}>Stretches</a></h4>
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay="300">
            <div className="icon-box">
              <div className="icon">< BiDotsHorizontal/></div>
              <h4><a onClick={setBand}>Band Exercises</a></h4>
              <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="fade-up" data-aos-delay="450">
            <div className="icon-box">
              <div className="icon">< BiHourglass/></div>
              <h4><a onClick={setVideo}>Videos (coming soon)</a></h4>
              <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="fade-up" data-aos-delay="600">
            <div className="icon-box">
              <div className="icon">< BiHourglass/></div>
              <h4><a href="/exercise/page">Coming Soon</a></h4>
              <p>Quis consequatur saepe eligendi voluptatem consequatur dolor consequuntur</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="fade-up" data-aos-delay="750">
            <div className="icon-box">
              <div className="icon">< BiHourglass/></div>
              <h4><a href="/exercise">Coming Soon</a></h4>
              <p>Modi nostrum vel laborum. Porro fugit error sit minus sapiente sit aspernatur</p>
            </div>
          </div>

        </div>

      </div>
    </section>
    ) : (<SharedPage categoryState={categoryState} />)}
    </div>
  );
}

export default Category;