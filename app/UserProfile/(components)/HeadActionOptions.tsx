import FormButton from '@/components/ui/FormButton'
import { useAuth } from '@/context/AuthContext'
import axios from 'axios'
import { router } from 'expo-router'
import { EllipsisVertical, Flame } from 'lucide-react-native'
import React, { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import Toast from 'react-native-toast-message'

const HeadActionOptions = ({ userData }: any) => {

  const { authState } = useAuth();
  const { user: authenticatedUser } = authState || {};

  const [isFollowing, setIsFollowing] = useState(userData?.followers?.includes(authenticatedUser?._id));
  const [isFollowLoading, setIsFollowLoading] = useState(false);
  const [conversationId, setConversationId] = useState<string | null>(null);
  const [profileLikes, setProfileLikes] = useState(userData?.profileLikes);


  const handleToggleFollowClick = async () => {
    try {

      if (userData._id === authenticatedUser?._id) {
        Toast.show({
          type: "info",
          text1: "You cannot follow yourself"
        })
        return;
      }

      setIsFollowLoading(true)
      const response = await axios.post(`/user/toggleFollow`, {
        selectedUserId: userData._id
      })
      if (response?.data?.statusCode === 200) {
        setIsFollowing(!isFollowing)
        setIsFollowLoading(false)
        setConversationId(response?.data?.data?.conversationId)
        Toast.show({
          type: "success",
          text1: response?.data?.message
        })
      }
    }
    catch (err) {
      setIsFollowLoading(false)
      console.error("Error following user:", err);
      Toast.show({
        type: "error",
        text1: "Error following user"
      })
    }
  };

  return (
    <View className='flex flex-row space-x-2 items-center'>
      {
        isFollowing ? (
          <FormButton containerStyles='w-24' isLoading={isFollowLoading} title="Message" handlePress={() => router.push(`/messages/${conversationId ? conversationId : ''}`)} />
        ) : (
          <FormButton containerStyles='w-24' isLoading={isFollowLoading} title="Follow" handlePress={handleToggleFollowClick} />
        )
      }

      <TouchableOpacity className='flex flex-row items-center bg-orange-100 p-2 space-x-1 rounded-full'>
        { userData?.profileLikes?.length > 0 &&
        <Text className='text-orange-600 text-base'>
          {userData?.profileLikes?.length}
        </Text>
}
        <Flame size={20} strokeWidth={1.5} className='w-6 h-6 text-orange-600' />
      </TouchableOpacity>
      <TouchableOpacity className='flex flex-row items-center bg-gray-100 p-2 rounded-full'>
        <EllipsisVertical size={20} strokeWidth={1.5} className='w-6 h-6 text-gray-600' />
      </TouchableOpacity>

    </View>
  )
}

export default HeadActionOptions