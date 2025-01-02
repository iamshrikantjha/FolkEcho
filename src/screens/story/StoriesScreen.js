import { View, Text, StyleSheet, ScrollView, Image, Pressable } from "react-native";
import { Appbar, Avatar, Button, Card, TextInput } from "react-native-paper";
import React, { useState, useEffect } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { fetchStoriesForState } from "../../config/firebaseConfig";
import { useNavigation, useRoute } from "@react-navigation/native";


const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const StoryCard = ({ item }) => {
  const navigation = useNavigation();
  const route = useRoute();
  const { state_id } = route.params;


  const story_id = item.id;
  const story_name = item.title;
  const story_desc = item.desc;
  const story_image = item.image;

  return (
    <Pressable onPress={() => navigation.navigate('StoryScreen', {
      story_id: story_id,
      state_id: state_id
    })}>
    <Card style={{
      marginHorizontal: wp(5),
      paddingHorizontal: wp(3),
    }}>
      <Card.Title
        title={story_name || "Story Title"}
        subtitle="State Name"
        left={LeftContent}
      />
      <Card.Content style={{
        gap: wp(1),
      }}>
        {/* <Text variant="titleLarge">Story title</Text> */}
        <Text variant="bodyMedium">{story_desc || 'Story description NA'}</Text>
      </Card.Content>
      <Card.Cover style={{
        marginVertical: wp(2),
        paddingHorizontal: wp(2),
      }} source={{ uri: story_image || "https://picsum.photos/700" }} />
      <Card.Actions>
        {/* <Button>Cancel</Button> */}
        <Button>Read Now</Button>
      </Card.Actions>
    </Card>
    </Pressable>
  );
};

const StoriesScreen = ({ route }) => {
  const { state_id } = route.params;
  console.log('State Id ', state_id);

  const [stories, setStories] = useState([])

  useEffect(() => {
    fetchStoriesForState(state_id).then((data) => {
      console.log(data);
      setStories(data);
      // setStates(data);
    })

    return () => { }
  }, [])

  return (
    <>
      <Appbar.Header
        style={
          {
            // backgroundColor: "powderblue",
          }
        }
      >
        <Appbar.BackAction onPress={() => { }} />
        <Appbar.Content title="Find Your Story" />
        <Appbar.Action icon="calendar" onPress={() => { }} />
        <Appbar.Action icon="magnify" onPress={() => { }} />
      </Appbar.Header>

      <ScrollView contentContainerStyle={{
        gap: wp(5),
      }}>
        {
          stories.length === 0 ? (
            <View>
              <Text>STORIES N/A</Text>
            </View>
          ) : (
            stories.map((item, id) => {
              return <StoryCard key={id} item={item} />
            })
          )
        }
        {/* <StoryCard /> */}
      </ScrollView>
    </>
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
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    elevation: 7,
  },
});

export default StoriesScreen;
