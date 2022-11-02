import { Text, View, Image, FlatList, StatusBar, SafeAreaView } from "react-native";
import {COLORS, SIZES, FONTS, SHADOWS} from "../constants"
import {SubInfo, RectButton, CircleButton, FocusedStatusBar, DetailsDesc, DetailsBid} from "../components"

const Details = ({route, navigation}) => {
    console.log(route)
    return (
        <SafeAreaView style= {{flex: 1}}>
            <FocusedStatusBar barStyle = "dark-content" backgroundColor = "transparent" 
            translucent = {true}
            />
            <View style = {{
                 width: "100%",
                 position: "absolute",
                 bottom: 0,
                 paddingVertical: SIZES.font,
                 justifyContent: "center",
                 alignItems: "center",
                 backgroundColor: "rgba(255,255,255,0.5)",
                 zIndex: 1,
            }}>
                <RectButton minWidth={150} fontSize = {SIZES.large} {...SHADOWS.dark} />
            </View>
        </SafeAreaView>
    )
}
export default Details;