import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { Appbar, Avatar, Button, Card, TextInput } from "react-native-paper";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";


const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const StoryCard = () => {
  return (
    <Card style={{
      marginHorizontal: wp(5),
      paddingHorizontal: wp(3),
    }}>
      <Card.Title
        title="Story Title"
        subtitle="State Name"
        left={LeftContent}
      />
      <Card.Content style={{
        gap: wp(1),
      }}>
        {/* <Text variant="titleLarge">Story title</Text> */}
        <Text variant="bodyMedium">Story description</Text>
      </Card.Content>
      <Card.Cover style={{
        marginVertical: wp(2),
        paddingHorizontal: wp(2),
      }} source={{ uri: "https://picsum.photos/700" }} />
      <Card.Actions>
        {/* <Button>Cancel</Button> */}
        <Button>Read Now</Button>
      </Card.Actions>
    </Card>
  );
};

const StoriesScreen = () => {
  return (
    <View
      style={{
        width: wp(100),
        height: hp(100),
      }}
    >
      <Appbar.Header
        style={
          {
            // backgroundColor: "powderblue",
          }
        }
      >
        <Appbar.BackAction onPress={() => {}} />
        <Appbar.Content title="Find Your Story" />
        <Appbar.Action icon="calendar" onPress={() => {}} />
        <Appbar.Action icon="magnify" onPress={() => {}} />
      </Appbar.Header>

      <ScrollView contentContainerStyle={{
        gap: wp(5),
      }}>
        <StoryCard />
        <StoryCard />
        <StoryCard />
        <StoryCard />
        <StoryCard />
        <StoryCard />
        <StoryCard />
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
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    elevation: 7,
  },
});

export default StoriesScreen;
