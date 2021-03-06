import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native'

// Components
import Message from '../_components/Message';
const Messages = () => {

    return (
        <ScrollView style={styles.mainContainer}>
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#F2F5FF',
    }
})
export default Messages;