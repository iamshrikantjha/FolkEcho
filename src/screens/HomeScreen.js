import { View, Text } from 'react-native'
import React from 'react'
import { colorPallet } from './../theme/colorPallet'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const HomeScreen = () => {
  return (
    <View style={{
      width: wp(100),
      height: wp(50),
      backgroundColor: 'skyblue',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Text style= {{
        fontSize: wp(10),
        fontWeight: 'bold',
        color: 'white'
      }}>HomeScreen</Text>
    </View>
  )
}

export default HomeScreen