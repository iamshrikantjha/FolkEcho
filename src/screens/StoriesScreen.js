import { View, Text, StyleSheet } from 'react-native';
import { Appbar, Button, TextInput } from 'react-native-paper';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { ScrollView } from 'react-native-web';

const StoriesScreen = () => {
  return (
    // <ScrollView>
    <View style={{
      backgroundColor: 'powderblue',
      width: wp(100),
      height: hp(100),
    }}>

      <Appbar.Header style={{
        backgroundColor: 'skyblue',
        height: 50,
      }}>
        <Appbar.BackAction onPress={() => { }} />
        <Appbar.Content title="Stories from different states of India" />
        <Appbar.Action icon="account-circle" onPress={() => { }} />
        <Appbar.Action icon="home" onPress={() => { }} />
      </Appbar.Header>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          label="Search for a Story"
        />
        <Button
          style={styles.button}
          icon="magnify"
          mode="contained"
          onPress={() => console.log('Set New Password')}>
          Search
        </Button>
      </View>

      <View style={{
        backgroundColor: 'purple',
        width: wp(40),
        height: hp(20),
        margin: 40,
        alignSelf: 'center',
      }}>
      </View>

      <View style={{
        backgroundColor: 'purple',
        width: wp(40),
        height: hp(20),
        margin: 40,
        alignSelf: 'center',
      }}>
      </View>

      <View style={{
        backgroundColor: 'purple',
        width: wp(40),
        height: hp(20),
        margin: 40,
        alignSelf: 'center',
      }}>
      </View>

    </View>
    // </ScrollView>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginHorizontal: 20,
  },
  textInput: {
    flex: 1,
    marginRight: 10,
  },
  button: {
    flexShrink: 1,
  },
});

export default StoriesScreen;