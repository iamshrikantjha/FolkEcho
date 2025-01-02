import { View, StyleSheet, Image, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Appbar, Button, TextInput, Text } from "react-native-paper";
import { fetchStoryById } from "../../config/firebaseConfig";

const StoryScreen = ({ route }) => {
  const { story_id, state_id } = route.params;
  console.log("State Id ", story_id);

  const [story, setStory] = useState([]);

  useEffect(() => {
    try {
      fetchStoryById(state_id, story_id).then((data) => {
        console.log('the data ', data.title);
        setStory(data);
        // setStates(data);
      }).then(() => {
        console.log(story);
      });
    } catch (error) {
      console.log(error);
    }

    return () => {};
  }, []);

  return (
    <>
      <Appbar.Header
        style={
          {
            // marginBottom: 10,
          }
        }
      >
        <Appbar.BackAction onPress={() => {}} />
        <Appbar.Content title="Story" />
        <Appbar.Action icon="calendar" onPress={() => {}} />
        <Appbar.Action icon="magnify" onPress={() => {}} />
        <Appbar.Action icon="account-circle" onPress={() => {}} />
      </Appbar.Header>
      <ScrollView contentContainerStyle={styles.fullScreen}>
        {/* IMAGE */}
        <View style={styles.coverImage}>
          <Image
            source={{
              uri: story?.image || `https://i.pinimg.com/originals/80/ae/d6/80aed6c86934b5cbbd5bcb2502ea5acc.jpg`,
            }}
            style={styles.coverImage}
          />
        </View>

        <View style={styles.storytitle}>
          <Text
            style={{
              fontSize: 25,
            }}
          >
            { story.title || 'N/A TITLE' }
          </Text>
        </View>

        {/* MAIN STORY TEXT */}
        <View>
          <Text
            style={{
              fontSize: wp(5),
              marginTop: wp(5),
              textAlign: "center",
            }}
          >
            {
              story.body || 'N/A CONTENT'
            }
          </Text>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  fullScreen: {
    width: wp(100),
    // height: hp(100),
    // backgroundColor: "pink",
    paddingHorizontal: wp(5),
    paddingVertical: wp(10),
  },

  coverImage: {
    width: wp(90),
    height: wp(90),
    // backgroundColor: "red",
    // marginHorizontal: wp(5),
    borderRadius: wp(5),
    elevation: wp(5),
  },

  storytitle: {
    // backgroundColor: "powderblue",
    marginTop: 20,
    padding: 10,
    fontSize: 25,
    alignItems: "center",
  },
});

export default StoryScreen;
