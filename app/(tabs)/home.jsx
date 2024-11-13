import { View, Text, TextInput, Image, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

const Home = () => {
  return (
    <View className="flex-1 bg-[#d5d18e] items-center justify-start">
      <ScrollView className="flex-1">
        {/* Search Bar */}
        <View className="flex-row items-center mt-1 bg-white border border-gray-300 rounded-full p-2 mb-2 shadow-sm" style={{ height: 45, width: 340 }}>
          <TextInput
            className="flex-1 text-lg font-light"
            placeholder="Search fruits"
            placeholderTextColor="gray"
            style={{ paddingLeft: 10 }}
          />
          <Image source={require('../../assets/search.png')} className="w-6 h-6 ml-2" />
        </View>

        {/* Fruity Drinks Ad */}
        <Text className="mr-60 mb-1 text-gray-600 text-lg">Fruity Drinks</Text>
        <Image source={require('../../assets/ads1.jpg')} style={{ height: 200, width: 350, borderRadius: 10 }} className="mb-1" />

        {/* Fresh Fruits Section */}
        <Text className="mr-60 text-gray-600 text-xl mb-1">Fresh Fruits</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="flex-1 mb-4">
          {/* Fresh Fruit 1 */}
          <View className="mr-4 items-center">
            <Image source={require('../../assets/1.jpg')} style={{ height: 300, width: 180, borderRadius: 10 }} />
            <Text className="mt-2 text-lg">Avocado</Text>
            <Link href="cart" asChild className="mt-1">
              <TouchableOpacity className="bg-yellow-600 rounded-full px-4 py-2">
                <Text className="text-white">Add to Cart</Text>
              </TouchableOpacity>
            </Link>
          </View>

          {/* Fresh Fruit 2 */}
          <View className="mr-4 items-center">
            <Image source={require('../../assets/2.jpg')} style={{ height: 300, width: 180, borderRadius: 10 }} />
            <Text className="mt-2 text-lg">Strawberry</Text>
            <Link href="cart" asChild className="mt-1">
              <TouchableOpacity className="bg-yellow-600 rounded-full px-4 py-2">
                <Text className="text-white">Add to Cart</Text>
              </TouchableOpacity>
            </Link>
          </View>

          {/* Fresh Fruit 3 */}
          <View className="mr-4 items-center">
            <Image source={require('../../assets/3.jpg')} style={{ height: 300, width: 180, borderRadius: 10 }} />
            <Text className="mt-2 text-lg">Banana</Text>
            <Link href="cart" asChild className="mt-1">
              <TouchableOpacity className="bg-yellow-600 rounded-full px-4 py-2">
                <Text className="text-white">Add to Cart</Text>
              </TouchableOpacity>
            </Link>
          </View>

          {/* Fresh Fruit 4 */}
          <View className="mr-4 items-center">
            <Image source={require('../../assets/4.jpg')} style={{ height: 300, width: 180, borderRadius: 10 }} />
            <Text className="mt-2 text-lg">Grapes</Text>
            <Link href="cart" asChild className="mt-1">
              <TouchableOpacity className="bg-yellow-600 rounded-full px-4 py-2">
                <Text className="text-white">Add to Cart</Text>
              </TouchableOpacity>
            </Link>
          </View>

          {/* Fresh Fruit 5 */}
          <View className="mr-4 items-center">
            <Image source={require('../../assets/5.jpg')} style={{ height: 300, width: 180, borderRadius: 10 }} />
            <Text className="mt-2 text-lg">Valberry</Text>
            <Link href="cart" asChild className="mt-1">
              <TouchableOpacity className="bg-yellow-600 rounded-full px-4 py-2">
                <Text className="text-white">Add to Cart</Text>
              </TouchableOpacity>
            </Link>
          </View>

          {/* Fresh Fruit 6 */}
          <View className="mr-4 items-center">
            <Image source={require('../../assets/6.jpg')} style={{ height: 300, width: 180, borderRadius: 10 }} />
            <Text className="mt-2 text-lg">Peach</Text>
            <Link href="cart" asChild className="mt-1">
              <TouchableOpacity className="bg-yellow-600 rounded-full px-4 py-2">
                <Text className="text-white">Add to Cart</Text>
              </TouchableOpacity>
            </Link>
          </View>

          {/* Fresh Fruit 7 */}
          <View className="mr-4 items-center">
            <Image source={require('../../assets/7.jpg')} style={{ height: 300, width: 180, borderRadius: 10 }} />
            <Text className="mt-2 text-lg">Mango</Text>
            <Link href="cart" asChild className="mt-1">
              <TouchableOpacity className="bg-yellow-600 rounded-full px-4 py-2">
                <Text className="text-white">Add to Cart</Text>
              </TouchableOpacity>
            </Link>
          </View>
        </ScrollView>

        {/* Sliced Fruits Section */}
        <Text className="mr-60 text-gray-600 text-xl mb-1">Sliced Fruits</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="flex-1">
          {/* Sliced Fruit 1 */}
          <View className="mr-4 items-center">
            <Image source={require('../../assets/slicedapple.jpg')} style={{ height: 150, width: 150, borderRadius: 10 }} />
            <Text className="mt-2 text-lg">Sliced Apple</Text>
            <Link href="cart" asChild className="mt-1">
              <TouchableOpacity className="bg-green-600 rounded-full px-4 py-2">
                <Text className="text-white">Add to Cart</Text>
              </TouchableOpacity>
            </Link>
          </View>

          {/* Sliced Fruit 2 */}
          <View className="mr-4 items-center">
            <Image source={require('../../assets/slicedmelon.jpg')} style={{ height: 150, width: 150, borderRadius: 10 }} />
            <Text className="mt-2 text-lg">Sliced Melon</Text>
            <Link href="cart" asChild className="mt-1">
              <TouchableOpacity className="bg-green-600 rounded-full px-4 py-2">
                <Text className="text-white">Add to Cart</Text>
              </TouchableOpacity>
            </Link>
          </View>

          {/* Sliced Fruit 3 */}
          <View className="mr-4 items-center">
            <Image source={require('../../assets/slicedmango.jpg')} style={{ height: 150, width: 150, borderRadius: 10 }} />
            <Text className="mt-2 text-lg">Sliced Mango</Text>
            <Link href="cart" asChild className="mt-1">
              <TouchableOpacity className="bg-green-600 rounded-full px-4 py-2">
                <Text className="text-white">Add to Cart</Text>
              </TouchableOpacity>
            </Link>
          </View>

          {/* Sliced Fruit 4 */}
          <View className="mr-4 items-center">
            <Image source={require('../../assets/slicedstrawberry.jpg')} style={{ height: 150, width: 150, borderRadius: 10 }} />
            <Text className="mt-2 text-lg">Sliced Strawberry</Text>
            <Link href="cart" asChild className="mt-1">
              <TouchableOpacity className="bg-green-600 rounded-full px-4 py-2">
                <Text className="text-white">Add to Cart</Text>
              </TouchableOpacity>
            </Link>
          </View>

          {/* Sliced Fruit 5 */}
          <View className="mr-4 items-center">
            <Image source={require('../../assets/slicedavocado.jpg')} style={{ height: 150, width: 150, borderRadius: 10 }} />
            <Text className="mt-2 text-lg">Sliced Avocado</Text>
            <Link href="cart" asChild className="mt-1">
              <TouchableOpacity className="bg-green-600 rounded-full px-4 py-2">
                <Text className="text-white">Add to Cart</Text>
              </TouchableOpacity>
            </Link>
          </View>
        </ScrollView>
      </ScrollView>
    </View>
  );
}

export default Home;
