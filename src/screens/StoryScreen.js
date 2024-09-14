import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import React, { useState } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Appbar, Button, TextInput } from 'react-native-paper';

const StoryScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.fullScreen}>
      <Appbar.Header style={{
        marginBottom: 10,

      }}>
        <Appbar.BackAction onPress={() => { }} />
        <Appbar.Content title="Story" />
        <Appbar.Action icon="calendar" onPress={() => { }} />
        <Appbar.Action icon="magnify" onPress={() => { }} />
        <Appbar.Action icon="account-circle" onPress={() => { }} />
      </Appbar.Header>
      {/* IMAGE */}
      <View style={styles.coverImage}>
        <Image
          source={{
            uri: `https://i.pinimg.com/originals/80/ae/d6/80aed6c86934b5cbbd5bcb2502ea5acc.jpg`,
          }}
          style={styles.coverImage}
        />
      </View>

      <View style={styles.storytitle}>
        <Text style={{
          fontSize: 25,
        }}>
          Dr. Raman</Text>
      </View>

      {/* MAIN STORY TEXT */}
      <View>
        <Text
          style={{
            fontSize: wp(5),
            marginTop: wp(5),
            textAlign: 'center'
          }}
        >
          The story is about friendship, fear, relationship, unreliability, and
          honesty. It’s about a doctor named Dr. Raman who believes that lies
          can’t save the life of a patient and as it is traditional in a
          profession of a doctor. {`\n`}{`\n`} He should never lie to the patient means if
          someone is about to die then a doctor should tell him the truth. One
          day, he comes to know about his childhood friend, Gopal. They both
          knew each other for forty years.{`\n`}{`\n`} They met occasionally as both were
          busy with their work and families.
        </Text>


      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  fullScreen: {
    width: wp(100),
    height: hp(100),
    backgroundColor: 'pink',
    paddingHorizontal: wp(5),
    paddingVertical: wp(10),
  },


  coverImage: {
    width: wp(90),
    height: wp(90),
    backgroundColor: "red",
    // marginHorizontal: wp(5),
    borderRadius: wp(5),
    elevation: wp(5),
  },


  storytitle: {
    backgroundColor: 'powderblue',
    marginTop: 20,
    padding: 10,
    fontSize: 25,
    alignItems: 'center'
  }
});

export default StoryScreen;
