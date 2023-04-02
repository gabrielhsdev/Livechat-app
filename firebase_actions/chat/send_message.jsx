import { useState } from 'react';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase_connection/firebase_config_app'
import { getDatabase, ref, onValue, set, update } from "firebase/database";

export function sendMessage(chatReference, messageContent, userId) {

    //console.log('message sent');
    let randomId = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    if(chatReference != null && messageContent != null && userId != null && messageContent.trim() != ""){
        const db = getDatabase();
        set(ref(db, 'chats/' + chatReference[1] + '/' + randomId), {
            from: userId,
            message: messageContent,
            timestamp: Date.now()
        });
    }

}