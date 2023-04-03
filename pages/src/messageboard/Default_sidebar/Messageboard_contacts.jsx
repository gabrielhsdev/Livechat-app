import React, { useContext } from 'react'
import { useState, useEffect } from 'react';
import { VStack, Box, StackDivider, Center } from '@chakra-ui/react'
import Messageboard_user from './Messageboard_user'
import {getContacts} from '../../../../firebase_actions/sidebar/getContacts'
import { UserContext } from '../../../context/UserContext'

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function Messageboard_contacts() {
  
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { setSelectedContact, contactSearch, currentUser} = useContext(UserContext);
  
  function handleSelectedContactUpdate(message) {
    setSelectedContact(message);1
  }

  useEffect(() => {
    const fetchContacts = async () => {
      let contacts = null;
      while (!contacts) {
        await new Promise((resolve) => setTimeout(resolve, 100)); // wait for 100 milliseconds
        contacts = await getContacts(contactSearch, currentUser);
      }
      setContacts(contacts);
      setLoading(false);
    };
    fetchContacts();
  }, [contactSearch, currentUser]);
        
  return (
    <Box>
        <VStack spacing={1} align='stretch' >
          {Object.keys(contacts).map((message, index) => (
            <Box onClick={() => handleSelectedContactUpdate(message)} key={message}>
              <Messageboard_user
                key={message}
                username={capitalizeFirstLetter(contacts[message].username)}
                messageTxt='{message}'
                imgSource = {contacts[message].profile_picture}
                onClick={() => console.log('clicked')}
              />
            </Box>
          ))}
        </VStack>
    </Box>
  )
}

export default Messageboard_contacts