import FormInput from '@/components/FormInput';
import FormButton from '@/components/ui/FormButton';
import { zodResolver } from '@hookform/resolvers/zod';
import { useLocalSearchParams } from 'expo-router';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Alert, ScrollView, Text, View } from 'react-native';
import { z } from "zod";
const ExperienceSchema = z.object({
  title: z.string(),
  type: z.string(),
  description: z.string().optional(),
  location: z.string().optional(),
  duration: z.string().optional(),
  mediaAttachments: z
    .array(
      z.object({
        links: z.string().optional(),
        images: z.string().optional(),
      })
    )
    .optional(),
  outcome: z.enum(["win", "loss", "draw", ""]).optional(),
  potition: z.string().optional(),
  healthInjury: z.string().optional(),
  organization: z.string().optional(),
  coach: z.string().optional(),
  sport: z.string().optional(),
  date: z.date().optional(),
  startDate: z.date().optional(),
  endDate: z.date().optional(),
  current: z.boolean().optional(),
  specialization: z.string().optional(),
});

// Define the ExperienceSchema as shown above

const Experience = () => {
  const { userData: unparsedUserData }: any = useLocalSearchParams();
  const userData = JSON.parse(unparsedUserData);
  const [isSaving, setIsSaving] = useState(false);

  const { control, handleSubmit } = useForm({
    defaultValues: userData.experience[0], // Assuming userData contains the experience array
    resolver: zodResolver(ExperienceSchema),
  });

  const onSubmit = (data: any) => {
    Alert.alert(JSON.stringify(data));
  };

  const experienceFormFields = [
    { name: "title", title: "Title" },
    { name: "type", title: "Type" },
    { name: "description", title: "Description" },
    { name: "location", title: "Location" },
    { name: "duration", title: "Duration" },
    { name: "potition", title: "Position" },
    { name: "healthInjury", title: "Health/Injury" },
    { name: "organization", title: "Organization" },
    { name: "coach", title: "Coach" },
    { name: "sport", title: "Sport" },
    { name: "specialization", title: "Specialization" },
    { name: "outcome", title: "Outcome" },
    { name: "date", title: "Date" },
    { name: "startDate", title: "Start Date" },
    { name: "endDate", title: "End Date" },
    { name: "current", title: "Current" },
  ];

  return (
    <View className='h-full'>
      <ScrollView persistentScrollbar={false}>
        <View className='p-2 flex flex-col space-y-2'>
          <View className='bg-white p-4 rounded-xl space-y-2'>
            <Text className='text-lg font-semibold underline'>Experience</Text>
            <View className='flex flex-col space-y-2'>
              {experienceFormFields.map((field: any) => (
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
  );
};

export default Experience;