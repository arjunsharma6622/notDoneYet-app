import { API_HEAD } from '@/utils/utils'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ScrollView, View } from 'react-native'
import UserCard from './UserCard'

const NetworkUsers = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
      const fetchNetworkUsers = (async () => {
        try {
          const response = await axios.get(`${API_HEAD}/user/recommended`);
          setUsers(response.data.data.recommendedUsers)
        }
        catch (error) {
          console.error('Error fetching network users:', error)
        }
      })
      fetchNetworkUsers()
    }, [])
  return (
    <View className=''>
      <ScrollView>
        {users?.map((user: any) => <UserCard user={user} key={user?._id} />)}
      </ScrollView>
    </View>
  )
}

export default NetworkUsers