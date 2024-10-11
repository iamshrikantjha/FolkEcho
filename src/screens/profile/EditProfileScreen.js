import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TextInput,
} from "react-native";
import React from "react";
import { Appbar, Button } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";

// https://www.behance.net/gallery/108433365/Profile-screen?tracking_source=search_projects|profile+screen&l=3

const EditProfileScreen = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Appbar.Header>
          <Appbar.BackAction onPress={() => {}} />
          <Appbar.Content title="Your Profile" />
          <Appbar.Action icon="pencil" onPress={() => {}} />
          <Appbar.Action icon="magnify" onPress={() => {}} />
        </Appbar.Header>

        {/* PROFILE SETTINGS */}
        <View style={{
            width: wp(100),
        }}>
            <Text style={{
                fontWeight: '500',
                fontSize: wp(6),
                margin: wp(5),
            }}>Profile Settings</Text>
        </View>

        {/* PROFILE PHOTO */}
        <View style={{
            width: wp(100),
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <View style={{ 
                width: wp(30),
                height: wp(30),
                backgroundColor: 'pink',
                borderRadius: wp(4),
                overflow: 'hidden',
            }}>
                <Image style={{ flex: 1 }} source={{ uri : 'https://cbin.b-cdn.net/img/D/D%20Gukesh_JHWTS_1000x667.jpeg' }} />
            </View>
            <Text style={{
                marginVertical: wp(2.5),
                fontSize: wp(3.7),
            }}>change profile photo</Text>
        </View>



            <View style={{
                width: wp(100),
            }}>

            </View>
        



        <View style={styles.profile}>
          {/* <Text style={styles.title}>Your Profile</Text> */}
          <View style={styles.circle}>
            <TextInput
              style={{
                borderColor: "green",
                borderWidth: 5,
                alignSelf: "",
              }}
            ></TextInput>
          </View>

          <Text style={styles.text}>Your Username:</Text>
          <TextInput style={styles.textinput} placeholder="Username..." />

          <Text style={styles.text}>Your Email-id:</Text>
          <TextInput style={styles.textinput} placeholder="abcd@gmail.com" />

          <Text style={styles.text}>Your password:</Text>
          <TextInput style={styles.textinput} placeholder="password..." />
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
    borderWidth: 2,
    borderColor: "white",
    borderStyle: "dashed",
    backgroundColor: "coral",
    padding: 10,
    borderRadius: 10,
  },
  text: {
    margin: 10,
    color: "skyblue",
    fontSize: 30,
    fontWeight: "bold",
  },
});

export default EditProfileScreen;
