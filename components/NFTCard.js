import { View, Image, Text} from 'react-native'
import React from 'react'
import  {useNavigation} from "@react-navigation/native"
import { COLORS, SIZES, SHADOWS, assets } from "../constants";
import { CircleButton } from './Button';
import {NFTTitle, EthPrice, EndDate, SubInfo} from './SubInfo'
const NFTCard = ({data}) => {
  const navigation = useNavigation()

  return (
    <View style = {{
      backgroundColor: COLORS.white,
      borderRadius: SIZES.font,
      marginBottom: SIZES.extraLarge,
      margin: SIZES.base,
      ...SHADOWS.dark
    }}>
      <View style = {{width: "100%", height: 250}}>
        <Image source={data.image}
          resizeMode = "cover"
          style = {{width: "100%", height: "100%", borderTopLeftRadius: SIZES.font, 
          borderTopRightRadius: SIZES.font
        }}
        />
      </View>
      <CircleButton imgUrl = {assets.heart} top = {10} right = {10} />
      <SubInfo />
      <View style = {{padding: SIZES.font, width: '100%'}}>
        <NFTTitle title = {data.name} subtitle = {data.creator} titleSize = {SIZES.large} 
          subTitleSize = {SIZES.small}
        />
      </View>
    </View>
  )
}

export default NFTCard