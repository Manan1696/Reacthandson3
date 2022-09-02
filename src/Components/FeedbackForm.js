import React from 'react'
import { useState } from 'react';

const FeedbackForm = () =>{
  const[name,setName] = useState('');
  const[depart,setDepart] = useState('');
  const[rating,setRating] = useState('');
  const[time,setTime] = useState([]);

  const getName = (e) => {
    setName(e.target.value)
  }

  const getDepart = (e) => {
    setDepart( e.target.value)
  }

  const getRating = (e) => {
    setRating (e.target.value)
  }

  const submitForm = (e) =>{
    e.preventDefault();
    setTime((data) => {
      return [...data,[`Name -> ${name} | Department -> ${depart} | Rating -> ${rating} `]] 
    })
  
  }

   return(
    <div className='form'>
     <h1>Employee Feedback Form</h1> 

     
  <form onSubmit={submitForm}>
      <label>Name : <input type="text" value={name} onChange={getName} /></label>
        <br/>
      <label>Department : <input type="text" value={depart} onChange={getDepart} /></label>
        <br/>
      <label>Rating : <input type="number" value={rating} onChange={getRating} /></label>
        <br/>
      <button>SUBMIT</button>  
  </form>
  
    <div id='formdata'>
    {
      time.map((saveValue) =>{
        return <div className='databox'>{saveValue}</div>
      })
    }
    </div>
</div>
   ); 
}

export default FeedbackForm