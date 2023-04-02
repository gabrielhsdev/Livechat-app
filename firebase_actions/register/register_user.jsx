import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, storage } from '../../firebase_connection/firebase_config_app'
import { ref, set, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { getDatabase, ref as refDb, set as setDb } from "firebase/database";

export function submitHandler(e, router) {
    e.preventDefault(); 
    let user_email = e.target.email.value;
    let user_name = e.target.username.value;
    let user_password = e.target.password.value;
    let file = e.target.picture.files[0];

    if(file == null){
        alert('Please add a profile picture');
        return;
    }

    createUserWithEmailAndPassword(auth, user_email, user_password)
    .then((userCredential) => { 
        // Signed in
        const user = userCredential.user; 

        // Push image to server
        let imgPath = 'images/user/profile_pictures/'+user.uid+'/profilePicture.jpg';
        const storageRef = ref(storage, imgPath);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on('state_changed', 
        (snapshot) => {
            //Do something during upload
          }, 
          (error) => {
            alert('Error uploading image');
          }, 
        () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                alert('User created successfully');
                writeUserData(user.uid, user_name, user_email, downloadURL);
                router.push('/Login_main');
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

function writeUserData(userId, name, email, imageUrl) {
    const db = getDatabase();
    setDb(refDb(db, 'users/' + userId), {
      username: name,
      email: email,
      profile_picture : imageUrl
    });
}
 