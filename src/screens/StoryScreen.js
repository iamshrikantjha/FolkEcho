import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const StoryScreen = () => {
  return (
    <View style={styles.fullScreen}>
      
      {/* IMAGE */}
      <View style={styles.coverImage}>
        <Image
          source={{ uri: `https://i.pinimg.com/originals/80/ae/d6/80aed6c86934b5cbbd5bcb2502ea5acc.jpg` }}
          style={styles.coverImage}
        />
      </View>

      


    </View>
  )
}

const styles = StyleSheet.create({
  fullScreen : {
    width: wp(100),
    height: hp(100),
    // backgroundColor: 'pink',
    paddingHorizontal: wp(5),
    paddingVertical: wp(10),
  },
  coverImage: {
    width: wp(90),
    height: wp(90),
    backgroundColor: 'red',
    // marginHorizontal: wp(5),
    borderRadius: wp(5),
    elevation: wp(5),
  }
})

export default StoryScreen