import { View, Text, ScrollView, Keyboard } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { useLocalSearchParams } from 'expo-router'
import axios from 'axios'
import CurrentConversation from './(components)/CurrentConversation'
import { SafeAreaView } from 'react-native-safe-area-context'

const conversationId = () => {
  const { conversationId } = useLocalSearchParams()

  const [conversation, setConversation]: any = useState(null)

  const fetchConversation = async () => {
    try {
      const response = await axios.get(`/conversation/${conversationId}`)
      setConversation(response.data.data)
    }
    catch (error) {
      console.error('Error fetching conversation:', error)
    }
  }

  const scrollViewRef = useRef<ScrollView>(null);

  const updateScrollView = () => {
    setTimeout(() => {
      scrollViewRef.current?.scrollToEnd({ animated: false });
    }, 200)
  }

  useEffect(() => {
    updateScrollView()
  }, [conversation?.messages, conversation])


  const updateKeyboardScrollView = () => {
      scrollViewRef.current?.scrollToEnd({ animated: true });
  }

  useEffect(() => {
    fetchConversation()
    const keyboardDidShowListener = Keyboard.addListener("keyboardDidShow", updateKeyboardScrollView);

    return () => {
      keyboardDidShowListener.remove();
    };

  }, [])




  return (
    <SafeAreaView className='bg-white w-full'>

      {/* <ScrollView className='h-full'> */}
      <CurrentConversation scrollViewRef={scrollViewRef} currentConversation={conversation} setCurrentConversation={setConversation} />
      {/* </ScrollView> */}
    </SafeAreaView>
  )
}

export default conversationId