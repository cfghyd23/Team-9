import axios from 'axios';
import React, { useState } from 'react';
import Button from 'react-bootstrap/esm/Button';
import { useNavigate } from 'react-router-dom';

export default function RegisterBB() {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [storage, setStorage] = useState(0);
  const [abP, setAbP] = useState(0);
  const [abN, setAbN] = useState(0);
  const [oP, setOP] = useState(0);
  const [oN, setON] = useState(0);


  let nav = useNavigate();
  const regBB = ()=>{
console.log(Number("89"))
    axios.post("http://localhost:5002/api/createBloodBank", {
       name,
       "location":{
        address,
        city,
        state,
        "zipcode":Number(zip)
       },
       "contactInfo":{
       "phone": Number(phone),email
       },
       "storageCapacity":Number(storage),
       "inventoryStatus":{

        "bloodType":["AB+","AB-","O+","O-"] ,
      "quantity": [Number(abP),Number(abN),Number(oP),Number(oN)]
    },

  
  
       
       
  
       },
       {headers:{
  
       
        "Access-Control-Allow-Origin":"*",
      } }
       )
       .then(function (response) {
         console.log("shcgsahj");
         if(response.status ==200){
          nav("/adminHome");
         }
       })
       .catch(function (error) {
         console.log(error);
       });

  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform any desired actions with the form data
  
  };

  return (
    <div className="testdiv">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="location" className="form-label">
            Location
          </label>
          <input
            type="text"
            className="form-control"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="city" className="form-label">
            City
          </label>
          <input
            type="text"
            className="form-control"
            id="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="state" className="form-label">
            State
          </label>
          <input
            type="text"
            className="form-control"
            id="state"
            value={state}
            onChange={(e) => setState(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="zip" className="form-label">
            Zip Code
          </label>
          <input
            type="text"
            className="form-control"
            id="zip"
            value={zip}
            onChange={(e) => setZip(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Mobile No.
          </label>
          <input
            type="number"
            className="form-control"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="storage" className="form-label">
            Storage Capacity
          </label>
          <input
            type="number"
            className="form-control"
            id="storage"
            value={storage}
            onChange={(e) => setStorage(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="abP" className="form-label">
            AB+ Count
          </label>
          <input
            type="number"
            className="form-control"
            id="abP"
            value={abP}
            onChange={(e) => setAbP(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="abN" className="form-label">
            AB- Count
          </label>
          <input
            type="number"
            className="form-control"
            id="abN"
            value={abN}
            onChange={(e) => setAbN(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="oP" className="form-label">
            O+ Count
          </label>
          <input
            type="number"
            className="form-control"
            id="oP"
            value={oP}
            onChange={(e) => setOP(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="oN" className="form-label">
            O- Count
          </label>
          <input
            type="number"
            className="form-control"
            id="oN"
            value={oN}
            onChange={(e) => setON(e.target.value)}
          />
        </div>
        <Button onClick={regBB}  type="submit" className="btn btn-primary">
          Submit
        </Button>
      </form>
    </div>
  );
}
