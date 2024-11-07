// App/Navigation.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { BlogsAndArticlesMain,BlogDetailScreen } from './screens/blogs';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from './types'; 

export type RootDrawerParamList = {
  blogs: undefined;
};


const Stack = createStackNavigator<RootStackParamList>(); //

const Navigation: React.FC = () => {
  return (
    <NavigationContainer independent={true}>
    <Stack.Navigator>
      <Stack.Screen name="BlogsMain" component={BlogsAndArticlesMain} options={{ title: 'Blogs' }} />
      <Stack.Screen name="BlogDetail" component={BlogDetailScreen} options={{ title: 'Blog Detail' }} />
    </Stack.Navigator>
  </NavigationContainer>
  );
};

export default Navigation;
