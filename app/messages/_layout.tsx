import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import React from 'react'

const MessagesLayout = () => {
    return (
        <>
            <Stack>
                <Stack.Screen
                    name='index'
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name='[conversationId]'
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