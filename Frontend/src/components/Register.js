import React, { useEffect } from 'react'
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
import { signInWithGoogle } from '../Firebase';

  

export default function Register() {

    const location = useLocation();
    let nav = useNavigate();
    useEffect(()=>{
        console.log(location.state?.ui)
        if(location.state?.uid=== undefined){
          
          nav('/login');
        }
    })

   
    
    

  
  return (
    <div>


        {/*location.state?.uid8*/}
        {console.log(location.state?.uid)}


    <MDBContainer style={{backgroundColor: 'hsl(0, 0%, 96%)',height:'100%'}} fluid className=''>

<MDBRow>

  <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>

    <h1 className="my-5 display-3 fw-bold ls-tight px-3">
      The best offer <br />
      <span className="text-primary">for your business</span>
    </h1>

    <p className='px-3' style={{color: 'hsl(217, 10%, 50.8%)'}}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Eveniet, itaque accusantium odio, soluta, corrupti aliquam
      quibusdam tempora at cupiditate quis eum maiores libero
      veritatis? Dicta facilis sint aliquid ipsum atque?
    </p>

  </MDBCol>

  <MDBCol md='6'>

    <MDBCard className='my-5'>
      <MDBCardBody className='p-5'>

        <MDBRow>
          <MDBCol col='6'>
            <MDBInput wrapperClass='mb-4' label='First name' id='form1' type='text'/>
          </MDBCol>

          <MDBCol col='6'>
            <MDBInput wrapperClass='mb-4' label='Last name' id='form1' type='text'/>
          </MDBCol>

         
        </MDBRow>
        <MDBRow>
            <MDBRow>

           <MDBCol>

        
           <MDBInput wrapperClass='mb-4' label='Age' id='form1' type='number' enterKeyHint={18}/>
          
    <br/>
    </MDBCol>
    
<MDBCol>
            
          
    <MDBDropdown>
      <MDBDropdownToggle>Select Blood Group</MDBDropdownToggle>
      <MDBDropdownMenu>
        <MDBDropdownItem link>O+</MDBDropdownItem>
        <MDBDropdownItem link>O-</MDBDropdownItem>
        <MDBDropdownItem link>AB+</MDBDropdownItem>
        <MDBDropdownItem link>AB-</MDBDropdownItem>
      </MDBDropdownMenu>
    </MDBDropdown>
    <br/>
    </MDBCol>
    <br/>
    </MDBRow>
   <><p>Address Details</p></>
    <MDBInput wrapperClass='mb-4' label='Zipcode' id='form1' type='zipcode'/>
        <MDBInput wrapperClass='mb-4' label='Address' id='form1' type='address'/>
        <MDBInput wrapperClass='mb-4' label='Contact' id='form1' type='phone'/>
        
         </MDBRow>
      
        <div className='d-flex justify-content-center mb-4'>
          <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
        </div>

        <MDBBtn className='w-100 mb-4' size='md'> Register</MDBBtn>

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
