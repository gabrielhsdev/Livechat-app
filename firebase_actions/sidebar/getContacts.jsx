import { useState } from 'react';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase_connection/firebase_config_app'
import { getDatabase, ref, onValue } from "firebase/database";

export async function getContacts(){

    let contacts;

    const db = getDatabase();
    const starCountRef = ref(db, 'users/');
    onValue(starCountRef, (snapshot) => {
        contacts = snapshot.val();
    });

    return contacts;    
}