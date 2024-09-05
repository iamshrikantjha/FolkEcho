import { View, Text, StyleSheet } from 'react-native'
import { Appbar, Button, TextInput } from 'react-native-paper';
import React, { useState } from 'react'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const ForgotPassword = () => {
    const [username, setUsername] = useState('')
    const [newpassword, setnewPassword] = useState('')
    return (
        <View style={{
            backgroundColor: 'powderblue',
            height: hp(100),
            width: wp(100),
        }}>

            <Appbar.Header>
                <Appbar.BackAction onPress={() => { }} />
                <Appbar.Content title="Forgot Password" />
                <Appbar.Action icon="calendar" onPress={() => { }} />
                <Appbar.Action icon="magnify" onPress={() => { }} />
            </Appbar.Header>

            <Text style={{
                color: 'navy',
                alignSelf: 'center',
                fontSize: wp(8.5),
                fontWeight: 'bold',
            }}>
                Reset your password
            </Text>

            <TextInput
                style={styles.Text_Input}
                label="Email"
                value={username}
                onChangeText={text => setUsername(text)}
            />

            <TextInput
                style={styles.Text_Input}
                label="New Password"
                value={newpassword}
                onChangeText={text => setnewPassword(text)}
            />

            <TextInput
                style={styles.Text_Input}
                label="Confirm New Password"
                value={newpassword}
                onChangeText={text => setnewPassword(text)}
            />

            <Button style={styles.Text_Input}
                icon="backup-restore" mode="contained" onPress={() => console.log('Set New Password')}>
                Reset Password
            </Button>

        </View>
    )
}

const styles = StyleSheet.create({
    Text_Input: {
        marginVertical: 15,
        marginHorizontal: 20,
        // borderRadius: 20,
    },
})

export default ForgotPassword