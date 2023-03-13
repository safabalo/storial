import react from 'react'
import { useState, useEffect } from 'react'
import { View, Text , TouchableOpacity,ScrollView, Image, Switch} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons"
import Card from '../components/Card'
import Logo from '../images/logo.png'
import axios from 'axios';

function Home() {
    const url= "https://newsdata.io/api/1/news?apikey=pub_186594968a793831ccf426e0e67018b60013f&language=fr,en"
    let [data, setData] = useState([])
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(isEnabled => !isEnabled);

    useEffect(() => {
        axios.get(url)
        .then((res) => {
            setData(data = res.data.results)
            console.log(data[1].source_id)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])
    return (
        <View className={(isEnabled && "flex-1 bg-[#111]")}>
            <View className="mt-4 ml-4 flex flex-row justify-between">
                <Text className={(isEnabled && "text-[#eee] font-sans text-3xl font-bold" || "text-black font-sans text-3xl font-bold")}>Storial</Text>
                <Switch
                    trackColor={{false: '#767577', true: '#767577'}}
                    thumbColor={isEnabled ? '#fff' : '#0d0c0c'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
            </View>
            <View className="flex-row items-center gap-x-1 my-8" >
                <Icon name='chevron-back-sharp' size={30} color="#b3afaf"/>
                <TouchableOpacity className={(isEnabled && "bg-slate-700 w-28 h-10 rounded-lg flex flex-row justify-center gap-x-1 items-center" || "bg-black w-28 h-10 rounded-lg flex flex-row justify-center gap-x-1 items-center")}>
                    <Icon name="md-football" size={20} color='#fff' />
                    <Text className="text-white font-semibold">Sport</Text>
                </TouchableOpacity>
                <TouchableOpacity className={(isEnabled && "bg-slate-700 w-28 h-10 rounded-lg flex flex-row justify-center gap-x-1 items-center" || "bg-black w-28 h-10 rounded-lg flex flex-row justify-center gap-x-1 items-center")}>
                    <Icon name='md-musical-notes-outline' size={20} color="#fff"/>
                    <Text className="text-white font-semibold">Musique</Text>
                </TouchableOpacity>
                <TouchableOpacity className={(isEnabled && "bg-slate-700 w-28 h-10 rounded-lg flex flex-row justify-center gap-x-1 items-center" || "bg-black w-28 h-10 rounded-lg flex flex-row justify-center gap-x-1 items-center")}>
                    <Icon name='ios-briefcase-outline' size={20} color="#fff"/>
                    <Text className="text-white font-semibold">Politique</Text>
                </TouchableOpacity>
                <Icon name='chevron-forward-sharp' size={30} color="#b3afaf"/>
            </View>
            
            <ScrollView className="overflow-y-scroll h-screen" style={{ height: '80%' }}>
            {data.map((item) => (
                <Card isEnabled={isEnabled} title={item.title} category={item.category[0]} 
                image={item.image_url} data={item}
                />
            ))}
            </ScrollView>
            
        </View>
    )
}
export default Home;