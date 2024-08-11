import { useAuth } from '@/context/AuthContext'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { RefreshControl, RefreshControlBase, ScrollView, Text, View } from 'react-native'
import ConversationCard from './(components)/ConversationCard'
import { Link } from 'expo-router'
import Header from '@/components/Header'

const Messages = () => {
    const { authState } = useAuth();
    const { user: authenticatedUser } = authState || {};

    const [conversations, setConversations] = useState([])
    const [refreshing, setRefreshing] = useState(false);

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
        setRefreshing(true)
        fetchConversations()
        setRefreshing(false)
    }, [])

    return (
        <View className=''>
                        <Header isInSubDashbaord={false} />

            <Text className='text-center mt-2 text-base font-semibold'>Messages</Text>
            <ScrollView 
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={fetchConversations}/>
                } 
                className='flex flex-col space-y-2 p-2'
            >
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
            </ScrollView>
        </View>
    )
}

export default Messages