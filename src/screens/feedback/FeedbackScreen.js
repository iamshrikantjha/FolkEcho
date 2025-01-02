import { View, Text } from "react-native";
import React, { useState, useEffect } from "react";
import { Appbar, Button, TextInput } from "react-native-paper";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { submitFeedback } from "../../config/firebaseConfig";

const FeedbackScreen = () => {
  const [feedback_subject, setFeedback_subject] = useState(
    "Write feedback subject"
  );
  const [feedback_body, setFeedback_body] = useState("Write feedback here");

  const [sender, setSender] = useState("Sender Name");
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    console.log(feedback_subject, feedback_body, sender);
    try {
      setLoading(true);

      submitFeedback(feedback_subject, feedback_body, sender).then(() => {
        console.log(data);
      });
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }

    setFeedback_body("");
    setFeedback_subject("");
    setSender("")
  };

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
        <Appbar.Content title="Feedback" />
        <Appbar.Action icon="calendar" onPress={() => {}} />
        <Appbar.Action icon="magnify" onPress={() => {}} />
        <Appbar.Action icon="account-circle" onPress={() => {}} />
      </Appbar.Header>
      <View
        style={{
          paddingHorizontal: wp(5),
          gap: wp(5),
        }}
      >
        <TextInput
          label="Feedback Subject"
          value={feedback_subject}
          onChangeText={(text) => setFeedback_subject(text)}
        />

        <TextInput
          label="Sender"
          value={sender}
          onChangeText={(text) => setSender(text)}
        />

        <TextInput
          label="Feedback Body"
          value={feedback_body}
          multiline={true}
          onChangeText={(text) => setFeedback_body(text)}
        />

        <Button
          icon="email-send"
          loading={loading}
          mode="contained"
          onPress={() => handleSubmit()}
        >
          Submit feedback
        </Button>
      </View>
    </View>
  );
};

export default FeedbackScreen;
