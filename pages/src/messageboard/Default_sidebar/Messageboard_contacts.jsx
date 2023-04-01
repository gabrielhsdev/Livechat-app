import React, { useContext } from 'react'
import { useState, useEffect } from 'react';
import { VStack, Box, StackDivider, Center } from '@chakra-ui/react'
import Messageboard_user from './Messageboard_user'
import {getContacts} from '../../../../firebase_actions/sidebar/getContacts'
import { UserContext } from '../../../UserContext'

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function Messageboard_contacts() {
  
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { selectedContact, setSelectedContact } = useContext(UserContext);
  
  function handleSelectedContactUpdate(message) {
    // console.log('selectedContact: ', message);
    setSelectedContact(message);
  }

  useEffect(() => {
    const fetchContacts = async () => {
      let contacts = await getContacts();
      while (!contacts) {
        await new Promise((resolve) => setTimeout(resolve, 1000)); // wait for 1 second
        contacts = await getContacts();
      }
      setContacts(contacts);
      setLoading(false);
    };
    fetchContacts();
  }, []);
        
  return (
    <Box>
        <VStack spacing={1} align='stretch' >
          {Object.keys(contacts).map((message, index) => (
            <Box onClick={() => handleSelectedContactUpdate(message)}>
              <Messageboard_user
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