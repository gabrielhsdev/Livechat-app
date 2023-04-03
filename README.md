<h2>Web chat app.</h2>

Check a 1 minute video here about the app here: https://www.youtube.com/watch?v=gmD8x76sXa0&ab_channel=ElementalFlow21

The app is now deployed on vecel, you can check it out here: https://livechat-jjoelqdha-gabrielhsdev.vercel.app/

The Live chat web app is a real-time communication platform built using React.js, Next.js, and Chakra UI. It utilizes Firebase Realtime Database to store and manage the chat messages exchanged between users. The app also employs Firebase OAuth for user authentication and authorization, ensuring secure access to the chat platform. With this web app, users can seamlessly exchange messages with each other in real-time, making it an ideal platform for online collaboration and communication.

Mobile-friendly design with responsive layout for seamless chat experience on any device !

<b>Live chat web app using</b> 

        -React.js 
        
        -Next.Js
        
        -Chrakra UI 
        
        -Firebase Realtime DB
        
        -Firebase OAuth
        
        -Vecel for deployment
        
Overall layout:
    
![First image](https://github.com/gabrielhsdev/Livechat-app/blob/main/ui.png?raw=true)

Mobile friendly layout:

![Image_2](https://github.com/gabrielhsdev/Livechat-app/blob/main/images/img_2.png?raw=true)

<h3>How to run ?</h3>
In order for this app to run locally, a new firebase project with realtime database is nescessary, after installing the NPM nescessary modules do the following:


1-) Create a new firebase project and add the firebase config inside a new folder created on the root called \firebase_connection

2-) Inside the folder, paste the following code with your own credentials, or use envoirment variables for that matter

```
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: "",
};

// Initialize Firebase
export const app  = initializeApp(firebaseConfig);
export const auth = getAuth();

// Create a root reference, for images
export const storage = getStorage();

//Get database
const database = getDatabase(app);
```

After that evererything should be good to go ! Create a new user by signing up and start chatting !
