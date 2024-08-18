import FormInput from '@/components/FormInput'
import FormButton from '@/components/ui/FormButton'
import { zodResolver } from '@hookform/resolvers/zod'
import { useLocalSearchParams } from 'expo-router'
import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { Alert, ScrollView, Text, View } from 'react-native'
import { z } from "zod"

const BasicDetailsSchema = z.object({
    name: z.string(),
    bio: z.string(),
    userName: z.string(),
    email: z.string(),
    phone: z.string(),
    address: z.object({
        street: z.string(),
        city: z.string(),
        state: z.string(),
        country: z.string(),
        postalCode: z.string()
    })
})

const BasicDetails = () => {

    const { userData: unparsedUserData }: any = useLocalSearchParams()
    const userData = JSON.parse(unparsedUserData);
    const { control, handleSubmit } = useForm({
        defaultValues: {
            name: userData?.name,
            userName: userData?.userName,
            email: userData?.email,
            password: '',
            phone: userData?.phone,
            bio: userData?.bio,
            address: {
                street: userData?.address?.street,
                city: userData?.address?.city,
                state: userData?.address?.state,
                country: userData?.address?.country,
                postalCode: userData?.address?.postalCode
            }
        },
        resolver: zodResolver(BasicDetailsSchema)
    })

    const [isSaving, setIsSaving] = useState(false)

    const onSubmit = (data: any) => {
        Alert.alert(JSON.stringify(data))
    }

    const basicFormFields = [
        { name: "name", title: "Name" },
        { name: "userName", title: "User Name" },
        { name: "email", title: "Email" },
        { name: "phone", title: "Phone" },
        { name: "bio", title: "Bio" },
    ]

    const addressFormFields = [
        { name: "address.street", title: "Street" },
        { name: "address.city", title: "City" },
        { name: "address.state", title: "State" },
        { name: "address.country", title: "Country" },
        { name: "address.postalCode", title: "Postal Code" },
    ]


    return (
        <View className='h-full'>
            <ScrollView persistentScrollbar={false}>
                <View className='p-2 flex flex-col space-y-2'>
                    <View className='bg-white p-4 rounded-xl space-y-2'>
                        <Text className='text-lg font-semibold underline'>Basic Details</Text>
                        <View className='flex flex-col space-y-2'>

                            {basicFormFields.map((field: any) => (
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
                                            />
                                        )}
                                    />
                                </View>
                            ))}
                        </View>
                    </View>

                    <View className='bg-white p-4 rounded-xl space-y-2'>
                        <Text className='text-lg font-semibold underline'>Address</Text>
                        <View className='flex flex-col space-y-2'></View>
                        {addressFormFields.map((field: any) => (
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
                                        />
                                    )}
                                />
                            </View>
                        ))}
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

export default BasicDetails