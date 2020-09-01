import React from 'react';
import {TouchableWithoutFeedback} from 'react-native';
// React Navigation
import {createStackNavigator} from '@react-navigation/stack';
// Creens
import Messages from '../_screens/Messages';
import Chat from '../_screens/Chat';
// Others
import Icon from 'react-native-vector-icons/Feather';

const Stack = createStackNavigator();
const MessagesStack = ({route}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={Messages}
        name="messages"
        options={{
          title: 'Mensajes',
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
        component={Chat}
        initialParams={{
          messagesModal: route.params.messagesModal,
        }}
        name="chat"
        options={{
          title: '@Flamita',
          headerStyle: {
            height: 60,
          },
          headerTitleStyle: {
            paddingTop: 5,
          },
          headerLeftContainerStyle: {
            paddingTop: 10,
          },
          headerRight: () => (
            <TouchableWithoutFeedback
              onPress={() => route.params.messagesModal()}>
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
};
export default MessagesStack;
