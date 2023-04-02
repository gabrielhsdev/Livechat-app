import { useState, useContext } from 'react';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase_connection/firebase_config_app'
import { UserContext } from '../../pages/UserContext';
import { getDatabase, ref, onValue, get } from "firebase/database";

export async function getContacts(contactSearchString, currentUser){
    let contacts;
    let currentUserRef = currentUser.uid;

    const db = getDatabase();

    const starCountRef = ref(db, 'users/');
    const snapshot = await get(starCountRef);
    contacts = snapshot.val();
    delete contacts[currentUserRef];
    
    const orderedContacts = Object.entries(contacts)
    .sort((a, b) => {
      const aScore = a[1].username.includes(contactSearchString) ? 1 : 0;
      const bScore = b[1].username.includes(contactSearchString) ? 1 : 0;
      return bScore - aScore;
    })
    .map(([key, value]) => ({ [key]: value }));
    console.log(Object.assign({}, ...orderedContacts));
    
    return Object.assign({}, ...orderedContacts);
}
