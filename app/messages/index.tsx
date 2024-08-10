import { useAuth } from '@/context/AuthContext'
import { formatDate } from '@/utils/FormatDate'
import axios from 'axios'
import { router } from 'expo-router'
import React, { useEffect, useState } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import ConversationCard from './(components)/ConversationCard'

const Messages = () => {
    const { authState } = useAuth();
    const { user: authenticatedUser } = authState || {};

    const [conversations, setConversations] = useState([])

    const fetchConversations = async () => {
        try {
            const response = await axios.get('/conversation/user/getAllConversations')
            setConversations(response.data.data)

        }
        catch (error) {

            console.log(error)
        }
    }

    useEffect(() => {
        fetchConversations()
    }, [])

    return (
        <View className='p-4'>
            <Text>messages</Text>
            <View className='flex flex-col space-y-2'>
                {conversations.map((conversation: any, i: number) => {

                    const lastMessage = conversation?.messages[conversation.messages.length - 1];
                    const otherUser = conversation.users.filter(
                        (user: any) => user._id !== authenticatedUser._id,
                    )[0];

                    return (
                        <View key={i}>
                        <ConversationCard
                            conversation={conversation}
                            otherUser={otherUser}
                            lastMessage={lastMessage}
                            authenticatedUser={authenticatedUser}
                        />
                        </View>
                    )
                }
                )}
            </View>
        </View>
    )
}

export default Messages