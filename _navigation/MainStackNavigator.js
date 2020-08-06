import React from 'react';
import { TouchableHighlight, Text, StyleSheet } from 'react-native';
// React Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigator from './TabNavigator';
// Screens
import NewPost from '../_screens/NewPost'

const Stack = createStackNavigator();
const MainStackNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='tabnavigator' screenOptions={{
                headerShown: false
            }} >
                <Stack.Screen name="tabnavigator" component={TabNavigator} />
                <Stack.Screen
                    name="newpost"
                    component={NewPost}
                    mode='modal'
                    style={styles.header}
                    options={{
                        headerShown: true, title: 'Nuevo Post', headerRight: () => (
                            <TouchableHighlight>
                                <Text style={styles.postButton}>PUBLICAR</Text>
                            </TouchableHighlight>
                        ),
                    }} />
            </Stack.Navigator>
        </NavigationContainer>

    );
}
const styles = StyleSheet.create({
    header: {
        backgroundColor: 'white'
    },
    postButton: {
        color: '#0EAD69',
        marginRight: 24
    }
})
export default MainStackNavigator;