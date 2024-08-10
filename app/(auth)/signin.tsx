import FormField from '@/components/FormField'
import { images } from '@/constants'
import { useAuth } from '@/context/AuthContext'
import { Link } from 'expo-router'
import { ArrowRight } from 'lucide-react-native'
import React, { useState } from 'react'
import { ActivityIndicator, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Toast from 'react-native-toast-message'

const SignIn = () => {

  const [form, setForm] = useState<
    { email: string; password: string }>({
    email: '',
    password: ''
  })

  const {onLogin} = useAuth()

  const [isSubmitting, setIsSubmitting] = useState(false)

  const submit = async () => {
    if(!form.email || !form.password){
      Toast.show({
        type : 'error',
        text1 : 'Please fill all fields'
      })
      return
    }try{
    onLogin!(form?.email, form?.password)
    }catch(error){
      console.log(error)
    }
  }

  return (
    <SafeAreaView className=' text-primary h-full justify-center'>
      <ScrollView>
        <View
          className='w-full justify-center items-center h-full min-h-[83vh] px-8 my-6'
        >
          <Text className='text-xl font-psemibold'>Login</Text>
          <Image source={images.logo} style={{ resizeMode: 'contain' }} className='w-44 h-10 my-2' />
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


          <TouchableOpacity disabled={isSubmitting} activeOpacity={0.8} onPress={submit} className="h-12 mt-6 bg-blue-500 rounded-lg w-full px-10 flex flex-row items-center justify-center">
            <View className="flex flex-row items-center gap-2">
              <Text className="text-center text-white font-medium text-base">Login</Text>
              {!isSubmitting ? <ArrowRight size={20} className="text-white" /> :
              <ActivityIndicator color={"white"} size={20} />}
            </View>
          </TouchableOpacity>


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