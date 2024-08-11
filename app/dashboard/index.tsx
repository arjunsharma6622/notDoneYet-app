import Header from '@/components/Header'
import useFetch from '@/hooks/useFetch'
import React from 'react'
import { ScrollView, View } from 'react-native'
import About from './(components)/About'
import BasicDetails from './(components)/BasicDetails'
import Experience from './(components)/Experience'
import Posts from './(components)/Posts'
import ProfileHeader from './(components)/ProfileHeader'
import Skills from './(components)/Skills'

const index = () => {
  
  const { data: userData, isLoading, error, refetch } = useFetch<any>('/user/authenticatedUser');

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