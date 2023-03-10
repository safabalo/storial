import React from 'react'
import { View, Text , TouchableOpacity} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons"
function Card(props) {
  let {isEnabled, title, description} = props
  console.log(title)
  console.log(description)
  return (
    <View className={(isEnabled && "bg-slate-800 w-11/12 h-36 self-center flex flex-row mt-4 mb-1 shadow") || "bg-white w-11/12 h-36 self-center flex flex-row mt-4 mb-1 shadow"}>
        <TouchableOpacity className="w-32 bg-gray-200 h-36"></TouchableOpacity>
        <View className="ml-2 w-48">
            <Text className={(isEnabled && "text-white font-bold text-lg" || "text-black font-bold text-xl")}>{title}</Text>
            <Text className={(isEnabled && "text-white" || "text-black")}>{description}</Text>
        </View>
        <View className='w-10 flex justify-center items-center'>
            <Icon name='heart' size={30} color="#b3afaf"/>
        </View>
        
    </View>
  )  
}

export default Card