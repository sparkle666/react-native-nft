import { View, Text, Image, TextInput } from 'react-native'
import {COLORS, FONTS, SIZES, assets} from '../constants'

const HomeHeader = ({search}) => {
  return (
    <View style = {{
      backgroundColor: COLORS.primary,
      padding: SIZES.font
    }}>
      <View style = {{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
      }}>
        <Image source={assets.logo} resizeMode = "contain" style = {{width: 90, height: 25}} />
        <View style = {{width: 45, height: 45}}>
          <Image source={assets.person01} resizeMode = "cover" style = {{
            width: "100%",
            height: "100%"
          }} />
          <Image source={assets.badge} resizeMode = "cover" style = {{
            position: "absolute",
            right: 0,
            bottom: 0
          }} />
        </View>
      </View>
      <View style = {{marginVertical: SIZES.font}}>
        <Text style = {{color: "white", fontFamily: FONTS.regular, fontSize: SIZES.medium }}>
          Hello, Sparkles 👋🏻
        </Text>
        <Text style = {{
          color: "white", fontFamily: FONTS.bold, 
          fontSize: SIZES.large, 
          marginTop: SIZES.small }}>
          Let's find a masterpiece...
        </Text>
      </View>
      <View style = {{
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: COLORS.gray,
        paddingVertical: SIZES.small,
        paddingHorizontal: SIZES.small - 2,
        borderRadius: SIZES.small
      }}>
        <Image source={assets.search} resizeMode = "cover" style = {{
          width: 20,
          height: 20, 
          marginRight: 16
        }} />
        <TextInput placeholder='Enter NFT to search...' 
        placeholderTextColor = "white"
        style ={{flex: 1, color: "white"}} 
        onChangeText = {search} />
      </View>
    </View>
  )
}

export default HomeHeader