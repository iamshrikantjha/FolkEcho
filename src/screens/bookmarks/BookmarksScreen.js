import { View, Text } from "react-native";
import React from "react";
import { Appbar } from "react-native-paper";

const BookmarksScreen = () => {
  return (
    <View>
      <Appbar.Header
        style={
          {
            // marginBottom: 10,
          }
        }
      >
        <Appbar.BackAction onPress={() => {}} />
        <Appbar.Content title="Bookmarks" />
        <Appbar.Action icon="calendar" onPress={() => {}} />
        <Appbar.Action icon="magnify" onPress={() => {}} />
        <Appbar.Action icon="account-circle" onPress={() => {}} />
      </Appbar.Header>
      <Text>BookmarksScreen</Text>
    </View>
  );
};

export default BookmarksScreen;
