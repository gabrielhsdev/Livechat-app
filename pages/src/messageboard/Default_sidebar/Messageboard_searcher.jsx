import React, {useContext} from 'react'
import { Center, Input } from '@chakra-ui/react'
import { UserContext } from '../../../context/UserContext'

function Messageboard_searcher() {

  const { setContactSearch, contactSearch } = useContext(UserContext);

  const handleSearchInputChange = (event) => {

    if(event.target.value === '') setContactSearch(null);
    setContactSearch(event.target.value);
  
  };

  return (
    <Center w='100%' h='10%' mt={3}>
         <Input w='100%' variant='filled' placeholder='Search' size='sm' onChange={handleSearchInputChange} />
    </Center>
  )
}

export default Messageboard_searcher