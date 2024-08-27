import React from 'react'
import { Image, View } from 'react-native'

const ProfileHeader = ({ venueData }: any) => {
  return (
    <View>
      <View className='rounded-full border-4 border-white'>
        <Image className='w-full aspect-[3/1] rounded-xl' source={{ uri: venueData?.images[0] }} />
      </View>
    </View>
  )
}

export default ProfileHeader