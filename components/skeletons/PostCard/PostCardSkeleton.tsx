import { View, Text } from 'react-native'
import React from 'react'
import { MotiView } from 'moti'
import { Skeleton } from 'moti/skeleton'

const PostCardSkeleton = ({ colorMode }: { colorMode: "light" | "dark" }) => {
    return (
        <MotiView
            transition={{
                type: 'timing',
            }}
            className='my-1 w-full border p-2 rounded-lg border-gray-200 bg-white'
        >
            <View className='flex flex-row items-center w-full border-b pb-2 border-gray-200'>
                <Skeleton colorMode={colorMode} radius="round" height={46} width={46} />
                <View className='w-2 bg-white' />
                <View>
                    <Skeleton colorMode={colorMode} width={250} height={18} />
                    <View className='h-2 bg-white' />
                    <Skeleton colorMode={colorMode} width={300} height={10} />
                </View>
            </View>
            <View className='h-2 bg-white' />
            <View>
                <View>
                    <Skeleton colorMode={colorMode} width={'80%'} height={10} />
                    <View className='h-1 bg-white' />
                    <Skeleton colorMode={colorMode} width={'60%'} height={10} />
                    <View className='h-1 bg-white' />
                    <Skeleton colorMode={colorMode} width={'100%'} height={10} />
                </View>
                <View className='h-2 bg-white' />
                <Skeleton colorMode={colorMode} width={'100%'} height={150} />
            </View>
        </MotiView>
    )
}

export default PostCardSkeleton