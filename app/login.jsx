import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

const Login = () => {
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
        className="bg-white border border-gray-300 rounded-full p-3 mb-4 w-full"
        placeholder="Password"
        placeholderTextColor="gray"
        secureTextEntry
      />

      {/* Sign In Buttons */}
      <TouchableOpacity className="bg-[#3b5998] rounded-full flex-row items-center justify-center mb-4 w-full">
        <Image source={require('../assets/fb.png')} className="w-6 h-6 mr-2" />
        <Text className="p-3 text-white font-light text-lg">Sign in with Facebook</Text>
      </TouchableOpacity>

      <TouchableOpacity className="bg-[#db4437] rounded-full flex-row items-center justify-center mb-4 w-full">
        <Image source={require('../assets/google.png')} className="w-6 h-6 mr-2" />
        <Text className="p-3 text-white font-light text-lg">Sign in with Google</Text>
      </TouchableOpacity>

      {/* Start Shopping Button */}
      <View className="flex-row items-center">
      <Link href="/home" asChild>
        <TouchableOpacity className="bg-[#96901f] rounded-full">
          <Text className="p-3 text-white font-light text-lg">Start Shopping</Text>
        </TouchableOpacity>
      </Link>
      <Text className="mr-1 ml-1">or</Text>
      <Link href="signup" asChild>
        <TouchableOpacity className="bg-[#96901f] rounded-full">
          <Text className="p-3 text-white font-light text-lg">Sign Up</Text>
        </TouchableOpacity>
      </Link>
      </View>
      
    </View>
  );
}

export default Login;
