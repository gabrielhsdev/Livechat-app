import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, storage } from '../../firebase_connection/firebase_config_app'
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

export function submitHandler(e) {
    e.preventDefault(); 
    let userEmail = e.target.username.value;
    let userPassword = e.target.password.value;
    let file = e.target.picture.files[0];

    if(file == null){
        alert('Please add a profile picture');
        return;
    }

    createUserWithEmailAndPassword(auth, userEmail, userPassword)
    .then((userCredential) => { 
        // Signed in
        const user = userCredential.user; 

        // Push image to server
        const storageRef = ref(storage, 'images/'+userEmail+'.jpg');
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on('state_changed', 
        (error) => { 
            //console.log(error); 
        }, 
        () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                //console.log('File available at', downloadURL);
            });
        }
        );
        //image push end

    }).catch((error) => { 
        const errorCode = error.code; 
        const errorMessage = error.message; 
        alert(errorCode); 
    });
}
 