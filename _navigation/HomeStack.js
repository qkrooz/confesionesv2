import React from 'react';
// React Navigation
import { createStackNavigator } from '@react-navigation/stack';
// Components
import Home from '../_screens/Home';
import StandalonePost from '../_screens/StandalonePost';
// Others
import Icon from 'react-native-vector-icons/Feather';
const Stack = createStackNavigator();
const HomeStack = () => {
    return (
        <Stack.Navigator
            initialRouteName='home'>
            <Stack.Screen
                name="home"
                component={Home}
                options={{ headerShown: false }} />
            <Stack.Screen
                name="standalonepost"
                component={StandalonePost}
                options={{
                    title: '156',
                    headerStyle: {
                        backgroundColor: '#24C6DC'
                    },
                    headerTintColor: '#f2f2f2',
                    headerLeftContainerStyle: {
                        paddingTop: 10,
                    },
                    headerBackTitleStyle: {
                        color: '#f2f2f2'
                    },
                    headerTitleStyle: {
                        paddingTop: 10,
                        color: '#f2f2f2'
                    },
                }}
                style={{ paddingTop: 20 }} />
        </Stack.Navigator>
    );
}
export default HomeStack;