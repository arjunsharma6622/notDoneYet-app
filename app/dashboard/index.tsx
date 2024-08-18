import Header from '@/components/Header'
import useFetchData from '@/hooks/useFetch'
import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import About from './(components)/About'
import BasicDetails from './(components)/BasicDetails'
import Experience from './(components)/Experience'
import Posts from './(components)/Posts'
import ProfileHeader from './(components)/ProfileHeader'
import Skills from './(components)/Skills'

const index = () => {
  const { data : userData, isLoading, error, refetch } = useFetchData<any>('/user/authenticatedUser');

  return (
    <>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : userData &&
        <View className='bg-white h-full'>
          <Header isInDashbaord={true} />
          <ScrollView>
            <ProfileHeader userData={userData} />
            <BasicDetails userData={userData} />
            <Posts />
            <About userData={userData} />
            <Skills userData={userData} />
            <Experience userData={userData} />
          </ScrollView>
        </View>

      }

    </>
  )
}

export default index