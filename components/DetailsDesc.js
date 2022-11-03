import { View, Text, Image } from 'react-native'
import React from 'react'
import { EthPrice, NFTTitle } from './SubInfo'
import { COLORS, SIZES, FONTS } from "../constants";

const DetailsDesc = ({data}) => {
  return (
    <>
    <View  style={{
      width: "100%",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    }}
    >
      <NFTTitle title = {data.name} 
        subtitle = {data.creator} 
        titleSize = {SIZES.extraLarge}
        subTitleSize = {SIZES.medium} 
      />
      <EthPrice price = {data.price} />
    </View>
    <View style = {{
        marginVertical: SIZES.extraLarge
    }}>
      <Text style = {{
        fontSize: SIZES.font,
        fontFamily: FONTS.semiBold,
        color: COLORS.primary,
      }}>
        Description
      </Text>
    </View>
    <View style = {{
        marginTop: 2
    }}>
      <Text style = {{
        fontSize: SIZES.small,
        fontFamily: FONTS.regular,
        color: COLORS.secondary,
        lineHeight: SIZES.large
      }}>
          {data.description}
      </Text>
    </View>
    </>
  )
}

export default DetailsDesc