import react from 'react'
import { useState } from 'react'
import { View, Text , TouchableOpacity,ScrollView, Image, Switch} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons"
import Card from '../components/Card'
import Logo from '../images/logo.png'


function Home() {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
        <View className="flex-1">
            {/* <Text className="text-black font-sans text-3xl font-bold mt-4 ml-4">Storial</Text> */}
            <View className="mt-4 ml-4 flex flex-row justify-between">
                <Text className="text-black font-sans text-3xl font-bold ">Storial</Text>
                <Switch
                    trackColor={{false: '#767577', true: '#000'}}
                    thumbColor={isEnabled ? '#ffff' : '#0d0c0c'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
            </View>
            <View className="flex-row items-center gap-x-1 my-8">
                <Icon name='chevron-back-sharp' size={30} color="#b3afaf"/>
                <TouchableOpacity className="bg-black text-white w-28 h-10 rounded-lg flex flex-row justify-center gap-x-1 items-center">
                    <Icon name="md-football" size={20} color='#fff' />
                    <Text className="text-white font-semibold">Sport</Text>
                </TouchableOpacity>
                <TouchableOpacity className="bg-black w-28 h-10 rounded-lg flex flex-row justify-center gap-x-1 items-center">
                    <Icon name='md-musical-notes-outline' size={20} color="#fff"/>
                    <Text className="text-white font-semibold">Musique</Text>
                </TouchableOpacity>
                <TouchableOpacity className="bg-black w-28 h-10 rounded-lg flex flex-row justify-center gap-x-1 items-center">
                    <Icon name='ios-briefcase-outline' size={20} color="#fff"/>
                    <Text className="text-white font-semibold">Politique</Text>
                </TouchableOpacity>
                <Icon name='chevron-forward-sharp' size={30} color="#b3afaf"/>
            </View>
            <ScrollView className="overflow-y-scroll h-screen" style={{ height: '80%' }}>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </ScrollView>
        </View>
    )
}
export default Home;