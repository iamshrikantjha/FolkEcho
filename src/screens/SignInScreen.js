import { View, Text } from 'react-native'
import { Appbar, Button, TextInput } from 'react-native-paper';
import React, { useState } from 'react'

const SignInScreen = () => {
  const [username, setUsername] = useState('')
  return (
    <View>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => { }} />
        <Appbar.Content title="Sign In" />
        <Appbar.Action icon="calendar" onPress={() => { }} />
        <Appbar.Action icon="magnify" onPress={() => { }} />
      </Appbar.Header>

      <TextInput
        label="Email"
        value={username}
        onChangeText={text => setUsername(text)}
      />


      <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
        Press me
      </Button>

      <Text>SignInScreen</Text>
    </View>
  )
}

export default SignInScreen