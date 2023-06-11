import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithPopup, signInWithRedirect, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
  MDBIcon
}
from 'mdb-react-ui-kit';
import axios from 'axios';


export default function Login() {


  
    let navigate = useNavigate();

    const firebaseConfig = {
        apiKey: "",
        authDomain: "blood-warriers.firebaseapp.com",
        projectId: "blood-warriers",
        storageBucket: "blood-warriers.appspot.com",
        messagingSenderId: "1085238757872",
        appId: "1:1085238757872:web:b398e45febc1985e6db535",
        measurementId: "G-130TTKY43R"
    };
    
    const app = initializeApp(firebaseConfig);
     const auth = getAuth(app);
    
    //auth.currentUser
    const provider = new GoogleAuthProvider();

    
    
     const signInWithGoogle = () => {
       
       
      signInWithPopup(auth, provider)
        .then((result) => {
          console.log(result);
          if(result.user.uid==="ttZWxqgzAwhtU2zFnf8SyiykMcb2"){
          
            localStorage.setItem("uType",2);
            navigate('/adminHome');
     
          }
          else  if(result.user.uid=="5KFoXSirQLaeZyOUQl42VrU23OK2"){
          
            localStorage.setItem("uType",1);
            localStorage.setItem("hUID",1);
            navigate('/hosAdmin');
     
          }
           else{
            getUser();
            navigate('/register',{state:{id:1,uid:auth.currentUser.uid}});
  
           }
          // navigate('/register',{state:{id:1,uid:auth.currentUser.uid}});
           
            })
        .catch((error) => {
          console.log(error);
        });
    
    
    };
    
    const getUser=()=>{
    
        
const user = auth.currentUser;
        
        if(user){

          axios.post("http://localhost:5002/api/login", {
            uid: auth.currentUser.uid,
        
      
           },
           {headers:{
      
           
            "Access-Control-Allow-Origin":"*",
          } }
           )
           .then(function (response) {
             console.log("shcgsahj");
             if(response.status ==200){
              navigate("/home");
             }
             else  if(user.uid=="ttZWxqgzAwhtU2zFnf8SyiykMcb2"){
          
              localStorage.setItem("uType",2);
              navigate('/adminHome');
       
            }
            else  if(user.uid=="5KFoXSirQLaeZyOUQl42VrU23OK2"){
          
              localStorage.setItem("uType",1);
              localStorage.setItem("hUID",1);
              navigate('/hosAdmin');
       
            }
             else{
              navigate('/register',{state:{id:1,uid:auth.currentUser.uid}});
    
             }
           })
           .catch(function (error) {
             console.log(error);
           });

    }
    }
    
    useEffect(()=>{
       
    });
      const signOutG=()=>{
    
        
        signOut(auth).then(() => {
            console.log("jshud")
            
          }).catch((error) => {
            // An error happened.
          });
          
            }
    
    

    
//console.log(auth.currentUser)

  return (


    <MDBContainer style={{backgroundColor: 'hsl(0, 0%, 96%)',height:'100%'}} fluid className=''>

      <MDBRow>

        <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>

          <h1 className="my-5 display-3 fw-bold ls-tight px-3">
            Welcome Back <br />
            <span className="text-primary">to Blood Donor</span>
          </h1>

          <p className='px-3' style={{color: 'hsl(217, 10%, 50.8%)'}}>
          Join us in saving lives through blood donation

Every drop of blood makes a difference
          </p>

        </MDBCol>

        <MDBCol md='6'>

          <MDBCard className='my-5'>
            <MDBCardBody className='p-5'>

             

              <MDBInput wrapperClass='mb-4' label='Email' id='form1' type='email'/>
              <MDBInput wrapperClass='mb-4' label='Password' id='form1' type='password'/>

              <div className='d-flex justify-content-center mb-4'>
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
              </div>

              <MDBBtn className='w-100 mb-4' size='md'>sign up</MDBBtn>

              <div className="text-center">

                <p>or sign up with:</p>

                <MDBBtn onClick={signInWithGoogle} tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
            <MDBIcon fab icon='google' size="sm"/>
          </MDBBtn>

              </div>

            </MDBCardBody>
          </MDBCard>

        </MDBCol>

      </MDBRow>

    </MDBContainer>
  )
}






