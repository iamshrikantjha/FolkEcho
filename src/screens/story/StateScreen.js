import { View, Text, StyleSheet, ScrollView, Image, Pressable } from "react-native";
import { Appbar, Button, TextInput } from "react-native-paper";
import React, { useEffect, useState } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'react-native-paper';
import { fetchAllStates } from './../../config/firebaseConfig'

const StateCard = ({ item }) => {
  const navigation = useNavigation();
  const theme = useTheme();

  const state_id = item.id;
  const state_name = item.state_name;

  return (
    <Pressable
      onPress={() => navigation.navigate('StoriesScreen', {
        state_id: state_id
      })}
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
          textTransform: 'uppercase'
        }}>{state_name || 'N/A'}</Text>
      </View>
    </Pressable>
  );
};

const StateScreen = () => {
  const [states, setStates] = useState([])
  const navigation = useNavigation();
  const theme = useTheme();

  useEffect(() => {
    fetchAllStates().then((data) => {
      console.log(data);
      setStates(data);
    })

    return () => {}
  }, [])



  return (
    <>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => { }} />
        <Appbar.Content title="Find Your State" />
        <Appbar.Action icon="calendar" onPress={() => { }} />
        <Appbar.Action icon="magnify" onPress={() => { }} />
      </Appbar.Header>


      <ScrollView
        contentContainerStyle={{
          // backgroundColor: "pink",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {
          states.length === 0 ? (
            <View>
              <Text>DATA N/A</Text>
            </View>
          ): (
            states.map((item, id) => {
              return <StateCard key={id} item={item} />
            })
          )
        }
        {/* <StateCard /> */}
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