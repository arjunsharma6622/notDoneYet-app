import { API_HEAD, userData } from '@/utils/utils'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ScrollView, View } from 'react-native'
import PostCard from './PostCard'
import { useAuth } from '@/context/AuthContext'

const RecommendPosts = () => {
    const [posts, setPosts] = useState([])
    const {authState} = useAuth()

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get(`/posts/user/recommendedPosts`)
                setPosts(response.data)
            }
            catch (error) {
                console.error('Error fetching posts:', error)
            }
        }
        fetchPosts()
    }, [])


    return (
        <View className='px-2'>
            <ScrollView showsVerticalScrollIndicator={false}>
                {posts?.map((post: any) => (
                    <PostCard post={post} key={post._id} />
                ))}
            </ScrollView>
        </View>
    )
}

export default RecommendPosts