import { View, Text } from 'react-native'
import React from 'react'
import PostCard from '@/components/PostCard'

const Posts = ({userPosts} : any) => {
  return (
    <View className='px-2 py-2 my-2 border-t border-gray-200'>
        <Text className='text-lg font-semibold'>Posts</Text>
      <View>
        {userPosts?.map((post : any) => (
          <PostCard key={post._id} post={post}/>
        ))}
      </View>
    </View>
  )
}

export default Posts