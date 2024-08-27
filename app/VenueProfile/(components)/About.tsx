import { View, Text } from 'react-native'
import React from 'react'

const About = ({venueData} : any) => {
  return (
    <View className='px-2 py-2 my-2 border-t border-gray-200'>
        <Text className='text-lg font-semibold'>About</Text>
      <Text numberOfLines={4} className='text-sm'>{venueData?.description}</Text>
    </View>
  )
}

export default About