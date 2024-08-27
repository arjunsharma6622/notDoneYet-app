import { CheckCircle } from 'lucide-react-native'
import React from 'react'
import { Image, Text, View } from 'react-native'

const AmenityCard = ({ amenity }: any) => {
    const imageSource = `https://www.notdoneyet.in/images/amenities/${amenity.icon}`

    return (
        <View className='p-1 w-1/2 relative'>
            <View className='border border-green-500 bg-green-50 rounded-lg p-4 flex flex-col items-center justify-center'>
                <Image className='w-11 h-11' source={{ uri: imageSource }} />
                <Text className='text-xs text-center mt-2'>{amenity.name}</Text>
            </View>
            <CheckCircle strokeWidth={1.5} size={20} className='absolute top-4 right-4 text-green-500' />
        </View>
    )
}

const Amenities = ({ venueData }: any) => {
    return (
        <View className='px-2 py-2 my-2 border-t border-gray-200'>
            <Text className='text-lg font-semibold'>Amenities</Text>
            <View className='flex flex-wrap flex-row items-center justify-center'>
                {venueData?.amenities.map((amenity: any) => (
                    <AmenityCard key={amenity._id} amenity={amenity} />
                ))}
            </View>
        </View>
    )
}

export default Amenities