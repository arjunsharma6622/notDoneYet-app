import { View, Text } from 'react-native'
import React from 'react'
import Header from '@/components/Header'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

const DashboardEditLayout = () => {
  return (
    <>
      <Header isInSubDashbaord={true}/>
      <Stack>
        <Stack.Screen 
          name='BasicDetails'
          options={{
            headerShown : false
          }}
        />
        <Stack.Screen 
          name='About'
          options={{
            headerShown : false
          }}
        />
        <Stack.Screen 
          name='Skills'
          options={{
            headerShown : false
          }}
        />
        <Stack.Screen 
          name='Experience'
          options={{
            headerShown : false
          }}
        />
      </Stack>
            <StatusBar backgroundColor="" style='light' />

    </>
  )
}

export default DashboardEditLayout