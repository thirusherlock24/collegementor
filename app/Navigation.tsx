// Navigation.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BlogsAndArticlesMain from "./screens/blogs/blogs-landing/BlogsAndArticlesMain"
// Type definition for Drawer Navigator
export type RootDrawerParamList = {
  blogs: undefined;
};

const Drawer = createDrawerNavigator<RootDrawerParamList>();

const Navigation: React.FC = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="blogs" component={BlogsAndArticlesMain} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
