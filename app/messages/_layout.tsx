import { View, Text } from 'react-native'
import React from 'react'
import Header from '@/components/Header'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

const MessagesLayout = () => {
    return (
        <>
            <Header isInSubDashbaord={false} />
            <Stack>
                <Stack.Screen
                    name='[conversationId]'
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name='index'
                    options={{
                        headerShown: false
                    }}
                />
            </Stack>
            <StatusBar backgroundColor="" style='light' />
        </>
    )
}

export default MessagesLayout