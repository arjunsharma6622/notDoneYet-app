import { timeAgo } from '@/utils/utils'
import { Link } from 'expo-router'
import React from 'react'
import { Image, Text, View } from 'react-native'

const UserCommentCard = ({ comment }: { comment: any }) => {
    return (
        <View className='flex flex-row items-start space-x-2 p-1 w-full'>
            <Link href={`/UserProfile/${comment?.user?.userName}`} className='flex flex-[1]'>
                <View className='flex flex-row items-center'>
                    <Image className='w-8 h-8 rounded-full flex' style={{ resizeMode: 'cover' }} source={{ uri: comment?.user?.image }} />
                </View>
            </Link>
            <View className='flex flex-col flex-[10] bg-gray-100 p-2 rounded-md rounded-tl-none mt-2'>
                <View className='flex items-center justify-between flex-row'>
                    <Text className='text-xs font-medium'>{comment?.user?.name}</Text>
                    <Text className='text-xs text-gray-500'>{timeAgo(comment.createdAt)}</Text>
                </View>
                <View className='flex'>
                    <Text className='text-xs flex'>{comment?.text}</Text>
                </View>
            </View>
        </View>
    )
}

export default UserCommentCard