import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { router } from 'expo-router'
import { ArrowLeft } from 'lucide-react-native'

const ConversationHeader = ({ currentConversation, authenticatedUser }: { currentConversation: any, authenticatedUser: any }) => {
    return (
        <View className="flex items-center flex-row bg-white border-b border-gray-200 justify-start p-4 space-x-2 shadow-sm">
            <View className="flex flex-row space-x-2 items-center">
                <TouchableOpacity className="mr-1" onPress={() => router.back()}>
                    <View className="w-6 h-6 flex items-center justify-center">
                        <ArrowLeft strokeWidth={1.5} className="text-black" />
                    </View>
                </TouchableOpacity>
                <View className="">
                    <Image
                        source={{
                            uri: currentConversation?.users?.filter(
                                (user: any) => user._id !== authenticatedUser._id
                            )[0]?.image,
                        }}
                        alt=""
                        className="rounded-full object-cover w-10 h-10"
                        style={{ resizeMode: "contain" }}
                    />
                </View>
                <View className="flex-[10]">
                    <Text>
                        {
                            currentConversation?.users?.filter(
                                (user: any) => user._id !== authenticatedUser._id
                            )[0]?.name
                        }
                    </Text>
                    <Text
                        className="text-gray-400 text-[10px]"
                        numberOfLines={1}
                    >
                        {
                            currentConversation?.users?.filter(
                                (user: any) => user._id !== authenticatedUser._id
                            )[0]?.bio
                        }
                    </Text>
                </View>
                <View className="w-10 h-10 flex-[1]"></View>
            </View>
        </View>
    )
}

export default ConversationHeader