import Venues from '@/components/venue/Venues'
import React from 'react'
import { Text, View } from 'react-native'

const venues = () => {
  return (
    <View>
      <View className='bg-white py-1 border-b border-gray-200'>
        <Text className='text-xl font-bold text-center'>Venues</Text>
      </View>
      <Venues />
    </View>
  )
}

export default venues