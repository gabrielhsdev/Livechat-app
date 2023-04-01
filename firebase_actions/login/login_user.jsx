import { useState } from 'react';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase_connection/firebase_config_app'

export function loginHandler(e, router){
    e.preventDefault();
    let email = e.target.email.value;
    let password = e.target.password.value;
    
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      router.push('/Messageboard');
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode === "auth/user-not-found") {
          alert("User not found");
          // Display an error message to the user or redirect to a different page
        } else {
          console.error(errorMessage);
        }
      });

}