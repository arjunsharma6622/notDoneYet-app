import FormButton from '@/components/ui/FormButton'
import axios from 'axios'
import { router, useLocalSearchParams } from 'expo-router'
import { CheckCircle } from 'lucide-react-native'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import Toast from 'react-native-toast-message'

const ChooseRole = () => {
    const { userData: unparsedUserData }: any = useLocalSearchParams()
    const userData = JSON.parse(unparsedUserData);
    const { control, handleSubmit } = useForm({
        defaultValues: {
            role: userData?.role
        }
    })

    const [isSaving, setIsSaving] = useState(false)

    const [selectedRole, setSelectedRole] = useState(userData?.role)
    const [isRoleSelected, setIsRoleSelected] = useState(false)

    const onSubmit = async () => {
        try {
            setIsSaving(true)
            const payloadToSend = {
                role: selectedRole
            }

            const response = await axios.patch(`/user/`, payloadToSend)

            if (response.status === 200) {
                Toast.show({
                    type: "success",
                    text1: response.data.message
                })
                router.back()
            }
        }
        catch (error: any) {
            Toast.show({
                type: "error",
                text1: error.response.data.message
            })
            console.log(error)
        }
        finally {
            setIsSaving(false)
        }
    }

    const roles = ["Athlete", "Doctor", "Brand", "Venue"]

    return (
        <View className='h-full'>
            <ScrollView persistentScrollbar={false}>
                <View className='p-2 flex flex-col space-y-2'>
                    <View className='bg-white p-4 rounded-xl space-y-4'>
                        <View className='flex flex-col space-y-0'>
                            <Text className='text-lg font-semibold underline'>Choose Role</Text>
                            <Text className='text-xs text-gray-400'>Choosing your role will help us configure the dashboard for you</Text>
                        </View>
                        <View className='flex flex-col space-y-2'>

                            {roles?.map((role: any) => (
                                <TouchableOpacity onPress={() => { setSelectedRole(role.toLowerCase()); setIsRoleSelected(true) }} key={role} className={`border border-gray-200 rounded-xl flex flex-row justify-between items-center space-x-2 p-4 px-6 ${selectedRole !== role.toLowerCase() && isRoleSelected && 'opacity-30'} ${selectedRole === role.toLowerCase() && 'border-blue-500 bg-blue-50'}`}>
                                    <View className='flex flex-row items-center space-x-4'>
                                        <Image source={{ uri: `https://www.notdoneyet.in/images/role${role}.png` }} className='w-10 h-10' />
                                        <Text className='text-lg'>{role}</Text>
                                    </View>
                                    {selectedRole !== "user" && selectedRole === role.toLowerCase() &&
                                        <View>
                                            <CheckCircle className='text-blue-500' size={20} />
                                        </View>
                                    }
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>
                </View>
            </ScrollView>
            <View className='px-4 py-2 border-t border-gray-200 bg-white'>
                <FormButton
                    title='Save'
                    isLoading={isSaving}
                    isLoadingMessage='Saving...'
                    handlePress={handleSubmit(onSubmit)}
                    containerStyles='bg-primary p-2 py-3 rounded-full'
                />
            </View>
        </View>
    )
}

export default ChooseRole