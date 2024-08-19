import Doctors from '@/components/doctors/Doctors'
import React from 'react'
import { Text, View } from 'react-native'

const doctors = () => {
  return (
    <View>
      <View className='bg-white py-1 border-b border-gray-200'>
        <Text className='text-xl font-bold text-center'>Doctors</Text>
      </View>
      <Doctors />
    </View>
  )
}

export default doctors