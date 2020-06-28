import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
const User = () => {
    return (
        <View style={styles.mainContainer}>
            <Text>Desde User</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#F2F5FF'
    }
})
export default User;