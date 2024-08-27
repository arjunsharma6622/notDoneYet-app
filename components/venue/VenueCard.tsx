import { Link } from 'expo-router'
import { MapPin, Navigation, Phone } from 'lucide-react-native'
import React from 'react'
import { Image, Pressable, Text, TouchableOpacity, View } from 'react-native'

const VenueCard = ({ venue }: { venue: any }) => {

    const venueAddress = `${venue?.location?.address || ""}, ${venue?.location?.landmark || ""}, ${venue?.location?.city || ""}, ${venue?.location?.state || ""}, ${venue?.location?.country || ""}, ${venue?.location?.zipCode || ""}`

    return (
        <Link href={`/VenueProfile/${venue?._id}`} asChild className='w-full'>
            <Pressable className='w-full'>
                <View className='rounded-xl my-1 border relative mx-auto bg-white border-gray-200 max-w-[80%] w-full flex flex-col justify-center items-center pb-2'>
                    <Image source={{ uri: venue?.images[0] }} className='w-full aspect-[2/1] rounded-t-xl' />
                    <View className='mt-4'>
                        <Text className='text-black text-center font-semibold text-lg'>{venue?.name}</Text>

                        <View className='flex items-center flex-row gap-1 justify-center'>
                            <Phone size={14} strokeWidth={1.5} className='text-black' />
                            <Text className='font-medium text-xs text-center'>{venue?.phone}</Text>
                        </View>

                        <View className='flex items-center flex-row gap-1 justify-center'>
                            <MapPin size={14} strokeWidth={1.5} className='text-black' />
                            <Text className='text-black font-medium text-xs text-center'>{venue?.location?.city}, {venue?.location?.state}, {venue?.location?.country}</Text>
                        </View>

                        <View className='flex flex-row gap-2 items-center mt-2'>
                            <TouchableOpacity className='mt-2 flex items-center justify-center bg-blue-500 rounded-full px-4 py-2'>
                                <Text className='text-white font-semibold'>View Profile</Text>
                            </TouchableOpacity>
                            <TouchableOpacity className='mt-2 flex items-center justify-center bg-blue-500 rounded-full px-4 py-2'>
                                <View className='flex items-center flex-row gap-2'>
                                <Navigation size={16} strokeWidth={1.5} className='text-white inline' />
                                <Link href={`https://www.google.com/maps/search/?api=1&query=${venueAddress}`} className='text-white font-semibold'>Get Directions</Link>
                                </View>
                            </TouchableOpacity>
                        </View>

                    </View>

                </View>
            </Pressable>
        </Link>

    )
}

export default VenueCard