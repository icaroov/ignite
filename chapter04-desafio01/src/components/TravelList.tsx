import { List, ListIcon, ListItem, Box, Text } from '@chakra-ui/react'
import { MdCheckCircle } from 'react-icons/md'

const descriptions = [
  'Vida noturna',
  'Praia',
  'Moderno',
  'Clássico',
  'e mais...',
]

const TravelList = () => {
  return (
    <Box as='section' px='50px' pt='36px'>
      <List spacing={3}>
        {descriptions.map((description, index) => (
          <ListItem key={index} display='flex' alignItems='center'>
            <ListIcon as={MdCheckCircle} color='yellow.200' />
            <Text fontSize='md' fontWeight='bold'>
              {description}
            </Text>
          </ListItem>
        ))}
      </List>
    </Box>
  )
}

export default TravelList
