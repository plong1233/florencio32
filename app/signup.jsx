import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

const Signup = () => {
  return (
    <View className="flex-1 bg-[#d5d18e] items-center justify-center p-4">
      <Image source={require('../assets/fruitlogo.jpg')} style={{ height: 150, width: 150, borderRadius: 10 }} />
      <Image source={require('../assets/logom.png')} style={{ resizeMode: 'contain', height: 50, width: 150, marginVertical: 20 }} />

      {/* Email Input */}
      <TextInput
        className="bg-white border border-gray-300 rounded-full p-3 mb-3 w-full"
        placeholder="Email"
        placeholderTextColor="gray"
      />
      
      {/* Password Input */}
      <TextInput
        className="bg-white border border-gray-300 rounded-full p-3 mb-3 w-full"
        placeholder="Password"
        placeholderTextColor="gray"
        secureTextEntry
      />

      {/* Confirm Password Input */}
      <TextInput
        className="bg-white border border-gray-300 rounded-full p-3 mb-4 w-full"
        placeholder="Confirm Password"
        placeholderTextColor="gray"
        secureTextEntry
      />

      {/* Sign Up Button */}
      <Link href="login" asChild>
      
      <TouchableOpacity className="bg-[#96901f] rounded-full mb-4 w-full">
        <Text className="p-3 text-white font-light text-lg text-center">Register</Text>
      </TouchableOpacity>
      </Link>
      

      {/* Link to Login */}
      <Link href="/login" asChild>
        <Text className="text-gray-600 mt-2">Already have an account? Log in</Text>
      </Link>
    </View>
  );
}

export default Signup;
