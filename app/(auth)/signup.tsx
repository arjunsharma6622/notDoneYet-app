import CustomButton from '@/components/CustomButton'
import FormField from '@/components/FormField'
import FormButton from '@/components/ui/FormButton'
import { images } from '@/constants'
import { API_HEAD } from '@/utils/utils'
import axios from 'axios'
import { Link, router } from 'expo-router'
import { ArrowRight } from 'lucide-react-native'
import React, { useState } from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Toast from 'react-native-toast-message'

const SignUp = () => {

  const [form, setForm] = useState({
    name: '',
    userName: '',
    email: '',
    password: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const submit = async () => {

    if (!form.name || !form.userName || !form.email || !form.password) {
      Toast.show({
        type: 'error',
        text1: 'Please fill all fields'
      })
      return
    }
    try {
      setIsSubmitting(true)
      const response = await axios.post(`${API_HEAD}/auth/signup`, form)
      console.log(response.data)
      Toast.show({
        type: 'success',
        text1: 'Sign up successful'
      })
      setIsSubmitting(false)
      router.replace('/signin')
    }
    catch (error: any) {
      setIsSubmitting(false)
      Toast.show({
        type: 'error',
        text1: 'Sign up failed',
        text2: error?.response?.data?.error,
        visibilityTime: 2000
      })
      console.log(error)
    }
  }

  return (
    <SafeAreaView className='bg-white text-primary h-full justify-center'>
      <ScrollView>
        <View
          className='w-full justify-start items-center h-full px-8 my-8'
        >
          <View className='w-full flex flex-row items-center justify-center'>
            <View>
              <Image source={images.logoSmall} style={{ resizeMode: 'contain' }} className='w-16 h-12 my-2' />
            </View>
            <View className='px-2'>
            <Text className='text-lg'>/ Sign Up</Text>
            </View>
          </View>

          <FormField
            title="Name"
            value={form.name}
            handleChange={(e: any) => setForm({ ...form, name: e })}
            otherStyles="mt-10"
          />
          <FormField
            title="Username"
            value={form.userName}
            handleChange={(e: any) => setForm({ ...form, userName: e })}
            otherStyles="mt-2"
          />
          <FormField
            title="Email"
            value={form.email}
            handleChange={(e: any) => setForm({ ...form, email: e })}
            otherStyles="mt-2"
            keyboardType="email-address"
          />
          <FormField
            title="Password"
            value={form.password}
            handleChange={(e: any) => setForm({ ...form, password: e })}
            otherStyles="mt-2"
          />

          <FormButton title="Sign Up" isLoadingMessage='Signing Up' handlePress={submit} containerStyles="mt-6 h-12" isLoading={isSubmitting} />


          <View className=' justify-center pt-5 flex-row gap-2'>
            <Text className='text-base'>Have an account already?</Text>
            <Link href="/signin" className='text-base text-secondary'>Sign In</Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp