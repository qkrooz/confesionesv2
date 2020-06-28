import React from 'react';
import { ScrollView, View, StyleSheet, Text, TouchableWithoutFeedback, Image, TextInput } from 'react-native';
// Components
import Comment from '../_components/Comment';
// Other
import Icon from 'react-native-vector-icons/Feather';
import CatIMG from '../resources/img/cat.jpg';
import UserPic from '../resources/img/Flamita.png';
import { LinearTextGradient } from "react-native-text-gradient";
const ImageContainer = () => {
    return (
        <View>
            <View style={styles.ImageContainer}>
                <Image source={CatIMG} style={{ width: '100%', height: '100%' }} />
            </View>
        </View>
    );
}
const StandalonePost = () => {
    const hasImage = true;
    return (
        <>
            <ScrollView style={{ backgroundColor: '#F2F5FF' }}>
                <View style={styles.postContainer}>
                    {/* Header Controls */}
                    <View style={styles.headerControls}>
                        <View style={styles.postInfo}>
                            {/* Post Number */}
                            <Text style={{ fontWeight: 'bold', fontSize: 30, marginRight: 5, color: 'black' }}>156</Text>
                            {/* Time Stamp */}
                            <View style={styles.timeStampContainer}>
                                <Text style={{ fontSize: 5, marginRight: 5, color: 'black' }}>{'\u2B24'}</Text>
                                <Text style={{ fontSize: 10, color: 'grey', fontSize: 13 }}>Hace 5 minutos</Text>
                            </View>
                        </View>
                        {/* More */}
                        <TouchableWithoutFeedback>
                            <Icon name="more-horizontal" size={30} color={'black'} style={{ padding: 10, marginRight: 5 }} />
                        </TouchableWithoutFeedback>
                    </View>
                    {/* Header Controls ENDS*/}
                    {/* Header Text */}
                    <View style={styles.textContainer}>
                        <Text style={{ textAlign: 'center', color: 'black', fontSize: 16 }}>asdflkjngskjhghfcahjflcgnmlhagfcasbnkcjfaghcjfasb,h fceab ,cbashcfba ,mhcbmh,fba,fbkmanbfh as,ncjfasxmngfvsxfvnhgjasvfxkjgasvn fgavsngjkxfvnasjhxvsajkhgxvnkhgadsnxjasnhdxkjahsngfxakjhngfhasxnvfkjghaskxnfkjhasgdkxfhasvgfjknsajkgfasfasd</Text>
                    </View>
                    {/* Header Text ENDS */}
                    {/* Image */}
                    {hasImage
                        ? <ImageContainer />
                        : null
                    }
                    {/* Image Ends */}
                    {/* Interaction Controls */}
                    <View style={styles.controlsContainer}>
                        <View style={styles.control}>
                            <Icon style={{ marginRight: 5 }} size={26} color={'black'} name="message-square" />
                            <Text style={{ color: 'black', fontSize: 17 }}>50</Text>
                        </View>
                        <TouchableWithoutFeedback>
                            <View style={styles.control}>
                                <Icon style={{ marginRight: 5 }} size={26} color={'black'} name="thumbs-up" />
                                <Text style={{ color: 'black', fontSize: 17 }}>100</Text>
                            </View>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback>
                            <View style={styles.control}>
                                <Icon style={{ marginRight: 5 }} size={26} color={'black'} name="thumbs-down" />
                                <Text style={{ color: 'black', fontSize: 17 }}>20</Text>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                    {/* Interaction Controls Ends */}
                </View>
                <View style={styles.commentsContaner}>
                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-end' }}>
                        <Text style={{ marginRight: 10 }}>Comentarios Relevantes</Text>
                        <Icon name="chevron-down" size={20} />
                    </View>
                    <View style={{ display: 'flex', alignItems: 'center' }}>
                        {/* Comments Here */}
                        <Comment content={'.'} />
                        <Comment content={'.'} />
                        {/* Comments ENDS */}
                    </View>
                </View>
            </ScrollView>
            <View style={styles.commentInputContainer}>
                <Image source={UserPic} style={{ width: 50, height: 50, }} />
                <TextInput placeholder='¡Comenta!' style={styles.commentInput} />
                <TouchableWithoutFeedback>
                    <LinearTextGradient
                        style={{ paddingHorizontal: 16, transform: [{ rotate: '43deg' }] }}
                        locations={[-1, 1]}
                        colors={["#24C6DC", "#514A9D"]}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}>
                        <Icon name="send" size={24} />
                    </LinearTextGradient>
                </TouchableWithoutFeedback>
            </View>
        </>
    );
}
const styles = StyleSheet.create({
    postContainer: {
        backgroundColor: 'white',
        marginBottom: 16,
        shadowColor: "#000",
        marginTop: 16,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    headerControls: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 16,
        paddingTop: 8,
        paddingBottom: 8
    },
    postInfo: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    timeStampContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    textContainer: {
        padding: 24,
        paddingTop: 0,
    },
    ImageContainer: {
        width: '100%',
        maxHeight: 300
    },
    controlsContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        padding: 24,
        paddingTop: 12,
        paddingRight: 16,
        paddingBottom: 12
    },
    control: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginRight: 20
    },
    // Comments
    commentsContaner: {
        borderTopEndRadius: 24,
        borderTopStartRadius: 24,
        borderBottomEndRadius: 24,
        borderBottomStartRadius: 24,
        marginBottom: 24,
        padding: 16,
        paddingTop: 12,
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    commentInputContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        zIndex: 20,
        padding: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

        elevation: 10,
    },
    commentInput: {
        backgroundColor: '#f2f2f2',
        paddingLeft: 10,
        flexGrow: 1,
        borderRadius: 24,
    }
})
export default StandalonePost;