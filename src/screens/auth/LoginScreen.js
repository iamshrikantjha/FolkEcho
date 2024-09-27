import { View, Text, StyleSheet } from 'react-native'
import { Appbar, Button, TextInput } from 'react-native-paper';
import React, { useState } from 'react'

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  return (
    <View style={{
      // backgroundColor: 'navy',
    }}>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => { }} />
        <Appbar.Content title="Sign In" />
        <Appbar.Action icon="calendar" onPress={() => { }} />
        <Appbar.Action icon="magnify" onPress={() => { }} />
      </Appbar.Header>

      <TextInput
        style={styles.Text_Input}
        label="Email"
        value={username}
        onChangeText={text => setUsername(text)}
      />

      <TextInput
        style={styles.Text_Input}
        label="Password"
        value={password}
        onChangeText={text => setPassword(text)}
      />

      {/* <TextInput
        style={styles.Text_Input}
        label="Confirm Password"
        value={password}
        onChangeText={text => setPassword(text)}
      /> */}


      <Button style={styles.Text_Input}
        icon="camera" mode="contained" onPress={() => console.log('Signed In')}>
        Sign In
      </Button>

      <Button style={styles.Text_Input}
        icon="camera" mode="contained" onPress={() => navigation.navigate("RegisterScreen")}>
        Register
      </Button>

    </View>
  )
}

const styles = StyleSheet.create({
  Text_Input: {
    marginVertical: 15,
    marginHorizontal: 20
  },
})

export default LoginScreen