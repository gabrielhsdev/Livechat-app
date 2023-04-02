import { useState } from 'react';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase_connection/firebase_config_app'
import { getDatabase, ref, onValue, set, update } from "firebase/database";

export function getMessages(recipient_id, currentUser) {
    
    const db = getDatabase();
    let currenConvo = null;
    let recipientName = null;

    if(recipient_id != null && currentUser != null){

        let chatRef = [recipient_id, currentUser.uid].sort().join('_');
        //console.log(chatRef);

        //First we check if convo exists
        const getRecipientName = ref(db, 'users/' + recipient_id);
        onValue(getRecipientName, (snapshot) => {
            recipientName = snapshot.val();
        });
        recipientName = recipientName.username;

        //First we check if convo exists
        const starCountRef = ref(db, 'chats/' + chatRef);
        onValue(starCountRef, (snapshot) => {
          currenConvo = snapshot.val();
        });
        
        //Then we get the messages
        return [recipientName, chatRef, currenConvo];

    }
    return 'error recovering chat';
}