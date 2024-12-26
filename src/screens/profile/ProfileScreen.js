import React from "react";
import { View, StyleSheet } from "react-native";
import { Avatar, Text, Card, Button, Appbar } from "react-native-paper";

const ProfileScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Appbar />
      {/* Header Section */}
      <View style={styles.header}>
        <Avatar.Image
          size={100}
          source={{ uri: "https://via.placeholder.com/100" }} // Replace with user's avatar URL
        />
        <Text style={styles.name}>John Doe</Text>
        <Text style={styles.email}>johndoe@example.com</Text>
      </View>

      {/* Details Section */}
      <Card style={styles.card}>
        <Card.Title title="Profile Information" />
        <Card.Content>
          <Text style={styles.infoLabel}>Name</Text>
          <Text style={styles.infoText}>John Doe</Text>
          <Text style={styles.infoLabel}>Email</Text>
          <Text style={styles.infoText}>johndoe@example.com</Text>
          <Text style={styles.infoLabel}>Phone</Text>
          <Text style={styles.infoText}>+1 234 567 890</Text>
          <Text style={styles.infoLabel}>Address</Text>
          <Text style={styles.infoText}>1234 Elm Street, Springfield</Text>
        </Card.Content>
      </Card>

      {/* Edit Button */}
      <Button
        mode="contained"
        style={styles.button}
        onPress={() => navigation.navigate("EditProfileScreen")}
      >
        Edit Profile
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    alignItems: "center",
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 10,
  },
  email: {
    fontSize: 16,
    color: "gray",
  },
  card: {
    marginBottom: 20,
    padding: 10,
    borderRadius: 8,
    elevation: 3,
  },
  infoLabel: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 10,
  },
  infoText: {
    fontSize: 16,
    color: "gray",
  },
  button: {
    marginTop: 20,
  },
});

export default ProfileScreen;
