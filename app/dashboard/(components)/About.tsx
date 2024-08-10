import { View, Text } from 'react-native'
import React from 'react'
import IconButton from '@/components/IconButton'
import { router } from 'expo-router'

const About = ({userData} : any) => {
  return (
    <View className='px-3 py-2 my-2 border-t border-gray-200'>
      <View className='flex flex-row justify-between items-center mb-2'>
      <Text className='text-xl font-semibold'>About</Text>
      <IconButton buttonType='edit' onPress={() => router.push({pathname: '/dashboard/edit/About', params : { userData : JSON.stringify({about : userData?.about}) }})}/>
      </View>
      <Text numberOfLines={4} className='text-sm'>{userData?.about}</Text>
    </View>
  )
}

export default About