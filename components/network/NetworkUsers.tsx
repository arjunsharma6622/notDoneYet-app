import { API_HEAD } from '@/utils/utils'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { RefreshControl, ScrollView, View } from 'react-native'
import UserCard from './UserCard'

const NetworkUsers = () => {
  const [users, setUsers] = useState([])
  const [isFetching, setIsFetching] = useState(true)
  const fetchNetworkUsers = (async () => {
    try {
      setIsFetching(true)
      const response = await axios.get(`${API_HEAD}/user/recommended`);
      setUsers(response.data.data.recommendedUsers)
    }
    catch (error) {
      console.error('Error fetching network users:', error)
    }
    finally {
      setIsFetching(false)
    }
  })
  useEffect(() => {
    fetchNetworkUsers()
  }, [])
  return (
    <View className='px-2'>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={isFetching} onRefresh={fetchNetworkUsers} />
        }
        showsVerticalScrollIndicator={false}
        className='h-full'
      >
        {users?.map((user: any) => <UserCard user={user} key={user?._id} />)}
      </ScrollView>
    </View>
  )
}

export default NetworkUsers