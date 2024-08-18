import { timeAgo } from '@/utils/utils'
import { Link } from 'expo-router'
import { Dot, EllipsisVertical, Heart, MessageCircle, Share } from 'lucide-react-native'
import React, { useState } from 'react'
import { FlatList, Image, Pressable, Text, TextInput, TouchableOpacity, View } from 'react-native'
import UserCommentCard from './UserCommentCard'
import PostComment from './PostComment'

const PostCard = ({ post }: any) => {
    const [showComments, setShowComments] = useState(false)




    return (
        <View className='my-1 space-y-3 border rounded-lg p-2 border-gray-200 bg-white'>
            <View className='flex flex-row items-center border-b pb-2 border-gray-200'>
                <Link href={`/UserProfile/${post?.user?.userName}`} asChild>
                    <Pressable>
                        <Image className='w-10 h-10 rounded-full' style={{ resizeMode: 'cover' }} source={{ uri: post?.user?.image }} />
                    </Pressable>
                </Link>
                <View className='flex-1 ml-2 w-fit'>
                    <Link href={`/UserProfile/${post?.user?.userName}`}>

                        <View className='flex items-center flex-row'>
                            <Text className='font-medium'>
                                {post?.user?.name}
                            </Text>
                            <Dot className='w-2 h-2 text-gray-500' />
                            <Text className='text-gray-500 text-xs' numberOfLines={1}>
                                {timeAgo(post?.createdAt)}
                            </Text>
                        </View>
                    </Link>

                    <Text className='text-gray-500 text-xs' numberOfLines={1}>
                        {post?.user?.bio}
                    </Text>


                </View>

                <EllipsisVertical key={post?._id} strokeWidth={1.5} className='ml-2 w-4 h-4 text-gray-500' />

            </View>
            <Text className='text-sm' key={post?._id} numberOfLines={3}>{post?.description}</Text>
            {/* <TextMoreLess text={post?.description} linesToTruncate={3}/> */}
            <Image className='rounded-xl w-full aspect-[2/1] object-cover' style={{ resizeMode: 'cover' }} source={{ uri: post?.images[0] }} />

            <View className='flex flex-row justify-between items-center'>
                <TouchableOpacity className='flex flex-[1] w-full justify-start flex-row items-center gap-1'>
                    <Heart width={22} height={22} strokeWidth={1.5} className='text-pink-500' />
                    <Text className='text-pink-600 text-xs'>Like</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setShowComments(!showComments)} className='flex flex-[1] w-full justify-center flex-row items-center'>
                    <MessageCircle width={22} height={22} strokeWidth={1.5} className='text-gray-500' />
                    <Text className='text-gray-500 text-xs'>Comment</Text>
                </TouchableOpacity>

                <TouchableOpacity className='flex flex-[1] w-full justify-end flex-row items-center'>
                    <Share width={22} height={22} strokeWidth={1.5} className='text-gray-500' />
                    <Text className='text-gray-500 text-xs'>Share</Text>
                </TouchableOpacity>
            </View>


            {showComments &&
                <PostComment post={post} />
            }
        </View>
    )
}

export default PostCard