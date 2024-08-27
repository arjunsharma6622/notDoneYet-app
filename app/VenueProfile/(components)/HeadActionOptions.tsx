import FormButton from '@/components/ui/FormButton'
import { EllipsisVertical, Flame } from 'lucide-react-native'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

const HeadActionOptions = ({ venueData }: any) => {

  return (
    <View className='flex flex-row space-x-2 items-center'>
      <FormButton containerStyles='w-24' isLoading={false} title="Follow" handlePress={() => console.log('Edit Profile')} />
      <TouchableOpacity className='flex flex-row items-center bg-orange-100 p-2 space-x-1 rounded-full'>
        { venueData?.profileLikes?.length > 0 &&
        <Text className='text-orange-600 text-base'>
          {venueData?.profileLikes?.length}
        </Text>
}
        <Flame size={20} strokeWidth={1.5} className='w-6 h-6 text-orange-600' />
      </TouchableOpacity>
      <TouchableOpacity className='flex flex-row items-center bg-gray-100 p-2 rounded-full'>
        <EllipsisVertical size={20} strokeWidth={1.5} className='w-6 h-6 text-gray-600' />
      </TouchableOpacity>

    </View>
  )
}

export default HeadActionOptions