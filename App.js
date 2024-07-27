import { StyleSheet, View} from "react-native";
import Profile from './src/screens/ProfileScreen';

const App = () => {
  return (
    <View style={styles.container}>
      <Profile />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    // justifyContent: 'center',
    paddingTop: 70,
  },
});

export default App;