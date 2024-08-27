import Header from '@/components/Header'
import axios from 'axios'
import { useLocalSearchParams } from 'expo-router'
import React, { useEffect, useState } from 'react'
import { ScrollView, View } from 'react-native'
import About from './(components)/About'
import BasicDetails from './(components)/BasicDetails'
import Posts from './(components)/Posts'
import ProfileHeader from './(components)/ProfileHeader'
import Skills from './(components)/Skills'

const UserProfile = () => {
  const { userName } = useLocalSearchParams()
  const [userData, setUserData]: any = useState(null)
  const [userPosts, setUserPosts]: any = useState(null)

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`/user/getUser?userName=${userName}`)
        const response2 = await axios.get(`/posts/getPosts/user?userName=${userName}`)
        setUserData(response.data)
        setUserPosts(response2.data.data)
      }
      catch (error) {
        console.error('Error fetching user data:', error)
      }
    }
    fetchUserData()
  }, [])

  return (
    <View className='bg-white h-full'>
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
      {userData && (
        <View className='flex flex-col p-2 px-1'>
          <ProfileHeader userData={userData} />
          <BasicDetails userData={userData} />
          <About userData={userData} />
          {userData?.role === "athlete" && <Skills userData={userData} />}
          {userData?.role === "doctor" && <Skills userData={userData} />}
          <Posts userPosts={userPosts} />
        </View>
      )}
      </ScrollView>
    </View>
  )
}

export default UserProfile