import { Heading, Text, Flex, Box } from '@chakra-ui/react'

export interface ContinentCardProps {
  img: string
  continentName: string
  description: string
}

const ContinentCard = ({
  img,
  continentName,
  description,
}: ContinentCardProps) => {
  return (
    <Box
      display='flex'
      alignItems='center'
      textAlign='center'
      justifyContent='center'
      pos='relative'
      height='250px'
      width='375px'
      bgColor='#000000f2'
      _before={{
        content: '""',
        bgImage: `url(${img})`,
        bgSize: 'cover',
        pos: 'absolute',
        inset: 0,
        opacity: 0.5,
      }}
    >
      <Flex flexDirection='column' position='absolute' p={3}>
        <Heading fontSize='2xl' color='gray.50' lineHeight='30px'>
          {continentName}
        </Heading>
        <Text fontSize='sm' mt='8px' color='gray.200'>
          {description}
        </Text>
      </Flex>
    </Box>
  )
}

export default ContinentCard
