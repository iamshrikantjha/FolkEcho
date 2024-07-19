import { StyleSheet } from 'react-native';
import { View, Text, } from 'react-native';
import React from 'react'
import { SafeAreaView } from 'react-native';
import { ScrollView } from 'react-native';

export default function Profile() {
  return(
    <View style={styles.profile}>
      <Text>Your Profile</Text>
      <View style={styles.circle}></View>
    </View>
  )
}

const ProfileScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView>
    <View style={styles.profile}>
      <Text style={styles.title}>Your Profile</Text>
      <View style={styles.circle}>
      </View>
    </View>
    </ScrollView>
    </SafeAreaView>
  )
}

const styles= StyleSheet.create({
  profile: {
    height: 40,
    width: 50,
  },
  circle:{
    height: 20,
    width: 10,
    borderRadius: 50,
    color: 'coral'
  },
  title:{
    textAlign: 'center',
    color: 'pink',
    fontWeight: 'bold',
    fontSize: 20,
  }
})