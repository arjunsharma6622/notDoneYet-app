import Header from '@/components/Header'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ScrollView, View } from 'react-native'
import Toast from 'react-native-toast-message'
import About from './(components)/About'
import BasicDetails from './(components)/BasicDetails'
import Experience from './(components)/Experience'
import Posts from './(components)/Posts'
import ProfileHeader from './(components)/ProfileHeader'
import Skills from './(components)/Skills'

const index = () => {
  const [userData, setUserData]: any = useState(null)
  const [isFetching, setIsFetching]: any = useState(true)

  const fetchAuthenticatedUserData = async () => {
    try{
      setIsFetching(true)
      const reponse = await axios.get(`/user/authenticatedUser`)
      const user = reponse?.data?.data?.user
      setUserData(user)
      setIsFetching(false)
    }
    catch(error : any) {
      Toast.show({
        type : 'error',
        text1 : error.response.data.message || "Error fetching user data"
      })
      console.error('Error fetching authenticated user data:', error.response.data)
    }
  }

  useEffect(() => {
    fetchAuthenticatedUserData()
  }, [])



  return (
      <View className='bg-white h-full'>
        <Header isInDashbaord={true} />
        <ScrollView>
        <ProfileHeader userData={userData} />
        <BasicDetails userData={userData}/>
        <Posts/>
        <About userData={userData}/>
        <Skills userData={userData} />
        <Experience userData={userData} />
        </ScrollView>
      </View>
  )
}

export default index