import { View, Text } from 'react-native'
import React from 'react'
import IconButton from '@/components/IconButton'
import { router } from 'expo-router'

const Experience = ({ userData }: any) => {
  return (
    <View className='px-3 py-2 my-2 border-t border-gray-200'>
      <View className='flex flex-row justify-between items-center mb-2'>
        <Text className='text-xl font-semibold'>Experience</Text>
        <View className='flex flex-row items-center'>
          <IconButton styling='mr-4' buttonType='add' onPress={() => { }} />
          <IconButton buttonType='edit' onPress={() => router.push({pathname: '/dashboard/edit/Experience', params : { userData : JSON.stringify({experience : userData?.experience}) }})} />
        </View>
      </View>
    </View>
  )
}

export default Experience;