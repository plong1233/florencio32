import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

const Profile = () => {
  return (
    <View className="flex-1 bg-[#d5d18e] items-center justify-start p-4">
      <Image 
        source={require('../../assets/pfp.jpg')} 
        className="mt-3" 
        style={{ resizeMode: 'cover', height: 150, width: 150, borderRadius: 75 }} 
      />
      <Text className="text-2xl font-bold mt-4">Florencio Sanchez III</Text>
      <Text className="text-lg text-gray-600 mb-6">plongsanchez@gmail.com</Text>
      
      <View className="w-full items-start justify-start mt-4 space-y-4">
        {/* Profile Options */}
        <View className="flex-row items-center">
          <Image source={require('../../assets/order.png')} className="w-8 h-8 mr-3 opacity-70" />
          <Text className="text-lg">Your Order</Text>
        </View>
        <View className="flex-row items-center">
          <Image source={require('../../assets/notif.png')} className="w-8 h-8 mr-3 opacity-70" />
          <Text className="text-lg">Notifications</Text>
        </View>
        <View className="flex-row items-center">
          <Image source={require('../../assets/ph.png')} className="w-8 h-8 mr-3 opacity-70" />
          <Text className="text-lg">Your Location</Text>
        </View>
        <View className="flex-row items-center">
          <Image source={require('../../assets/settings.png')} className="w-8 h-8 mr-3 opacity-70" />
          <Text className="text-lg">Settings</Text>
        </View>
      </View>

      {/* Sign Out Button */}
      <Link href="/" asChild>
        <TouchableOpacity 
          className="flex-row items-center bg-red-600 rounded-full p-4 mt-6 w-full justify-center"
          onPress={() => console.log('Logging out...')}
        >
          <Image source={require('../../assets/logoff.png')} className="w-6 h-6 mr-2" />
          <Text className="text-white font-semibold text-lg">Sign Out</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
};

export default Profile;
