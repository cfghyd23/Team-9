import axios from 'axios';
import React, { useState,useEffect } from 'react';
import Button from 'react-bootstrap/esm/Button';
import auth from '../Firebase'
import { useNavigate } from 'react-router-dom';
const HospitalRequest = () => {
  const [zipcode, setZipcode] = useState('');
  const [bloodGroup, setBloodGroup] = useState('');
  const [units, setUnits] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Process the form data, e.g., send it to the backend API

    // Clear the form fields after submission
    setZipcode('');
    setBloodGroup('');
    setUnits('');
  };

  useEffect(()=>{
    if(localStorage.getItem("uType")!=1){
      nav("/login");
    }
  })

  let nav = useNavigate();

  const regReq = ()=>{

    axios.post("http://localhost:5002/api/getDonor", {

    "uid":localStorage.getItem("hUID"),
      "zipcode":Number(zipcode),
      "bloodType":bloodGroup,
      "units":Number(units),
   

 
 
      
      
 
      },
      {headers:{
 
      
       "Access-Control-Allow-Origin":"*",
     } }
      )
      .then(function (response) {
        console.log("shcgsahj");
        if(response.status ==200){
         nav("/hosAdmin");
        }
      })
      .catch(function (error) {
        console.log(error);
      });



  }

  return (
    <div>
      <h2>Hospital Registration</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="zipcode">Zipcode:</label>
          <input
            type="text"
            id="zipcode"
            value={zipcode}
            onChange={(e) => setZipcode(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="bloodGroup">Blood Group:</label>
          <input
            type="text"
            id="bloodGroup"
            value={bloodGroup}
            onChange={(e) => setBloodGroup(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="units">Number of Units:</label>
          <input
            type="text"
            id="units"
            value={units}
            onChange={(e) => setUnits(e.target.value)}
          />
        </div>
        <Button  onClick={regReq} type="submit">Register</Button>
      </form>
    </div>
  );
};

export default HospitalRequest;