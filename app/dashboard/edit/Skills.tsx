import CustomButton from '@/components/CustomButton'
import FormInput from '@/components/FormInput'
import IconButton from '@/components/IconButton'
import FormButton from '@/components/ui/FormButton'
import { useLocalSearchParams } from 'expo-router'
import React, { useState } from 'react'
import { ScrollView, Text, View } from 'react-native'

const Skills = () => {
    const { userData: unparsedUserData }: any = useLocalSearchParams()
    const userData = JSON.parse(unparsedUserData);

    const [isSaving, setIsSaving] = useState(false)

    const [skills, setSkills] = useState(userData?.skills)

    const [newSkill, setNewSkill] = useState('')

    const handleAddSkill = () => {
        if (!newSkill) return
        setSkills([...skills, newSkill])
        setNewSkill('')
    }

    const handleSubmit = (data: any) => {
        console.log(data)
    }

    const handleRemoveSkill = (skill: any) => {
        const newSkills = skills.filter((s: any) => s !== skill)
        setSkills(newSkills)
    }


    return (
        <View className='h-full'>
            <ScrollView persistentScrollbar={false}>
                <View className='p-2 flex flex-col space-y-2'>
                    <View className='bg-white p-4 rounded-xl space-y-2'>
                        <Text className='text-lg font-semibold underline'>Add Skill</Text>
                        <View className='flex flex-row items-center space-x-2 w-full'>
                            <View className='w-full flex-[3]'>
                                <FormInput
                                    placeholder={'Enter skill'}
                                    value={newSkill}
                                    onChangeText={(value: any) => setNewSkill(value)}
                                />
                            </View>
                            <View className='flex-[1]'>
                                <CustomButton
                                    title='Add'
                                    handlePress={handleAddSkill}
                                    containerStyles='bg-primary p-2 py-3 h-12 rounded-xl w-24'
                                    disabledButton={!newSkill}
                                />
                            </View>
                        </View>
                    </View>
                    <View className='bg-white p-4 rounded-xl space-y-2'>
                        <Text className='text-lg font-semibold underline'>Skills</Text>
                        <View className='flex flex-col space-y-4'>
                            {
                                skills.map((skill: string, index: number) => (
                                    <View key={index} className='flex flex-row items-center space-x-2 justify-between bg-gray-100 py-3 px-4 rounded-xl'>
                                        <Text className='text-black'>{skill}</Text>
                                        <IconButton buttonType='delete' onPress={() => handleRemoveSkill(skill)} />
                                    </View>
                                ))
                            }

                        </View>
                    </View>
                </View>
            </ScrollView>
            <View className='px-4 py-2 border-t border-gray-200 bg-white'>
                <FormButton
                    title='Save'
                    isLoading={isSaving}
                    isLoadingMessage='Saving...'
                    handlePress={() => { }}
                    containerStyles='bg-primary p-2 py-3 rounded-full'
                />
            </View>
        </View>
    )
}

export default Skills