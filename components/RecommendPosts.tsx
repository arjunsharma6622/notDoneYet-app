import { useAuth } from '@/context/AuthContext'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { RefreshControl, ScrollView, View } from 'react-native'
import PostCard from './PostCard'
import PostCardSkeleton from './skeletons/PostCard/PostCardSkeleton'

const RecommendPosts = () => {
    const [posts, setPosts] = useState([])
    const [isFetching, setIsFetching] = useState(true)
    const { authState } = useAuth()

    const fetchPosts = async () => {
        try {
            setIsFetching(true)
            const response = await axios.get(`/posts/user/recommendedPosts`)
            setPosts(response.data.data)
        }
        catch (error) {
            console.error('Error fetching posts:', error)
        } finally {
            setIsFetching(false)
        }
    }

    useEffect(() => {
        fetchPosts()
    }, [])


    return (
        <View className='px-2'>
            <ScrollView
                refreshControl={
                    <RefreshControl refreshing={isFetching} onRefresh={fetchPosts} />
                }
                showsVerticalScrollIndicator={false}>
                {isFetching ?
                    [...new Array(3)].map((_, index) => (
                        <PostCardSkeleton colorMode='light' key={index} />
                    ))
                    : posts?.length > 0 &&
                    posts?.map((post: any) => (
                        <PostCard post={post} key={post._id} />
                    ))
                }
            </ScrollView>
        </View>
    )
}

export default RecommendPosts