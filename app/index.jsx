import { View, Text, Image , TouchableOpacity} from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Index = () => {
  return (
    <View className="flex-1 bg-[#d5d18e] items-center justify-center">
      <Image source={require('../assets/fruitlogo.jpg')} style={{height:150,width:150,borderRadius:10}}/>
      <Image source={require('../assets/logom.png')} style={{resizeMode:'contain',height:50,width:150}}/>
      <View><Link href="login" asChild>
      <TouchableOpacity className="bg-[#96901f] rounded-full">
        <Text className="p-3 text-white font-light text-lg">Start Shopping</Text>
      </TouchableOpacity>
      </Link></View>
    </View>
  )
}

export default Index