import React from 'react';
// React Navigation
import {createStackNavigator} from '@react-navigation/stack';
// Components
import Notifications from '../_screens/Notifications';
import StandalonePost from '../_screens/StandalonePost';
const Stack = createStackNavigator();
const NotificationStack = ({route}) => {
  return (
    <Stack.Navigator initialRouteName="home">
      <Stack.Screen
        component={Notifications}
        name="notifications"
        options={{
          title: 'Tus Publicaciones',
          headerLeft: null,
          headerStyle: {
            height: 60,
          },
          headerTitleStyle: {
            paddingTop: 5,
          },
        }}
      />
      <Stack.Screen
        name="standalonepost"
        component={StandalonePost}
        initialParams={{
          postModal: route.params.postModal,
        }}
        options={{
          title: '156',
          headerStyle: {
            backgroundColor: '#24C6DC',
          },
          headerTintColor: '#f2f2f2',
          headerLeftContainerStyle: {
            paddingTop: 10,
          },
          headerBackTitleStyle: {
            color: '#f2f2f2',
          },
          headerTitleStyle: {
            paddingTop: 10,
            color: '#f2f2f2',
          },
        }}
        style={{paddingTop: 20}}
      />
    </Stack.Navigator>
  );
};
export default NotificationStack;
