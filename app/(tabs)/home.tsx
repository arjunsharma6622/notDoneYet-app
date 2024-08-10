import RecommendPosts from '@/components/RecommendPosts';
import { useAuth } from '@/context/AuthContext';
import React from 'react';
import { View } from 'react-native';

const Home = () => {
  const { authState } = useAuth()
  
  return (
    <View>
      <RecommendPosts />
    </View>
  )
}

export default Home