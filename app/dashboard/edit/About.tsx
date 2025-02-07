import CustomButton from '@/components/CustomButton'
import FormInput from '@/components/FormInput'
import FormButton from '@/components/ui/FormButton'
import axios from 'axios'
import { router, useLocalSearchParams } from 'expo-router'
import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { Alert, ScrollView, Text, View } from 'react-native'
import Toast from 'react-native-toast-message'

const About = () => {
    const { userData: unparsedUserData }: any = useLocalSearchParams()
    const userData = JSON.parse(unparsedUserData);
    const { control, handleSubmit } = useForm({
        defaultValues: {
            about : userData?.about
        }
    })

    const [isSaving, setIsSaving] = useState(false)

    const onSubmit = async (data: any) => {
        try {
            setIsSaving(true)
            const payloadToSend = {
                about: data.about
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
        catch (error : any) {
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

    const aboutFormFields = [
        { name: "about", title: "About" },
    ]


    return (
        <View className='h-full'>
            <ScrollView persistentScrollbar={false}>
                <View className='p-2 flex flex-col space-y-2'>
                    <View className='bg-white p-4 rounded-xl space-y-2'>
                        <Text className='text-lg font-semibold underline'>Basic Details</Text>
                        <View className='flex flex-col space-y-2'>

                            {aboutFormFields.map((field: any) => (
                                <View key={field.name}>
                                    <Controller
                                        control={control}
                                        name={field.name}
                                        render={({ field: { value, onChange, onBlur } }) => (
                                            <FormInput
                                                placeholder={field.title}
                                                value={value}
                                                onChangeText={onChange}
                                                onBlur={onBlur}
                                                title={field.title}
                                                textInputStyles='text-end text-top h-72 p-2'
                                                containerStyles='text-start h-72 p-2'
                                                multiline={true}
                                                textAlignVertical='top'
                                            />
                                        )}
                                    />
                                </View>
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

export default About