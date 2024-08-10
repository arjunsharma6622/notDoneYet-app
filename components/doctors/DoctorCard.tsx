import { Link } from 'expo-router'
import { MapPin, Phone } from 'lucide-react-native'
import React from 'react'
import { Image, Pressable, Text, TouchableOpacity, View } from 'react-native'

const DoctorCard = ({ user }: { user: any }) => {

    return (
        <Link href={`/UserProfile/${user?.userName}`} asChild className='w-full'>
            <Pressable className='w-full'>
                <View className='rounded-lg my-1 border relative mx-auto bg-white border-gray-200 max-w-[70%] w-full flex flex-col justify-center items-center pb-2'>
                    <Image source={{ uri: user?.backgroundImg }} className='w-full aspect-[4/1] rounded-t-lg' />
                    <Image source={{ uri: user?.image }} className='w-16 h-16 rounded-full absolute top-6' />
                    <View className='mt-4'>
                        <Text className='text-black text-center font-semibold text-lg'>{user?.name}</Text>
                        <Text numberOfLines={1} className='text-black text-xs text-center'>{user?.bio}</Text>

                        <View className='flex items-center flex-row gap-1 justify-center'>
                        <Phone size={14} strokeWidth={1.5} className='text-black' />
                        <Text className='font-medium text-xs text-center'>{user?.phone}</Text>
                        </View>

                        <View className='flex items-center flex-row gap-1 justify-center'>
                        <MapPin size={14} strokeWidth={1.5} className='text-black' />
                        <Text className='text-black font-medium text-xs text-center'>{user?.address?.city}, {user?.address?.state}, {user?.address?.country}</Text>
                        </View>

                        <TouchableOpacity className='mt-2 flex items-center justify-center bg-blue-500 rounded-full px-4 py-2'>
                            <Text className='text-white font-semibold'>View Profile</Text>
                        </TouchableOpacity>

                    </View>

                </View>
            </Pressable>
        </Link>

    )
}

export default DoctorCard