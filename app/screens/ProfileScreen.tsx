import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { RootDrawerParamList } from '../Navigation';

type ProfileScreenProps = DrawerScreenProps<RootDrawerParamList, 'Profile'>;

const ProfileScreen: React.FC<ProfileScreenProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Profile Screen!</Text>
      <Button
        title="Go back to Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default ProfileScreen;
