import { getDatabase, ref, onValue, update, on } from 'firebase/database';

export function getMessages(recipient_id, currentUser, setChat) {
    
    const db = getDatabase();
    let currentConvo = null;
    let recipientName = null;

    if (recipient_id != null && currentUser != null) {

        let chatRef = [recipient_id, currentUser.uid].sort().join('_');

        //Get recipient name
        const getRecipientName = ref(db, 'users/' + recipient_id);
        onValue(getRecipientName, (snapshot) => {
            recipientName = snapshot.val().username;
        });

        //Get messages
        const chatRefPath = 'chats/' + chatRef;
        const starCountRef = ref(db, chatRefPath);
        onValue(starCountRef, (snapshot) => {
            currentConvo = snapshot.val();
            setChat([recipientName, chatRef, currentConvo]);
        });
        
        //Then we get the messages
        return [recipientName, chatRef, currentConvo];
    }

    return 'error recovering chat';
}