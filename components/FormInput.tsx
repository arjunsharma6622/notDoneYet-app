import { Eye, EyeOff } from 'lucide-react-native';
import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

const FormInput = ({ title, value, placeholder, handleChange, keyboardType, textInputStyles, containerStyles, ...props }: any) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className={`space-y-1`}>
      {title &&
        <Text className='text-sm text-primary font-medium'>{title}</Text>
      }
      <View className={`relative w-full h-12 px-4 bg-gray-100 border border-gray-300 rounded-lg focus:border-gray-200 items-center flex-row ${containerStyles}`}>
        <TextInput
          className={`flex-1 ${textInputStyles}`}
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#7b7b8b"
          onChangeText={handleChange}
          secureTextEntry={title === "Password" && !showPassword}
          keyboardType={keyboardType}
          {...props}
        />
        {title === "Password" && (
          <TouchableOpacity className='p-2' onPress={() => setShowPassword(!showPassword)}>
            {!showPassword ? <Eye className='w-6 h-6 text-gray-500' /> :
              <EyeOff className='w-6 h-6 text-gray-500' />
            }
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormInput;
