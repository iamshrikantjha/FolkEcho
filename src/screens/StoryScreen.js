import { View, Text, StyleSheet, Image, ScrollView, flex } from 'react-native';
import React from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const StoryScreen = () => {
  return (
    <View style={styles.fullScreen}>
      {/* IMAGE */}
      <View style={styles.coverImage}>
        <Image
          source={{ uri: `https://i.pinimg.com/originals/80/ae/d6/80aed6c86034b5cbbd5bcb2502ea5acc.jpg` }}
          style={styles.coverImage}
        />
      </View>
      <Text style={styles.StoryTitle}>An Astrologer's Day</Text>
      <Text style={styles.StoryAuthor}>RK Narayan</Text>
      <Text style={styles.StoryText}>
        Punctually at midday he opened his bag and spread out his professional equipment,
        which consisted of a dozen cowrie shells, a square piece of cloth with obscure mystic
        charts on it, a notebook, and a bundle of palmyra writing.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  fullScreen: {
    width: wp(100),
    height: hp(100),
    backgroundColor: 'pink',
    paddingHorizontal: wp(5),
    paddingVertical: wp(10),
  },
  coverImage: {
    width: wp(90),
    height: wp(90),
    backgroundColor: 'red',
    // marginHorizontal: wp(5),
    borderRadius: wp(5),
    elevation: wp(10),
    paddingBottom: wp(5),
  },
  StoryText: {
    paddingTop: wp(2),
    fontSize: wp(5),
    color: 'purple',
  },
  StoryTitle: {
    // height: 1,
    fontSize: wp(6),
    fontWeight: 'bold',
    marginVertical: wp(5),
    color: 'navy',
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // width: wp(10),
    backgroundColor: 'powderblue',
    padding: 5,
  },
  StoryAuthor: {
    fontSize: wp(6),
    fontWeight: 'bold',
    color: 'navy',
    padding: 5,
    backgroundColor: 'powderblue',
  },
});

export default StoryScreen;