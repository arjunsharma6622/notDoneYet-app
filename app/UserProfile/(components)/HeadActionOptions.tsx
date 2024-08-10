import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import CustomButton from '@/components/CustomButton'
import { EllipsisVertical, Flame, Forward, Share2 } from 'lucide-react-native'

const HeadActionOptions = ({userData} : any) => {
  return (
    <View className='flex flex-row space-x-4 items-center'>
      <CustomButton containerStyles="w-fit rounded-full px-4 py-2" textStyles="text-white font-medium text-base" title="Follow" handlePress={() => console.log('Edit Profile')} />
        <TouchableOpacity className='flex flex-row items-center space-x-1 bg-orange-100 p-2 rounded-full'>
            <Text className='text-orange-600 text-base'>
                {userData?.profileLikes?.length}
            </Text>
            <Flame width={18} height={18} className='w-6 h-6 text-orange-600' />
        </TouchableOpacity>
        <TouchableOpacity className='flex flex-row items-center space-x-1 bg-blue-100 p-2 rounded-full'>
            <Share2 width={18} height={18} className='w-6 h-6 text-blue-600' />
        </TouchableOpacity>
        <TouchableOpacity className='flex flex-row items-center space-x-1 bg-gray-100 p-2 rounded-full'>
            <EllipsisVertical width={18} height={18} className='w-6 h-6 text-gray-600' />
        </TouchableOpacity>

    </View>
  )
}

export default HeadActionOptions