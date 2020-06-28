import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
// Others
import UserImage from '../resources/img/Flamita.png';
const CommentReply = ({ content }) => {
    return (
        <View style={styles.replyContainer}>
            {/* Comment Header */}
            <View style={styles.headerContainer}>
                {/* User Info */}
                <View style={styles.userImageContainer}>
                    <Image source={UserImage} style={{ height: 40, width: 40, }} />
                </View>
                <Text style={{ marginRight: 10 }}>@Flamita</Text>
                <Text style={{ fontSize: 5, marginRight: 10 }}>{'\u2B24'}</Text>
                <Text style={{ fontSize: 12, color: 'grey' }}>Hace 4 minutos</Text>
            </View>
            {/* Comment Header Ends */}
            {/* Comment Text */}
            <View style={styles.commentContainer}>
                <Text>{content}</Text>
            </View>
            {/* Comment Text Ends */}
        </View>
    );
}
const styles = StyleSheet.create({
    replyContainer: {
        maxWidth: '75%',
        minWidth: '60%',
        marginBottom: 10,
        borderRadius: 24,
        backgroundColor: '#F2F5FF',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
    headerContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    commentContainer: {
        paddingTop: 0,
        paddingLeft: 16,
        paddingBottom: 16,
        paddingRight: 16
    }
});
export default CommentReply;