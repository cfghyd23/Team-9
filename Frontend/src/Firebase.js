import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom'




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
export const auth = getAuth(app);

//auth.currentUser
const provider = new GoogleAuthProvider();


export const signInWithGoogle = () => {
   
   
  signInWithPopup(auth, provider)
    .then((result) => {
        let navigate = useNavigate();
        navigate('/register',{state:{id:1,uid:result.user.uid}});
    })
    .catch((error) => {
      console.log(error);
    });


};



export  const signOutG=()=>{

    
    signOut(auth).then(() => {
        console.log("jshud")
        
      }).catch((error) => {
        // An error happened.
      });
      
        }

