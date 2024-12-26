import { View, Alert, Image } from "react-native";
import React, { useState } from "react";
import { Button, TextInput, Text } from "react-native-paper";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useTheme } from "react-native-paper";
import Logo from './../../assets/logo.png'

const LoginScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const [text, setText] = useState("");
  const theme = useTheme();


  // michael@mail.com
  // bob@mail.com

  // const [email, setEmail] = useState("bob@mail.com");
  const [email, setEmail] = useState("michael@mail.com");
  const [password, setPassword] = useState("123456789");
  const [error, setError] = useState("");

  const handleLogin = async () => {
  };

  return (
    <>
      <View
        style={{
          width: wp(85),
          height: hp(90),
          alignSelf: "center",
          alignItems: "center",
          justifyContent: "center",
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
            // color: colorPallet.PRIMARY_COLOR,
            marginBottom: wp(3),
          }}
        >
          Welcome back
        </Text>
        <TextInput
          label="Email"
          value={email}
          mode="outlined"
          style={{
            width: wp(70),
          }}
          onChangeText={(email) => setEmail(email)}
        />
        <TextInput
          label="Password"
          mode="outlined"
          secureTextEntry={true}
          value={password}
          style={{
            width: wp(70),
            marginTop: wp(5),
          }}
          onChangeText={(password) => setPassword(password)}
        />

        <Text
          onPress={() => navigation.navigate("ForgotPassword", {})}
          style={{
            fontSize: wp(3.2),
            alignSelf: "flex-end",
            marginRight: wp(7),
            marginTop: wp(2),
            color: theme.colors.gray,
          }}
        >
          Forgot password
        </Text>

        <Button
          onPress={handleLogin}
          loading={loading}
          // icon="camera"
          mode="contained"
          style={{
            width: wp(70),
            borderRadius: wp(2),
            marginTop: wp(6),
            paddingVertical: wp(1),
            // backgroundColor: colorPallet.PRIMARY_COLOR,
          }}
          // onPress={() => console.log("Pressed")}
        >
          Login
        </Button>

        <Text
          onPress={() => navigation.navigate("RegisterScreen", {})}
          style={{
            fontSize: wp(3.2),
            marginRight: wp(7),
            marginTop: wp(3),
            color: theme.colors.gray,
          }}
        >
          Don't have an account?{" "}
          <Text
            style={{
              fontWeight: "bold",
              // color: colorPallet.PRIMARY_COLOR,
            }}
          >
            Sign up
          </Text>
        </Text>
      </View>
    </>
  );
};

export default LoginScreen;
