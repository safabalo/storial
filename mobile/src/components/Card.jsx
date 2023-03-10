import React from 'react'
import { View, Text , TouchableOpacity} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons"
function Card() {
  return (
    <View className="bg-white w-11/12 h-36 self-center flex flex-row mt-4 mb-1">
        <TouchableOpacity className="w-32 bg-gray-200 h-36"></TouchableOpacity>
        <View className="ml-2 w-48">
            <Text>Card</Text>
            <Text>Safae Balha est une jeune femme</Text>
        </View>
        <View className='w-10 flex justify-center items-center'>
            <Icon name='heart' size={30} color="#b3afaf"/>
        </View>
        
    </View>
  )  
}

export default Card