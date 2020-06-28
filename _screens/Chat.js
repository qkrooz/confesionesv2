import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native'
const Messages = () => {
    return (
        <ScrollView >
            <View style={styles.mainContainer}>
            </View>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        padding: 24,
        paddingBottom: 0,
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#F2F5FF',
    }
})
export default Messages;