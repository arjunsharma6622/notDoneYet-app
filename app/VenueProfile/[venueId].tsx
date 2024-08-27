import Header from '@/components/Header'
import axios from 'axios'
import { useLocalSearchParams } from 'expo-router'
import React, { useEffect, useState } from 'react'
import { ScrollView, View } from 'react-native'
import About from './(components)/About'
import Amenities from './(components)/Amenities'
import BasicDetails from './(components)/BasicDetails'
import Posts from './(components)/Posts'
import ProfileHeader from './(components)/ProfileHeader'

const UserProfile = () => {
  const { venueId } = useLocalSearchParams()
  const [venueData, setVenueData]: any = useState(null)
  const [venuePosts, setVenuePosts]: any = useState(null)

  useEffect(() => {
    const fetchvenueData = async () => {
      try {
        const venueResponse = await axios.get(`/venue/${venueId}`)
        const venuePostsResponse = await axios.get(`/posts/getPosts/user?userId=${venueId}`)
        setVenueData(venueResponse.data.data)
        setVenuePosts(venuePostsResponse.data.data)
      }
      catch (error) {
        console.error('Error fetching user data:', error)
      }
    }
    fetchvenueData()
  }, [])

  return (
    <View className='bg-white h-full'>
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
      {venueData && (
        <View className='flex flex-col p-2 px-1'>
          <ProfileHeader venueData={venueData} />
          <BasicDetails venueData={venueData} />
          <About venueData={venueData} />
          <Amenities venueData={venueData} />
          <Posts venuePosts={venuePosts} />
        </View>
      )}
      </ScrollView>
    </View>
  )
}

export default UserProfile