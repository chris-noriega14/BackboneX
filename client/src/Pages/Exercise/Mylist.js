import './Exercises.css';
import Button from '@mui/material/Button';

function Mylist() {
  return (
      <div>
<section id="exercises" class="exercises">
      <div class="container">

        <div class="section-title">
          <h1>My Exercise List</h1>
          
     {/* Card */}
<div>
<Button variant="contained">Delete</Button>
  </div>
        </div>

      </div>
    </section>
    </div>
  );
}

export default Mylist;