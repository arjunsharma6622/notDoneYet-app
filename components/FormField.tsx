import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react-native';

const FormField = ({ title, value, placeholder, handleChange, keyboardType, otherStyles, ...props } : any) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className={`space-y-1 ${otherStyles}`}>
      <Text className='text-base text-primary'>{title}</Text>
      <View className='relative w-full h-12 px-4 border border-gray-300 rounded-lg focus:border-blue-500 items-center flex-row'>
        <TextInput
          className='flex-1 h-12 text-base'
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#7b7b8b"
          onChangeText={handleChange}
          secureTextEntry={title === "Password" && !showPassword}
          keyboardType={keyboardType}
          selectionColor={'#7b7b8b'}
          {...props}
        />
        {title === "Password" && (
          <TouchableOpacity className='p-2' onPress={() => setShowPassword(!showPassword)}>
            {!showPassword ? <Eye strokeWidth={1.4} size={30} className='text-gray-400' /> :
              <EyeOff strokeWidth={1.4} size={30} className='w-6 h-6 text-gray-400' />
            }
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
