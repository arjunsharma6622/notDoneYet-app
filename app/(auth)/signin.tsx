import FormField from '@/components/FormField'
import FormButton from '@/components/ui/FormButton'
import { images } from '@/constants'
import { useAuth } from '@/context/AuthContext'
import { Link } from 'expo-router'
import React, { useState } from 'react'
import { Image, ScrollView, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Toast from 'react-native-toast-message'


const SignIn = () => {

  const [form, setForm] = useState<
    { email: string; password: string }>({
      email: '',
      password: ''
    })

  const { onLogin, isLoading } = useAuth()

  const submit = async () => {
    if (!form.email || !form.password) {
      Toast.show({
        type: 'error',
        text1: 'Please fill all fields'
      })
      return
    }
    try {
      onLogin!(form?.email, form?.password)
    } catch (error) {
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
            <Text className='text-lg'>/ Login</Text>
            </View>
          </View>
          <FormField
            title="Email"
            value={form.email}
            handleChange={(e: any) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />
          <FormField
            title="Password"
            value={form.password}
            handleChange={(e: any) => setForm({ ...form, password: e })}
            otherStyles="mt-2"
          />

          <FormButton title="Login" isLoadingMessage='Logging in' handlePress={submit} containerStyles="mt-6 h-12" isLoading={isLoading} />

          <View className=' justify-center pt-5 flex-row gap-2'>
            <Text className='text-base'>Dont have an account?</Text>
            <Link href="/signup" className='text-base text-secondary'>Sign Up</Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn