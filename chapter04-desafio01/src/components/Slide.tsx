import { Box } from '@chakra-ui/react'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/swiper.min.css'
import 'swiper/components/navigation/navigation.min.css'
import 'swiper/components/pagination/pagination.min.css'

import ContinentCard, { ContinentCardProps } from './ContinentCard'

import SwiperCore, { Navigation, Pagination } from 'swiper/core'

SwiperCore.use([Navigation])
SwiperCore.use([Pagination])

interface SlideProps {
  items: ContinentCardProps[]
}

const Slide = ({ items }: SlideProps) => {
  return (
    <Box maxW='100vw' as='section' mb='10px'>
      <Swiper navigation={true} pagination={true}>
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            <ContinentCard {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  )
}

export default Slide
