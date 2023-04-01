import { useState, useEffect } from "react";
import { auth } from "../firebase_connection/firebase_config_app";
import { getDatabase, ref, onValue } from "firebase/database";
import router from "next/router";

export default function userSessionManager() {

    const [currentUser, setCurrentUser] = useState(null);
    const [userData, setUserData] = useState(null);
    const [dataLoaded, setDataLoaded] = useState(false);
    const [selectedContact, setSelectedContact] = useState(null);

    //Get main session stuff
    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged((user) => {
        setCurrentUser(user);
        if(user == null){
            router.push("/Login_main");
        }
      });
      return unsubscribe;
    }, []);

    //Get user info based on session, saved on realtime db
    if (currentUser != null && !dataLoaded) {

      const db = getDatabase();
      const starCountRef = ref(db, 'users/' + currentUser.uid);
      onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
        setUserData(data);
        setDataLoaded(true);
      });

    }
    //console.log(currentUser);
    return { currentUser, userData, selectedContact, setSelectedContact };
}