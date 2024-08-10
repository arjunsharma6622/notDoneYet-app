import { API_HEAD } from '@/utils/utils'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Profile = () => {

  const [userData, setUserData] : any =  useState([])

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`${API_HEAD}/user/`)
        setUserData(response.data)
      }catch(error) {
        console.error('Error fetching user data:', error)
      }
    }
    fetchUserData()
  }, [])

  return (
    <SafeAreaView className='p-4'>
      <Text className='text-6xl'>profile</Text>
      {userData && userData.map((user: any) => (
        <Text key={user._id}>{user.name}</Text>
      ))}
    </SafeAreaView>
  )
}

export default Profile