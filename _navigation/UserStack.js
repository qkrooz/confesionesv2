import React from 'react';
import {View, TouchableWithoutFeedback} from 'react-native';
// React Navigation
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();
// Screens
import User from '../_screens/User';
// Others
import Icon from 'react-native-vector-icons/Feather';
function UserStack({route}) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={User}
        name="user"
        options={{
          title: '@Flamita',
          headerStyle: {
            height: 60,
          },
          headerTitleStyle: {
            paddingTop: 5,
          },
          headerRight: () => (
            <TouchableWithoutFeedback onPress={() => route.params.userModal()}>
              <Icon
                style={{marginRight: 15, paddingTop: 5}}
                size={30}
                color={'black'}
                name="more-horizontal"
              />
            </TouchableWithoutFeedback>
          ),
        }}
      />
    </Stack.Navigator>
  );
}
export default UserStack;
