import React from 'react'
import { ReactPhotoCollage } from 'react-photo-collage'
import Abigail from '../../assets/Abigail.jpg'
import one from '../../assets/one.jpg'
import two from '../../assets/two.jpeg'
import three from '../../assets/three.jpg'
import four from '../../assets/four.jpeg'
import five from '../../assets/five.jpeg'
import six from '../../assets/six.jpeg'
import seven from '../../assets/seven.jpeg'
import eight from '../../assets/eight.png'
import nine from '../../assets/nine.jpeg'
import ten from '../../assets/ten.jpg'

const setting = {
  width: '100%',
  height: ['250px', '250px', '250px'],
  layout: [4, 3, 4],
  photos: [
    { source: one },
    { source: two },
    { source: three },
    { source: four },

    { source: eight },
    { source: nine },
    { source: ten },

    { source: Abigail },
    { source: five },
    { source: six },
    { source: seven },
  ],
}

export const PhotoCollage = () => {
  return (
    <>
      <ReactPhotoCollage {...setting} />
    </>
  )
}
