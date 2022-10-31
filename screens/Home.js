import { Text, View, FlatList, SafeAreaView } from "react-native";
import {FocusedStatusBar, HomeHeader, NFTCard} from "../components"
import {COLORS, NFTData} from "../constants"

const Home = () => {
    console.log("Hello world")
    return (
        <SafeAreaView style={{flex: 1}}>
            <FocusedStatusBar background = {COLORS.primary} />
            <View style={{flex: 1}}>
                <View style = {{zIndex: 0}}> 
                    <FlatList data = {NFTData} renderItem = {({item})=> <Text> {item.name}</Text>} />
                </View>
            </View>
        </SafeAreaView>
    )
}
export default Home;