import { View, Text, Image } from 'react-native'
import React from 'react'

const ProfileHeader = ({userData} : any) => {
  return (
    <View>
    <Image source={{ uri: userData?.backgroundImg }} className='w-full aspect-[4/1]' />
    <View className='absolute -bottom-10 left-8 rounded-full border-4 border-white w-24 h-24'>
      <Image source={{ uri: userData?.image }} className='w-full h-full rounded-full' />
    </View>
  </View>
  )
}

export default ProfileHeader