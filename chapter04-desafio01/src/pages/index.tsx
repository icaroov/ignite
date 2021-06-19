import Head from 'next/head'
import { Flex, Box, Divider, HStack } from '@chakra-ui/react'

import Header from '../components/Header'
import Banner from '../components/Banner'
import TravelList from '../components/TravelList'
import Slide from '../components/Slide'

import { items } from '../utils/mockData'

export default function Home() {
  return (
    <Flex direction='column' height='100vh'>
      <Head>
        <title>Home | worldtrip</title>
      </Head>

      <Header />

      <Flex maxWidth={1480} w='100%' mx='auto'>
        <Box as='main' flex='1'>
          <Banner />
          <TravelList />

          <HStack justifyContent='center'>
            <Divider my='36px' maxW='150px' color='blackAlpha.900' />
          </HStack>

          <Flex
            as='section'
            justifyContent='center'
            textAlign='center'
            mb='20px'
          >
            Vamos nessa? <br /> Então escolha seu continente
          </Flex>

          <Slide items={items} />
        </Box>
      </Flex>
    </Flex>
  )
}
