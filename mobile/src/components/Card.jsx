import React from 'react'
import { View, Text , TouchableOpacity,Image} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons"
import NoImage from "../images/noimage.jpg"
import { useNavigation } from '@react-navigation/native';

function Card(props) {
  let {isEnabled, title, category, image, data} = props
  const navigation = useNavigation();
  return (
    <View className={(isEnabled && "bg-slate-800 w-11/12 h-36 self-center flex flex-row mt-4 mb-1 shadow") || "bg-white w-11/12 h-36 self-center flex flex-row mt-4 mb-1 shadow"} >
        
        <TouchableOpacity className="w-32 bg-gray-200 h-36">
            <Image source={(typeof(image)==="string" && {uri: image})||NoImage} style={{width: '100%', height: '100%'}}/>
        </TouchableOpacity>
        <TouchableOpacity className="ml-2 w-48" onPress={()=>navigation.navigate('News',{data})}>
            <Text className={(isEnabled && "text-white font-bold text-md truncate max-w-md" || "text-black font-bold text-md truncate max-w-md")}>{title}</Text>
            <Text className={(isEnabled && "text-white" || "text-black")}>{category}</Text>
        </TouchableOpacity>
        <TouchableOpacity className='w-10 flex justify-center items-center'>
            <Icon name='heart' size={30} color="#b3afaf"/>
        </TouchableOpacity>
        
    </View>
  )  
}

export default Card