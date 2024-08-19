import NetworkUsers from '@/components/network/NetworkUsers'
import React from 'react'
import { Text, View } from 'react-native'

const network = () => {

  return (
    <View className=''>
      <View className='bg-white py-1 border-b border-gray-200'>
        <Text className='text-xl font-bold text-center'>Network</Text>
      </View>
      <NetworkUsers />
    </View>
  )
}

export default network