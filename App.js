import { UseState } from 'expo-status-bar';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import Profile from './src/screens/ProfileScreen';
import { SafeAreaView } from 'react-native';

export default function App() {
  return (
    // <SafeAreaView>
    <View style={styles.container}>
      <View>
        <Profile />
      </View>
    </View>
    // {/* </SafeAreaView> */}
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'powderblue',
    alignItems: 'center',
    
  },
});
