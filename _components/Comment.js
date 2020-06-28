import React from 'react';
import { View, Text, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native';
// Components
import CommentReply from './CommentReply';
// Other
import Icon from 'react-native-vector-icons/Feather';
import { LinearTextGradient } from "react-native-text-gradient";
import UserImage from '../resources/img/Flamita.png';
const Comment = ({ content }) => {
    return (
        <View style={styles.commentContainer}>
            <View style={styles.properComment}>
                {/* Comment Header */}
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', paddingLeft: 10 }}>
                    <View style={styles.userImageContainer}>
                        <Image source={UserImage} style={{ height: 40, width: 40, }} />
                    </View>
                    <Text style={{ marginRight: 10 }}>@Flamita</Text>
                    <Text style={{ fontSize: 5, marginRight: 10 }}>{'\u2B24'}</Text>
                    <Text style={{ fontSize: 12, color: 'grey' }}>Hace 4 minutos</Text>
                </View>
                {/* Comment Header Ends */}
                {/* Comment Text */}
                <View style={{ padding: 16, paddingTop: 0 }}>
                    <Text>{content}</Text>
                </View>
                {/* Comment Text Ends */}
                <TouchableWithoutFeedback>
                    <View style={{ display: 'flex', alignSelf: 'flex-end', flexDirection: 'row', alignItems: 'center', paddingRight: 24, paddingBottom: 16 }}>
                        <LinearTextGradient
                            style={{ marginRight: 10 }}
                            locations={[-1, 1]}
                            colors={["#24c6dc", "#514a9d"]}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                        >
                            <Icon name="corner-up-left" size={16} color={'#24C6DC'} />
                        </LinearTextGradient>
                        <Text style={{ color: 'black' }}>Responder</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
            <View style={styles.alienCommentContainer}>
                {/* Alien Comments Here */}
                <CommentReply content={'.'} />
                <CommentReply content={'loremlaksjhdflaksjhdflaksjdhflaksjhfdlaskjdhfalksdjhfaslkdjfhdslkjf'} />
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    commentContainer: {
        width: '100%',
        display: 'flex',
        paddingTop: 10,
    },
    properComment: {
        width: '100%',
        borderRadius: 24,
        marginBottom: 10,
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
    alienCommentContainer: {
        display: 'flex',
        alignItems: 'flex-end'
    },
    userImageContainer: {
        height: 40,
        width: 40,
    }
})
export default Comment;