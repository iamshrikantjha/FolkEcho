import { StyleSheet, Text, View, SafeAreaView, ScrollView, TextInput } from 'react-native';
import React from 'react';
import { Appbar, Button, } from "react-native-paper";
import { SafeAreaProvider } from 'react-native-safe-area-context';


const ProfileScreen = () => {
  return(
    <SafeAreaProvider>
    <SafeAreaView>

      <Appbar.Header>
        <Appbar.BackAction onPress={() => {}} />
        <Appbar.Content title="Your Profile" />
        <Appbar.Action icon="pencil" onPress={() => {}} />
        <Appbar.Action icon="magnify" onPress={() => {}} />
      </Appbar.Header>

    <View style={styles.profile}>
      {/* <Text style={styles.title}>Your Profile</Text> */}
      <View style={styles.circle}></View>

      <Text style={styles.text}>Your Username:</Text>
      <TextInput 
        style={styles.textinput} 
        placeholder='Username...'
      />

      <Text style={styles.text}>Your Email-id:</Text>
      <TextInput 
        style={styles.textinput} 
        placeholder='abcd@gmail.com'
      />

      <Text style={styles.text}>Your password:</Text>
      <TextInput 
        style={styles.textinput} 
        placeholder='password...'
      />

    </View>
    
    </SafeAreaView>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  profile: {
    height: 100,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:'50%',
  },
  circle: {
    height: 150,
    width: 150,
    borderRadius: 75,
    backgroundColor: 'yellow',
    borderColor: 'black',
    borderWidth: 2,
    margin: 20
  },
  title: {
    textAlign: 'center',
    color: 'powderblue',
    fontWeight: 'bold',
    fontSize: 50,
  },
  textinput: {
    borderWidth: 2,
    borderColor: 'white',
    borderStyle: 'dashed',
    backgroundColor: 'coral',
    padding: 10,
    borderRadius: 10,
  },
  text: {
    margin: 10,
    color: 'skyblue',
    fontSize: 30,
    fontWeight: 'bold',
  }
});

export default ProfileScreen;