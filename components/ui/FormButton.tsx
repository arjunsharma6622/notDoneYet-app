import React from 'react'
import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native'

const FormButton = ({ title, isLoading, isLoadingMessage, handlePress, containerStyles, textStyles }: { title: string, isLoading: boolean, isLoadingMessage?: string, handlePress: () => void, containerStyles?: string, textStyles?: string }) => {
    return (
        <TouchableOpacity disabled={isLoading} onPress={handlePress} className={`w-full ${isLoading ? 'bg-blue-300 p-2' : 'bg-blue-500 p-2 px-4'} rounded-full flex items-center justify-center ${containerStyles}`}>
            {isLoading ?
                <View className='flex flex-row items-center justify-center space-x-4'>
                    {isLoadingMessage &&
                        <Text className={`text-white ${textStyles}`}>{isLoadingMessage}</Text>
                    }
                    <ActivityIndicator color='white' size={20} />
                </View>
                :
                <Text className={`text-white ${textStyles}`}>{isLoading ? isLoadingMessage : title}</Text>
            }
        </TouchableOpacity>
    )
}

export default FormButton