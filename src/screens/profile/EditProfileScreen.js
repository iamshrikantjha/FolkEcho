import { StyleSheet, View, SafeAreaView, Image } from "react-native";
import React from "react";
import { Appbar, Button, Text, TextInput } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

// https://www.behance.net/gallery/108433365/Profile-screen?tracking_source=search_projects|profile+screen&l=3

const EditProfileScreen = ({ navigation }) => {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Appbar.Header>
          <Appbar.BackAction onPress={() => navigation.goBack()} />
          <Appbar.Content title="Your Profile" />
          <Appbar.Action icon="pencil" onPress={() => {}} />
          <Appbar.Action icon="magnify" onPress={() => {}} />
        </Appbar.Header>

        {/* PROFILE SETTINGS */}
        <View
          style={{
            width: wp(100),
          }}
        >
          <Text
            style={{
              fontWeight: "500",
              fontSize: wp(6),
              margin: wp(5),
            }}
          >
            Profile Settings
          </Text>
        </View>

        {/* PROFILE PHOTO */}
        <View
          style={{
            width: wp(100),
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: wp(30),
              height: wp(30),
              backgroundColor: "pink",
              borderRadius: wp(4),
              overflow: "hidden",
            }}
          >
            <Image
              style={{ flex: 1 }}
              source={{
                uri: "https://cbin.b-cdn.net/img/D/D%20Gukesh_JHWTS_1000x667.jpeg",
              }}
            />
          </View>
          <Text
            style={{
              marginVertical: wp(2.5),
              fontSize: wp(3.7),
            }}
          >
            change profile photo
          </Text>
        </View>

        <View
          style={{
            width: wp(100),
          }}
        ></View>

        <View>
          <TextInput
            style={{
              // borderWidth: 5,
              // borderRadius: 20,
              // margin: 10,
              // padding: 10,
            }}
          >
            First name
          </TextInput>

          <TextInput
            style={{
              // borderWidth: 5,
              // borderRadius: 20,
              // margin: 10,
              // padding: 10,
            }}
          >
            Last name
          </TextInput>

          <TextInput
            style={{
              // borderWidth: 5,
              // borderRadius: 20,
              // margin: 10,
              // padding: 10,
            }}
          >
            Email
          </TextInput>

          <Button
            style={{
              // borderWidth: 5,
              // borderColor: "black",
              // margin: 10,
              // marginTop: 80,
            }}
          >
            Save Changes
          </Button>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  profile: {
    height: 100,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "50%",
  },
  circle: {
    height: 150,
    width: 150,
    borderRadius: 75,
    backgroundColor: "yellow",
    borderColor: "black",
    borderWidth: 2,
    margin: 20,
  },
  title: {
    textAlign: "center",
    color: "powderblue",
    fontWeight: "bold",
    fontSize: 50,
  },
  textinput: {
    
  },
  text: {
  },
});

export default EditProfileScreen;
