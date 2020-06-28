import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
const Notifications = () => {
    return (
        <View style={styles.mainContainer}>
            <Text>Desde Notifications</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#F2F5FF'
    }
})
export default Notifications;