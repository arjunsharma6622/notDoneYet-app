import { View, Text } from 'react-native'
import React from 'react'
import IconButton from '@/components/IconButton'
import { router } from 'expo-router'

const Skills = ({userData} : any) => {
  return (
    <View className='px-3 py-2 border-t border-gray-200'>
      <View className='flex flex-row justify-between items-center mb-2'>
      <Text className='text-xl font-semibold'>{userData?.role === 'athlete' ? 'Sports' : 'Skills'}</Text>
      <IconButton buttonType='edit' onPress={() => router.push({
        pathname: '/dashboard/edit/Skills',
        params : { userData : JSON.stringify({skills : userData?.skills}) }
      })}/>
      </View>
      <View className='flex flex-row flex-wrap gap-2 gap-y-2'>
        {userData?.skills?.map((skill : string, index : number) => (
            <Text key={index} className='text-xs bg-gray-200 px-3 py-2 rounded-full'>{skill}</Text>
        ))}
        </View>
    </View>
  )
}

export default Skills