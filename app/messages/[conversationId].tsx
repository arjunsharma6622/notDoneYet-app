import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams } from 'expo-router'
import axios from 'axios'
import CurrentConversation from './(components)/CurrentConversation'

const conversationId = () => {
  const { conversationId } = useLocalSearchParams()

  const [conversation, setConversation] : any = useState(null)

  const fetchConversation = async () => {
    try {
      const response = await axios.get(`/conversation/${conversationId}`)
      setConversation(response.data.data)
    }
    catch (error) {
      console.error('Error fetching conversation:', error)
    }
  }


  useEffect(() => {
    fetchConversation()
  }, [])


  return (
    <ScrollView className='h-full'>
      <CurrentConversation currentConversation={conversation} setCurrentConversation={setConversation}/>
    </ScrollView>
  )
}

export default conversationId