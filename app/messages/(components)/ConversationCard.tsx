import { formatDate } from '@/utils/FormatDate'
import { router } from 'expo-router'
import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'

const ConversationCard = ({ conversation, otherUser, lastMessage, authenticatedUser }: any) => {
    return (
        <TouchableOpacity className='bg-white rounded-xl p-4' onPress={() => router.navigate('/messages/' + conversation?._id)}>

            <View className='flex flex-row items-center space-x-4'>
                <View>
                    <Image source={{ uri: otherUser?.image }} className='w-12 h-12 rounded-full' />
                </View>

                <View className='flex flex-col space-y-1 flex-[1]'>
                    <View className='flex flex-row justify-between'>
                        <Text className='text-base font-medium'>{otherUser?.name}</Text>

                        {lastMessage &&
                            <Text className="text-xs text-gray-500">
                                {formatDate(lastMessage?.createdAt)}
                            </Text>
                        }
                    </View>

                    {lastMessage ?
                        <Text
                            className={`${true ? "text-black text-xs" : "text-gray-500"} truncatedText1`}
                        >
                            {lastMessage?.senderId === authenticatedUser._id
                                ? "You: "
                                : otherUser?.name?.split(" ")[0] + ": "}
                            {lastMessage?.content}
                        </Text>

                        :

                        <Text className="text-gray-500 text-xs">You followed {otherUser?.name?.split(" ")[0]}</Text>
                    }
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default ConversationCard