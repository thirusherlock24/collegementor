// App/Navigation.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { BlogsAndArticlesMain } from './screens/blogs';

export type RootDrawerParamList = {
  blogs: undefined;
};

const Drawer = createDrawerNavigator<RootDrawerParamList>();

const Navigation: React.FC = () => {
  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator>
        <Drawer.Screen name="blogs" component={BlogsAndArticlesMain} options={{ title: 'Blogs' }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
