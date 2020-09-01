// React Import
import React, { useEffect } from 'react';
// React native
import { View } from 'react-native';
// Ract Navigation Import
import 'react-native-gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// Screens
import HomeStack from './HomeStack';
import NotificationsStack from './NotificationsStack';
import MessagesStack from './MessagesStack';
import UserStack from './UserStack';
// Other components
import Icon from 'react-native-vector-icons/Feather';
import Timebar from '../_components/TimeBar';
const modalFix = () => {
  return <View />;
};
const TabNavigator = ({ navigation, route }) => {
  const Tab = createBottomTabNavigator();
  console.log(route.params)
  useEffect(
    () =>
      navigation.addListener('beforeRemove', (e) => {
        // Prevent default behavior of leaving the screen
        e.preventDefault();
      }),
    []
  );
  return (
    <>
      <Timebar />
      <Tab.Navigator
        initialRouteName="home"
        tabBarOptions={{
          style: {
            backgroundColor: 'black',
            borderTopEndRadius: 0,
            borderTopStartRadius: 0,
            shadowColor: '#000',
            paddingHorizontal: 15,
          },
          showIcon: true,
          showLabel: false,
          activeTintColor: '#ff2400',
          inactiveTintColor: 'white',
        }}>
        <Tab.Screen
          name="home"
          component={HomeStack}
          initialParams={{
            postModal: route.params.postModal,
          }}
          options={{
            title: '',
            tabBarIcon: ({ color }) => (
              <Icon name="home" size={24} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="notifications"
          component={NotificationsStack}
          initialParams={{
            postModal: route.params.postModal,
          }}
          options={{
            title: '',
            tabBarIcon: ({ color }) => (
              <Icon name="bell" size={24} color={color} />
            ),
          }}
        />
        <Tab.Screen
          lazy={true}
          name="addNew"
          component={modalFix}
          options={{
            title: '',
            tabBarIcon: ({ color }) => (
              <Icon name="plus-circle" size={48} color={color} />
            ),
          }}
          listeners={({ navigation }) => ({
            tabPress: event => {
              event.preventDefault();
              navigation.navigate('newpost');
            },
          })}
        />
        <Tab.Screen
          name="messages"
          component={MessagesStack}
          initialParams={{
            messagesModal: route.params.messagesModal,
          }}
          options={{
            title: '',
            tabBarIcon: ({ color }) => (
              <Icon name="message-circle" size={24} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="user"
          component={UserStack}
          initialParams={{
            userModal: route.params.userModal,
          }}
          options={{
            title: '',
            tabBarIcon: ({ color }) => (
              <Icon name="user" size={24} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
};
export default TabNavigator;
