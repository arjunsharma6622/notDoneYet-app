import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { MapPin, MessageSquareText } from 'lucide-react-native'
import { Link } from 'expo-router'
import HeadActionOptions from './HeadActionOptions'

const BasicDetails = ({ venueData }: any) => {
    return (
        <View className='px-2 py-4'>
            <View className='mb-2'>
                <View className='flex flex-row items-center space-x-2'>
                    <Text className='font-bold text-2xl'>{venueData?.name}</Text>
                    <View className='w-1 h-1 rounded-full bg-gray-500'></View>
                    <Text className='bg-gray-200 px-2 py-1 rounded-md font-normal text-sm'>{venueData?.followers?.length} Followers</Text>
                </View>
            </View>
            <HeadActionOptions venueData={venueData} />
        </View>
    )
}

export default BasicDetails