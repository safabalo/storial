import React from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import NoImage from "../images/noimage.jpg"

function News(props) {
    let {data} = props.route.params
    let pub = data.pubDate.split(" ")
  return (
    <ScrollView>
        <Text className="text-3xl text-black font-bold mt-2 mb-5">{data.title}</Text>
        <TouchableOpacity className="w-100 bg-gray-200 h-56 mb-8">
            <Image source={(typeof(data.image_url)==="string" && {uri: data.image_url})||NoImage} style={{width: '100%', height: '100%'}} />
        </TouchableOpacity>
        
        <Text>{data.description}</Text>
        <View className="flex flex-row">
            <Text>{pub[0]}</Text>
            <Text>{data.creator[0]}</Text>
            <Text>{data.category[0]}</Text>
        </View>
        <Text>
        {typeof(data.content)!="string" && "Content" || "Follow the link to read the full article"}
        </Text>
        <Text>
            {typeof(data.content)!="string" && data.content || data.link}
        </Text>
        

    </ScrollView>
  )
}

export default News