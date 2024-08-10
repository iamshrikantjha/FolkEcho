import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const StoryScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.fullScreen}>
      {/* IMAGE */}
      <View style={styles.coverImage}>
        <Image
          source={{
            uri: `https://i.pinimg.com/originals/80/ae/d6/80aed6c86934b5cbbd5bcb2502ea5acc.jpg`,
          }}
          style={styles.coverImage}
        />
      </View>

      {/* MAIN STORY TEXT */}
      <View>
        <Text
          style={{
            fontSize: wp(5),
            marginTop: wp(5),
          }}
        >
          The story is about friendship, fear, relationship, unreliability, and
          honesty. It’s about a doctor named Dr. Raman who believes that lies
          can’t save the life of a patient and as it is traditional in a
          profession of a doctor, {`\n`}{`\n`} He should never lie to the patient means if
          someone is about to die then a doctor should tell him the truth. One
          day, he comes to know about his childhood friend, Gopal. They both
          knew each other for forty years.{`\n`}{`\n`} They met occasionally as both were
          busy with their work and families.
        </Text>



        <Text
          style={{
            fontSize: wp(5),
            marginTop: wp(5),
          }}
        >
          The story is about friendship, fear, relationship, unreliability, and
          honesty. It’s about a doctor named Dr. Raman who believes that lies
          can’t save the life of a patient and as it is traditional in a
          profession of a doctor, {`\n`}{`\n`} He should never lie to the patient means if
          someone is about to die then a doctor should tell him the truth. One
          day, he comes to know about his childhood friend, Gopal. They both
          knew each other for forty years.{`\n`}{`\n`} They met occasionally as both were
          busy with their work and families.
        </Text>
       
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  fullScreen: {
    width: wp(100),
    height: hp(100),
    // backgroundColor: 'pink',
    paddingHorizontal: wp(5),
    paddingVertical: wp(10),
  },
  coverImage: {
    width: wp(90),
    height: wp(90),
    backgroundColor: "red",
    // marginHorizontal: wp(5),
    borderRadius: wp(5),
    elevation: wp(5),
  },
});

export default StoryScreen;
