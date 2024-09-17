import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { Appbar, Button, TextInput } from "react-native-paper";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const StateCard = () => {
  return (
    <View
      style={{
        width: wp(50),
        height: wp(50),
        // backgroundColor: "skyblue",
        padding: wp(3),
      }}
    >
      <View
        style={{
          flex: 1,
          backgroundColor: "white",
          borderRadius: wp(3),
          elevation: 8,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          style={{
            // flex: 1,
            width: wp(30),
            height: wp(30),
          }}
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/2Uttar_pradesh_map_stub_with_district.svg/606px-2Uttar_pradesh_map_stub_with_district.svg.png",
          }}
        />
      </View>
    </View>
  );
};

const StoriesScreen = () => {
  return (
    <View
      style={{
        // flex: 1,
        width: wp(100),
        height: hp(100),
        // backgroundColor: "pink",
      }}
    >
      <Appbar.Header>
        <Appbar.BackAction onPress={() => {}} />
        <Appbar.Content title="Find Your State" />
        <Appbar.Action icon="calendar" onPress={() => {}} />
        <Appbar.Action icon="magnify" onPress={() => {}} />
      </Appbar.Header>
<<<<<<< Updated upstream
      <ScrollView
        contentContainerStyle={{
          // backgroundColor: "pink",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        <StateCard />
        <StateCard />
        <StateCard />
        <StateCard />
      </ScrollView>
=======

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          label="Search for a Story"
        />
        <Button
          style={styles.button}
          icon="magnify"
          mode="contained"
          onPress={() => console.log('Searched for story')}>
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

>>>>>>> Stashed changes
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
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
