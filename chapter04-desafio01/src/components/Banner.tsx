import Image from 'next/image'
import { Heading, Text, Flex, Box, Stack } from '@chakra-ui/react'

import banner from '/public/banner-bg.png'

const Banner = () => {
  return (
    <Stack as="section">
      <Box position='relative'>
        <Image src={banner} alt='Banner' width='375' height='163' />
      </Box>

      <Flex as='section' flexDirection='column' position='absolute' p={3}>
        <Heading fontSize='lg' color='gray.50' lineHeight='30px'>
          5 Continentes, <br /> infinitas possbilidades.
        </Heading>
        <Text fontSize='sm' mt='8px' color='gray.300'>
          Chegou a hora de tirar do papel a viagem que você sempre sonhou.
        </Text>
      </Flex>
    </Stack>
  )
}

export default Banner
