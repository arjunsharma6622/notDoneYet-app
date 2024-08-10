import { View, Text } from 'react-native'
import React from 'react'

const Skills = ({userData} : any) => {
  return (
    <View className='px-2 py-2 border-t border-gray-200'>
        <Text className='text-lg font-semibold'>Skills</Text>
        <View className='flex flex-row flex-wrap gap-2 gap-y-2'>
        {userData?.sports?.map((skill : string, index : number) => (
            <Text key={index} className='text-sm bg-gray-200 px-3 py-2 rounded-full'>{skill}</Text>
        ))}
        </View>
    </View>
  )
}

export default Skills