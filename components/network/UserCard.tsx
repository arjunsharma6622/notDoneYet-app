import { Link } from 'expo-router'
import React from 'react'
import { Image, Pressable, Text, View } from 'react-native'

const UserCard = ({ user }: { user: any }) => {

    return (
        <Link href={`/UserProfile/${user?.userName}`} asChild className='w-full rounded-xl'>
            <Pressable className='w-full'>
                <View className='rounded-xl my-1 border relative mx-auto bg-white border-gray-200 w-full flex flex-row justify-start space-x-4 items-center px-4 py-2'>
                    <Image source={{ uri: user?.image }} className='w-12 h-12 rounded-full' />
                    <View className=''>
                        <Text className='text-black text-start font-semibold text-lg'>{user?.name}</Text>
                        <Text numberOfLines={1} className='text-black text-xs text-start'>{user?.bio}</Text>
                    </View>
                </View>
            </Pressable>
        </Link>
    )
}

export default UserCard