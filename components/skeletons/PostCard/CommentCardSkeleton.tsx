import { View, Text } from 'react-native'
import React from 'react'
import { MotiView } from 'moti'
import { Skeleton } from 'moti/skeleton'

const CommentCardSkeleton = ({ colorMode }: { colorMode: "light" | "dark" }) => {
    return (
        <MotiView
            transition={{
                type: 'timing',
            }}
            className='w-full p-2 rounded-lg border-gray-200 bg-white'
        >
            <View className='flex flex-row items-center w-full border-gray-200'>
                <Skeleton colorMode={colorMode} radius="round" height={40} width={40} />
                <View className='w-2 bg-white' />
                <View>
                    <Skeleton colorMode={colorMode} width={200} height={12} />
                    <View className='h-2 bg-white' />
                    <Skeleton colorMode={colorMode} width={300} height={8} />
                </View>
            </View>
        </MotiView>
    )
}

export default CommentCardSkeleton