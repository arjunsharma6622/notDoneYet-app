import IconButton from '@/components/IconButton'
import { Link, router } from 'expo-router'
import { ArrowUpRight, MapPin } from 'lucide-react-native'
import React from 'react'
import { Text, View } from 'react-native'

const BasicDetails = ({ userData }: any) => {
    return (
        <View className='mt-4 px-3 py-2'>
            <Text className='text-gray-500 text-xs'>{userData?.role}</Text>
            <View className='space-y-[2px]'>
                <View className='flex flex-row justify-between'>
                    <View>
                        <Text className='font-bold text-2xl'>{userData?.name}</Text>
                        <View className='flex flex-row items-center space-x-2 my-1'>
                            <Text className='bg-gray-200 px-2 py-1 rounded-md font-normal text-xs'>{userData?.followers?.length} Followers</Text>
                            <Text className='bg-gray-200 px-2 py-1 rounded-md font-normal text-xs'>{userData?.following?.length} Following</Text>
                        </View>
                    </View>

                    <IconButton buttonType='edit' onPress={() => router.push({
                        pathname: '/dashboard/edit/BasicDetails',
                        params : { userData : JSON.stringify({
                            name : userData?.name,
                            bio : userData?.bio,
                            userName : userData?.userName,
                            email : userData?.email,
                            phone : userData?.phone,
                            address : userData?.address
                        }) }
                    })} />

                </View>

                <Text className='text-sm -mt-[2px]'>{userData?.bio}</Text>
                <View className='flex flex-row items-center space-x-1 mb-1'>
                    <MapPin size={14} strokeWidth={1.5} className='text-gray-500 inline' />
                    <Text className='text-gray-500 text-xs'>{userData?.address?.city}, {userData?.address?.state}, {userData?.address?.country}</Text>
                </View>
                <Link href={`/UserProfile/${userData?.userName}`} className='text-sm text-blue-600 flex items-center'>
                    <Text>View my Profile </Text>
                    <ArrowUpRight className='text-blue-600' size={16} />
                </Link>

            </View>
        </View>
    )
}

export default BasicDetails