import Image from 'next/image'
import { VStack, Heading } from '@chakra-ui/react'

import logo from '/public/logo.svg'

const Header = () => {
  return (
    <VStack my={2} as='header'>
      <Heading display='flex'>
        <Image src={logo} alt='World Trip Logo' width='200' height='40' />
      </Heading>
    </VStack>
  )
}

export default Header
