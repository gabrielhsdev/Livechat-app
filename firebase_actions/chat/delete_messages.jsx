import { getDatabase, ref, onValue, get, on, set } from 'firebase/database';

export function deleteMessages(chatReference){

    if(chatReference != null && chatReference.trim() != ""){
        const db = getDatabase();
        let currentConvo = null;
        const chatRefPath = 'chats/' + chatReference;
        const chatRef = ref(db, chatRefPath);

        get(chatRef).then((snapshot) => {
            if(snapshot.val() != null){
                set(chatRef, null)
                .then(() => {
                    console.log("Data removed successfully!");
                })
                .catch((error) => {
                    console.error("Error removing data:", error);
                });
            }
        });
    }

}