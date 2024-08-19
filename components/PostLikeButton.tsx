import { useAuth } from '@/context/AuthContext';
import axios from 'axios';
import { router } from 'expo-router';
import { Heart } from 'lucide-react-native';
import React, { useState } from 'react';
import { ActivityIndicator, Text, TouchableOpacity } from 'react-native';
import Toast from 'react-native-toast-message';

const PostLikeButton = ({ post }: { post: any }) => {

    const { authState } = useAuth()
    const { user: authenticatedUser } = authState || {};

    const [postLikes, setPostLikes]: [any, any] = useState(post?.likes);
    const [isPostLikeLoading, setIsPostLikeLoading]: [boolean, any] = useState(false);
    const [isPostLiked, setIsPostLiked]: [boolean, any] = useState(
        postLikes?.some((user: any) => user._id === authenticatedUser?._id)
    )


    const handlePostLike = async () => {
        if (!authenticatedUser) {
            Toast.show({
                type: 'info',
                text1: 'Please login first',
            })
            return router.push('/login')
        }
        try {
            setIsPostLikeLoading(true)
            const res: any = await axios.post(`/posts/togglePostLike`, { postId: post?._id })
            setPostLikes(res.data.data.updatedLikes)
            setIsPostLiked(!isPostLiked)
            Toast.show({
                type: 'success',
                text1: res.data.message,
            })
        } catch (err) {
            console.log(err);
            Toast.show({
                type: 'error',
                text1: 'Error liking post',
            })
        }
        finally {
            setIsPostLikeLoading(false)
        }
    };
    return (
        <TouchableOpacity onPress={() => handlePostLike()} className={`flex flex-[1] w-full justify-start flex-row items-center gap-1`}>

            {isPostLikeLoading ?
                <ActivityIndicator size='small' color={isPostLiked ? 'rgb(236 72 153)' : 'black'} />
                :
                isPostLiked ?
                    <Heart fill={'pink'} width={22} height={22} strokeWidth={1.5} className={`text-pink-500`} />
                    :
                    <Heart width={22} height={22} strokeWidth={1.5} className={`text-black`} />}

            {postLikes.length > 0 &&
                <Text className={`${isPostLiked ? 'text-pink-500' : 'text-black'}`}>{postLikes?.length}</Text>
            }
            <Text className={`${isPostLiked ? 'text-pink-500' : 'text-black'}`}>
                {postLikes?.length > 1 ? 'Likes' : 'Like'}</Text>
            <Text className=''></Text>
        </TouchableOpacity>
    )
}

export default PostLikeButton