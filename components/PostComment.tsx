// import useFetchData from '@/hooks/useFetch'
// import axios from 'axios'
// import React, { useState } from 'react'
// import { Text, TextInput, TouchableOpacity, View } from 'react-native'
// import Toast from 'react-native-toast-message'
// import UserCommentCard from './UserCommentCard'
// import CommentCardSkeleton from './skeletons/PostCard/CommentCardSkeleton'

// const PostComment = ({ post }: { post: any }) => {
//     const [isCommenting, setIsCommenting]: [boolean, any] = useState(false);
//     const [commentText, setCommentText]: [string, any] = useState("");

//     const [postComments, setPostComments]: [any, any] = useState([]);

//     const { isLoading } = useFetchData(`/posts/${post?._id}/getComments`, (fetchedData: any) => {
//         setPostComments(fetchedData.data);
//     })

//     const handlePostComment = async () => {
//         try {

//             if (!commentText) {
//                 Toast.show({
//                     type: 'error',
//                     text1: 'Comment cannot be empty'
//                 });
//                 return;
//             }

//             setIsCommenting(true);

//             const res: any = await axios.post(`/posts/addComment`, {
//                 postId: post?._id,
//                 commentText
//             })

//             console.log(res.data);

//             setPostComments((prev: any) => [res.data.data, ...prev]);

//             setCommentText("");

//             Toast.show({
//                 type: 'success',
//                 text1: 'Comment posted successfully'
//             });

//             // You might also want to update the postData's comments array here
//         } catch (error: any) {
//             console.error(error);
//             Toast.show({
//                 type: 'error',
//                 text1: error.response.data.message || "Error posting comment"
//             });
//         }
//         finally {
//             setIsCommenting(false);
//         }
//     };
//     return (
//         <View className='w-full flex mt-4'>
//             <View className='flex flex-row items-center space-x-2 border-t border-gray-200'>
//                 <View className='flex flex-[1]'>
//                     <TextInput value={commentText} onChangeText={setCommentText} className='w-full h-10 px-2' placeholder='Add a comment...' />
//                 </View>
//                 <View>
//                     <TouchableOpacity className='bg-blue-600 px-4 py-1 rounded-full flex flex-row items-center justify-center'>
//                         <Text className='text-white text-sm'>Post</Text>
//                     </TouchableOpacity>
//                 </View>
//             </View>
//             <View className='border-t border-gray-200'>
//                 {isLoading ?
//                     <View className='flex flex-col'>
//                         <CommentCardSkeleton colorMode='light' />
//                         <CommentCardSkeleton colorMode='light' />
//                         <CommentCardSkeleton colorMode='light' />
//                         <CommentCardSkeleton colorMode='light' />
//                     </View>
//                     :
//                     postComments?.length === 0 ?
//                         <Text className='text-gray-500 text-center text-xs'>Be the first one to comment</Text>
//                         :
//                         postComments?.map((comment: any) =>
//                             <UserCommentCard key={comment._id} comment={comment} />
//                         )}
//             </View>
//         </View>
//     )
// }

// export default PostComment




import useFetchData from '@/hooks/useFetch';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import Toast from 'react-native-toast-message';
import UserCommentCard from './UserCommentCard';
import CommentCardSkeleton from './skeletons/PostCard/CommentCardSkeleton';
import FormButton from './ui/FormButton';

const PostComment = ({ post }: { post: any }) => {
    const [isCommenting, setIsCommenting] = useState(false);
    const [commentText, setCommentText] = useState("");
    const [postComments, setPostComments] = useState<any[]>([]);

    const { data, isLoading } = useFetchData<any[]>(`/posts/${post?._id}/getComments`);

    useEffect(() => {
        if (data) {
            setPostComments(data);
        }
    }, [data]);

    const handlePostComment = async () => {
        try {
            if (!commentText) {
                Toast.show({
                    type: 'error',
                    text1: 'Comment cannot be empty',
                });
                return;
            }

            setIsCommenting(true);

            const res = await axios.post(`/posts/addComment`, {
                postId: post?._id,
                commentText,
            });

            setPostComments((prev) => [res.data.data, ...prev]);
            setCommentText("");

            Toast.show({
                type: 'success',
                text1: 'Comment posted successfully',
            });
        } catch (error: any) {
            console.error(error);
            Toast.show({
                type: 'error',
                text1: error.response?.data?.message || "Error posting comment",
            });
        } finally {
            setIsCommenting(false);
        }
    };

    return (
        <View className='w-full flex mt-4'>
            <View className='flex flex-row items-center space-x-2 '>
                <View className='flex flex-[1] w-full'>
                    <TextInput
                        value={commentText}
                        onChangeText={setCommentText}
                        className='w-full h-10 px-4 border rounded-full border-gray-200'
                        placeholder='Add a comment...'
                    />
                </View>
                <View>
                    <FormButton isLoading={isCommenting} title="Post" handlePress={handlePostComment} containerStyles="bg-blue-600" textStyles="text-white" />
                </View>
            </View>
            <View className='border-t mt-2 border-gray-200'>
                {isLoading ? (
                    <View className='flex flex-col'>
                        <CommentCardSkeleton colorMode='light' />
                        <CommentCardSkeleton colorMode='light' />
                        <CommentCardSkeleton colorMode='light' />
                        <CommentCardSkeleton colorMode='light' />
                    </View>
                ) : postComments.length === 0 ? (
                    <Text className='text-gray-500 text-center text-xs my-2 mt-3'>Be the first one to comment</Text>
                ) : (
                    postComments.map((comment) => (
                        <UserCommentCard key={comment._id} comment={comment} />
                    ))
                )}
            </View>
        </View>
    );
};

export default PostComment;