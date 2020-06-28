import React from 'react';
// React Navigation
import { createStackNavigator } from '@react-navigation/stack';
// Creens
import Messages from '../_screens/Messages';
import Chat from '../_screens/Chat';
// Others
const Stack = createStackNavigator();
const MessagesStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                component={Messages}
                name="messages"
                options={{
                    title: 'Mensajes',
                    headerStyle: {
                        height: 60
                    },
                    headerTitleStyle: {
                        paddingTop: 5,
                    }
                }} />
            <Stack.Screen
                component={Chat}
                name="chat"
                options={{
                    headerShown: false
                }} />
        </Stack.Navigator>
    );
}
export default MessagesStack;