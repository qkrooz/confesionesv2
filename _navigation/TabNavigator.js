// React Import
import React from 'react';
// React native
import { View } from 'react-native'
// Ract Navigation Import
import 'react-native-gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// Screens
import HomeStack from '../_navigation/HomeStack';
import Notifications from '../_screens/Notifications';
import Messages from '../_screens/Messages';
import User from '../_screens/User';
// Other components
import Icon from 'react-native-vector-icons/Feather';
import Timebar from '../_components/TimeBar'
const modalFix = () => { return (<View></View>); }
const TabNavigator = () => {
    const Tab = createBottomTabNavigator();
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
                        shadowColor: "#000",
                        paddingHorizontal: 15
                    },
                    showIcon: true,
                    showLabel: false,
                    activeTintColor: '#ff2400',
                    inactiveTintColor: 'white'
                }}
            >
                <Tab.Screen name="home" component={HomeStack} options={{
                    title: '',
                    tabBarIcon: ({ color }) => (<Icon name='home' size={24} color={color} />)
                }} />
                <Tab.Screen name="notifications" component={Notifications} options={{
                    title: '',
                    tabBarIcon: ({ color }) => (<Icon name='bell' size={24} color={color} />)
                }} />
                <Tab.Screen lazy={true}
                    name="addNew"
                    component={modalFix}
                    options={{
                        title: '',
                        tabBarIcon: ({ color }) => (<Icon name='plus-circle' size={48} color={color} />)
                    }}
                    listeners={
                        ({ navigation }) => ({
                            tabPress: event => {
                                event.preventDefault();
                                navigation.navigate('newpost')
                            }
                        })} />
                <Tab.Screen name="messages" component={Messages} options={{
                    title: '',
                    tabBarIcon: ({ color }) => (<Icon name='message-circle' size={24} color={color} />)
                }} />
                <Tab.Screen name="user" component={User} options={{
                    title: '',
                    tabBarIcon: ({ color }) => (<Icon name='user' size={24} color={color} />)
                }} />
            </Tab.Navigator>
        </>
    );
}
export default TabNavigator;