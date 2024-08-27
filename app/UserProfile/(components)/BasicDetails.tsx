import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { MapPin, MessageSquareText } from 'lucide-react-native'
import { Link } from 'expo-router'
import HeadActionOptions from './HeadActionOptions'

const BasicDetails = ({ userData }: any) => {
    return (
        <View className='mt-8 px-2 py-4'>
            <View className='mb-2'>
                <View className='flex flex-row items-center space-x-2'>
                    <Text className='font-bold text-2xl'>{userData?.name}</Text>
                    <View className='w-1 h-1 rounded-full bg-gray-500'></View>
                    <Text className='bg-gray-200 px-2 py-1 rounded-md font-normal text-sm'>{userData?.followers?.length} Followers</Text>
                </View>
                <Text className='text-xs text-gray-600'>{userData?.bio}</Text>
                { userData?.address &&
                <View className='flex flex-row items-center space-x-1 mt-1'>
                    <MapPin size={14} strokeWidth={1.5} className='text-gray-500 inline' />
                    <Text className='text-gray-500 text-xs'>{userData?.address?.city}, {userData?.address?.state}, {userData?.address?.country}</Text>
                </View>
}
            </View>
            <HeadActionOptions userData={userData} />
        </View>
    )
}

export default BasicDetails