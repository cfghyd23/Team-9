import React, { useEffect,useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBCheckbox, MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem
    
  }
  from 'mdb-react-ui-kit';
  import DropdownButton from 'react-bootstrap/DropdownButton';
  import Dropdown from 'react-bootstrap/Dropdown'
  import axios from 'axios';

export default function Register() {



  
 
    const location = useLocation();
    let nav = useNavigate();
    useEffect(()=>{
        console.log()
        if(location.state?.uid=== undefined){
          
          nav('/login');
        }
    })

   
 

  const [fname,setFName] = useState("");
  const [lname,setLName] = useState("");
  const [age,setAge] = useState(18);
  const [bloodType,setBloodType] = useState("Select Blood Group");
  const [contact,setContact] = useState();
  const [address,setAddress] = useState("");
  const [zipcode,setZipcode] = useState();
  
  
  
    
  const printData = ()=>{
    console.log(document.getElementById("bllodGroupDD")?.value)
     axios.post("http://localhost:5002/api/register", {
      uid:location.state?.uid,
      fname,
      lname,
      age,
      bloodType,
      contact,
      address,
      zipcode,


     
     

     },
     {headers:{

     
      "Access-Control-Allow-Origin":"*",
    } }
     )
     .then(function (response) {
       console.log("shcgsahj");
       if(response.status ==201){
        nav("/home");
       }
     })
     .catch(function (error) {
       console.log(error);
     });
  }
    

  
  return (
    <div>


        {/*location.state?.uid8*/}
        {console.log(location.state?.uid)}
       

    <MDBContainer style={{backgroundColor: 'hsl(0, 0%, 96%)',height:'100%'}} fluid className=''>

<MDBRow>

  <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>

    <h1 className="my-5 display-3 fw-bold ls-tight px-3">
    Welcome to 
 <br />
      <span className="text-primary">Blood Connect</span>
    </h1>

    <p className='px-3' style={{color: 'hsl(217, 10%, 50.8%)'}}>
    Join us in saving lives through blood donation

Every drop of blood makes a difference
    </p>

  </MDBCol>

  <MDBCol md='6'>

    <MDBCard className='my-5'>
      <MDBCardBody className='p-5'>

        <MDBRow>
          <MDBCol col='6'>
            <MDBInput wrapperClass='mb-4' label='First name' id='form1' type='text' value={fname} onChange={event=>(setFName(event.target.value))} />
          </MDBCol>

          <MDBCol col='6'>
            <MDBInput wrapperClass='mb-4' label='Last name' id='form1' type='text' value={lname} onChange={event => setLName(event.target.value)}/>
          </MDBCol>

         
        </MDBRow>
        <MDBRow>
            <MDBRow>

           <MDBCol>

        
           <MDBInput wrapperClass='mb-4' label='Age' id='form1' type='number' value={age} onChange={event => setAge(event.target.value)}/>
          
    <br/>
    </MDBCol>
    
<MDBCol>
            
          
<DropdownButton
      alignRight
      value={bloodType}
      
      title={bloodType}
      id="dropdown-menu-align-right"
    
        >
              <Dropdown.Item eventKey="AB+"  onClick={e=>setBloodType("AB+")}>AB+</Dropdown.Item>
              <Dropdown.Item eventKey="AB-"  onClick={e=>setBloodType("AB-")}>AB-</Dropdown.Item>
              <Dropdown.Item eventKey="O-"  onClick={e=>setBloodType("O+")}>O-</Dropdown.Item>
              <Dropdown.Item eventKey="O+"  onClick={e=>setBloodType("O-")}>O+</Dropdown.Item>
             
             
      </DropdownButton>
    <br/>
    </MDBCol>
    <br/>
    </MDBRow>
   <><p>Address Details</p></>
    <MDBInput wrapperClass='mb-4' label='Zipcode' id='form1' type='zipcode' value={zipcode} onChange={event => (setZipcode(event.target.value))}/>
        <MDBInput wrapperClass='mb-4' label='Address' id='form1' type='address' value={address} onChange={event => (setAddress(event.target.value))}/>
        <MDBInput wrapperClass='mb-4' label='Contact' id='form1' type='phone' value={contact} onChange={event => setContact(event.target.value)}/>
        
         </MDBRow>
      
        <div className='d-flex justify-content-center mb-4'>
          <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
        </div>

        <MDBBtn className='w-100 mb-4' size='md' onClick={printData}> Register</MDBBtn>

        <div className="text-center">

         

          
          

         

         

        </div>

      </MDBCardBody>
    </MDBCard>

  </MDBCol>

</MDBRow>

</MDBContainer>
      
    </div>
  )
}
