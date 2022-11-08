import { Text, View, FlatList, SafeAreaView } from "react-native";
import {FocusedStatusBar, HomeHeader, NFTCard} from "../components"
import {COLORS, NFTData} from "../constants"
import {useState} from 'react'

const Home = () => {
    const [nftData, setNFTData] = useState(NFTData)
   
    const handleSearch = (value) => {
        if(!value.length) return setNFTData(NFTData)

        const filteredData = NFTData.filter((item)=> {
            return item.name.toLowerCase().includes(value.toLowerCase())
        })
        console.log("Filtered: ", filteredData)
        if (filteredData.length){
            setNFTData(filteredData)
        }
        else{
            setNFTData(NFTData)
        }
    }
    return (
        <SafeAreaView style={{flex: 1, justifyContent: 'center',
        backgroundColor: '#ECF0F1'}}>
            <FocusedStatusBar background = {COLORS.primary} />
            <View style={{flex: 1}}>
                <View style = {{zIndex: 0, color: "white"}}> 
                    <FlatList data = {nftData} 
                    renderItem = {({item})=> <NFTCard data = {item} />} 
                    keyExtractor = {(item)=> item.id}
                    showsVerticalScrollIndicator = {false}
                    ListHeaderComponent = {<HomeHeader onSearch = {handleSearch} />} 
                    />
                </View>
                <View style = {{position: "absolute", top: 0, left: 0, bottom: 0, right: 0, zIndex: -1}}>
                    <View style = {{height: 300, backgroundColor: COLORS.primary}} />
                    <View style = {{flex: 1, backgroundColor: COLORS.white}} />
                </View>
            </View>
        </SafeAreaView>
    )
}
export default Home;