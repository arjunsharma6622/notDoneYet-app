import { useAuth } from '@/context/AuthContext'
import { Link, router } from 'expo-router'
import { ArrowLeft, LogOut, MessageSquareText, Search } from 'lucide-react-native'
import React from 'react'
import { Image, Pressable, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Header = ({ isInDashbaord = false, isInSubDashbaord = false }: { isInDashbaord?: boolean, isInSubDashbaord?: boolean }) => {
    const { authState, onLogout } = useAuth()
    const { user } = authState!
    return (
        <SafeAreaView className='bg-white w-full'>
            <View className='bg-white w-full py-2 px-4 flex justify-between flex-row items-center border-b border-gray-200 shadow'>
                {isInDashbaord ?
                    <Link href={'/home'} asChild>
                        <Pressable>
                            <ArrowLeft className='text-gray-600' width={25} height={25} strokeWidth={1.5} />
                        </Pressable>
                    </Link>
                    : isInSubDashbaord ? 
                    <TouchableOpacity onPress={router.back}>
                        <ArrowLeft className='text-gray-600' width={25} height={25} strokeWidth={1.5} />
                    </TouchableOpacity>
                        :
                        <Link href={'/dashboard'} >
                            <View className='w-10 h-10'>
                                <Image referrerPolicy='no-referrer' className='w-10 h-10 rounded-full' style={{ resizeMode: 'contain' }} source={{ uri: user?.image }} />
                            </View>
                        </Link>
                }
                <View className='px-2 flex flex-row space-x-2 items-center justify-start w-52 border rounded-lg h-9 border-gray-200 bg-gray-100'>
                    <Search className='text-gray-600' width={18} height={18} strokeWidth={1.5} />
                    <Text className='text-gray-600 text-center'>Search</Text>
                </View>
                <View className='flex flex-row items-center gap-4'>
                    <TouchableOpacity activeOpacity={0.5} className='relative' onPress={() => router.navigate('/messages/')}>
                        <MessageSquareText className='text-gray-600' strokeWidth={1.5} />
                        <Text className='absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full px-1'>2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => onLogout!()}>
                        <LogOut className='text-gray-600' strokeWidth={1.5} />
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Header