import { View, Text, StyleSheet, ScrollView, Image, Pressable } from "react-native";
import { Appbar, Button, TextInput } from "react-native-paper";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'react-native-paper';


const StateCard = () => {
  const navigation = useNavigation();
  const theme = useTheme();

  return (
    <Pressable
      onPress={() => navigation.navigate('StoryScreen')}
      style={{
        width: wp(50),
        height: wp(50),
        padding: wp(3),
        backgroundColor: theme.colors.surface,
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
          gap: wp(2),
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
        <Text style={{
          letterSpacing: wp(0.7),
          textAlign: 'center',
          flexWrap: 'wrap',
        }}>UTTAR PRADESH</Text>
      </View>
    </Pressable>
  );
};

const StateScreen = () => {
  return (
    <>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => {}} />
        <Appbar.Content title="Find Your State" />
        <Appbar.Action icon="calendar" onPress={() => {}} />
        <Appbar.Action icon="magnify" onPress={() => {}} />
      </Appbar.Header>


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
        <StateCard />
        <StateCard />
        <StateCard />
        <StateCard /><StateCard />
        <StateCard />
        <StateCard />
        <StateCard />
      </ScrollView>
    </>
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

export default StateScreen;