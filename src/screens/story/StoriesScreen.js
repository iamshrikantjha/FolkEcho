import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { Appbar, Button, TextInput } from "react-native-paper";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const StoriesScreen = () => {
  return (
    
      <View
        style={{
          // flex: 1,
          width: wp(100),
          height: hp(100),
          backgroundColor: "skyblue",
        }}
      >
<ScrollView>
        <Appbar.Header style={{
          backgroundColor: "powderblue"
        }}>
          <Appbar.BackAction onPress={() => { }} />
          <Appbar.Content title="Find Your Story" />
          <Appbar.Action icon="calendar" onPress={() => { }} />
          <Appbar.Action icon="magnify" onPress={() => { }} />
        </Appbar.Header>

        <TextInput 
        style={styles.textInput} 
        placeholder='Search for your story'
      />

      <View style={styles.storyBox}></View>

      <View style={styles.storyBox}></View>

      <View style={styles.storyBox}></View>

      <View style={styles.storyBox}></View>

      </ScrollView>
      </View>
    
  );
};

const styles = StyleSheet.create({
  textInput: {
    margin: 20,
  },
  storyBox: {
    margin: 30,
    backgroundColor: "pink",
    width: wp(40),
    height: wp(40),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    elevation: 7,
  }
});

export default StoriesScreen;
