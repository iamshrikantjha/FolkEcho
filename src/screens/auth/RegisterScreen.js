import { View, Text, StyleSheet } from 'react-native'
import { Appbar, Button, TextInput } from 'react-native-paper';
import React, { useState } from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';

const RegisterScreen = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  return (
    <View style={{
      // backgroundColor: 'navy',
    }}>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => { }} />
        <Appbar.Content title="Register" />
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
        icon="bag-personal" mode="contained" onPress={() => console.log('Signed In')}>
        Register
      </Button>

      <Button style={styles.Text_Input}
        icon="bag-personal-outline" mode="contained" onPress={() => console.log('Signed In')}>
        Sign In
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

export default RegisterScreen