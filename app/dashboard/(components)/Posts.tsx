import IconButton from '@/components/IconButton'
import PostCard from '@/components/PostCard'
import PostCardSkeleton from '@/components/skeletons/PostCard/PostCardSkeleton'
import axios from 'axios'
import { Scroll } from 'lucide-react-native'
import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import Toast from 'react-native-toast-message'


const Posts = () => {
  const [posts, setPosts] = useState([])
  const [isFetching, setIsFetching] = useState(true)

  const fetchPosts = async () => {
    try {
      setIsFetching(true)
      const response = await axios.get('/posts/getPosts/authenticated')
      const postsData = response?.data?.data
      setPosts(postsData)
      setIsFetching(false)
    }
    catch (error: any) {
      setIsFetching(false)
      Toast.show({
        type: 'error',
        text1: error.response.data.message || "Error fetching posts"
      })
      console.error('Error fetching posts:', error.response.data)
    }
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  const colorMode = 'light';


  return (
    <View className='px-3 py-2 my-2 border-t border-gray-200'>
      <View className='flex flex-row justify-between items-center mb-2'>
      <Text className='text-xl font-semibold'>Posts</Text>
      <IconButton buttonType='add' onPress={() => {}}/>
      </View>
      {isFetching ?
        <View className='flex flex-col space-y-2'>
          <PostCardSkeleton colorMode={colorMode} />
          <PostCardSkeleton colorMode={colorMode} />
        </View>
        : posts.length === 0 ?
          <Text className='text-gray-500 text-center'>No posts yet</Text>
          :
          <View>
            {posts?.map((post: any) => (
              <PostCard key={post._id} post={post} />
            ))}
          </View>
      }
    </View>
  )
}

export default Posts