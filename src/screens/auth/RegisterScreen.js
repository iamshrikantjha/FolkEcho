// RegisterScreen.js
import React, { useState } from "react";
import { View, Alert, Image } from "react-native";
import { Button, TextInput, useTheme, Switch, Text } from "react-native-paper";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import Logo from './../../assets/logo.png'

const RegisterScreen = ({ navigation }) => {
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("e8@e.com");
  const [password, setPassword] = useState("123456789");
  const [name, setName] = useState("namexyz");
  const [role, setRole] = useState(isSwitchOn ? "coach" : "player");
  const theme = useTheme();

  const handleSignup = async () => {
  };

  return (
    <>
      <View
        style={{
          width: wp(85),
          alignSelf: "center",
          alignItems: "center",
          justifyContent: "center",
          flex: 1,
        }}
      >
        <Image
          style={{
            width: wp(25),
            height: wp(25),
            marginBottom: wp(7),
          }}
          resizeMode="contain"
          source={Logo}
        />
        <Text
          style={{
            fontWeight: "bold",
            fontSize: wp(7),
            alignSelf: "center",
            marginBottom: wp(3),
          }}
        >
          Create Account
        </Text>
        <TextInput
          label="Name"
          value={name}
          mode="outlined"
          style={{
            width: wp(70),
            marginBottom: wp(5),
          }}
          onChangeText={(text) => setName(text)}
        />
        <TextInput
          label="Email"
          value={email}
          mode="outlined"
          style={{
            width: wp(70),
          }}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          label="Password"
          mode="outlined"
          value={password}
          style={{
            width: wp(70),
            marginTop: wp(5),
          }}
          onChangeText={(text) => setPassword(text)}
        />

        <Text
          onPress={() => navigation.navigate("ForgotPassword")}
          style={{
            fontSize: wp(3.2),
            alignSelf: "flex-end",
            marginRight: wp(7),
            marginTop: wp(2),
            // color: theme.colors.gray,
          }}
        >
          Forgot password
        </Text>

        <Button
          loading={loading}
          mode="contained"
          style={{
            width: wp(70),
            borderRadius: wp(2),
            marginTop: wp(6),
            paddingVertical: wp(1),
            // backgroundColor: colorPallet.PRIMARY_COLOR,
          }}
          onPress={handleSignup}
        >
          Register
        </Button>

        <Text
          onPress={() => navigation.navigate("LoginScreen")}
          style={{
            fontSize: wp(3.2),
            marginRight: wp(7),
            marginTop: wp(3),
            // color: theme.colors.gray,
          }}
        >
          Already have an account?{" "}
          <Text
            style={{
              fontWeight: "bold",
              // color: colorPallet.PRIMARY_COLOR,
            }}
          >
            Sign In
          </Text>
        </Text>
      </View>
    </>
  );
};

export default RegisterScreen;
