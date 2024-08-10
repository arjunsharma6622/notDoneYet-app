import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

const CustomButton = ({title, handlePress, containerStyles, textStyles, isLoading, disabledButton, ...props} : any) => {
    return (
        <TouchableOpacity 
            className={`bg-secondary rounded-xl px-2 py-1 justify-center items-center ${containerStyles} ${isLoading ? 'opacity-50' : ''}`}
            onPress={handlePress}
            activeOpacity={0.7}
            disabled={isLoading || disabledButton}
        >
            <Text className={`text-white ${textStyles}`}>{title}</Text>
        </TouchableOpacity>
    )
}

export default CustomButton