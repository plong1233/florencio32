import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';

const Cart = () => {
  return (
    <ScrollView className="flex-1 bg-[#d5d18e] p-4">
      <Text className="text-3xl text-white text-center mb-6">Cart</Text>

      {/* Fruit Items */}
      <View className="space-y-4">
        {/* Item 1 */}
        <View className="flex-row items-center justify-between bg-white rounded-lg shadow-md p-4">
          <Image
            source={require('../../assets/1.jpg')}
            className="h-24 w-24 rounded-lg"
          />
          <View className="flex-1 ml-4">
            <Text className="text-xl font-semibold">Avocado</Text>
            <Text className="text-gray-600">$10/kilo</Text>
          </View>
          <Image source={require('../../assets/add.png')} className="h-8 w-8 opacity-70" />
        </View>

        {/* Item 2 */}
        <View className="flex-row items-center justify-between bg-white rounded-lg shadow-md p-4">
          <Image
            source={require('../../assets/2.jpg')}
            className="h-24 w-24 rounded-lg"
          />
          <View className="flex-1 ml-4">
            <Text className="text-xl font-semibold">Strawberry</Text>
            <Text className="text-gray-600">$17/kilo</Text>
          </View>
          <Image source={require('../../assets/add.png')} className="h-8 w-8 opacity-70" />
        </View>

        {/* Item 3 */}
        <View className="flex-row items-center justify-between bg-white rounded-lg shadow-md p-4">
          <Image
            source={require('../../assets/7.jpg')}
            className="h-24 w-24 rounded-lg"
          />
          <View className="flex-1 ml-4">
            <Text className="text-xl font-semibold">Mango</Text>
            <Text className="text-gray-600">$31/kilo</Text>
          </View>
          <Image source={require('../../assets/add.png')} className="h-8 w-8 opacity-70" />
        </View>
      </View>

      {/* Order Details */}
      <Text className="text-2xl font-semibold text-white mt-6">Order Details</Text>
      <View className="bg-white rounded-lg p-4 mt-2 shadow-md">
        <Text className="text-lg text-gray-800">Total Payment: <Text className="font-semibold">$58</Text></Text>
        <Text className="text-lg text-gray-800">Discount: <Text className="font-semibold">$18</Text></Text>
        <Text className="text-lg text-gray-800">Amount to Pay: <Text className="font-semibold">$40</Text></Text>
      </View>

      {/* Checkout Button */}
      <View className="flex-1 justify-end items-center mt-6 mb-4">
        <TouchableOpacity className="bg-[#96901f] rounded-full w-full p-4">
          <Text className="text-white font-semibold text-lg text-center">Proceed to Check Out</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Cart;
