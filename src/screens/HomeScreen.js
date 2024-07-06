import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import { colorPallet } from './../theme/colorPallet'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const HomeScreen = () => {
  const [text, onChangeText] = React.useState('Tanmay');
  return (
    <View style={{
      width: wp(100),
      height: wp(60),
      backgroundColor: 'skyblue',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Text style= {{
        fontSize: wp(10),
        fontWeight: 'bold',
        color: 'white'
      }}>HomeScreen</Text>
      
    <View style={{
        width: wp(40),
        height: wp(15),
        backgroundColor: 'yellow',
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
      }}>
        
        <Text>Sign In</Text>
        <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default HomeScreen