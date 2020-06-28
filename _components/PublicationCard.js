import React from 'react';
import { View, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native'
import { useNavigation } from '@react-navigation/native';
// Others
import Icon from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';
const PublicationCard = ({ postIndex }) => {
    const navigation = useNavigation();
    let textColor;
    const colours = [
        ['#9400d3', '#4b0082', 'blanco'],
        ['#ffe259', '#ffa751', 'negro'],
        ['#24c6dc', '#514a9d', 'blanco'],
        ['#ec008c', '#fc6767', 'blanco'],
        ['#02aab0', '#00cdac', 'negro'],
        ['#34e89e', '#0f3443', 'blanco'],
        ['#ff512f', '#dd2476', 'blanco'],
        ['#ffffff', '#f2f2f2', 'negro'],
        ['#000000', '#292929', 'blanco'],
    ];
    let newColours = colours[Math.floor(Math.random() * colours.length)];
    if (newColours[2] == 'blanco') {
        textColor = '#f2f2f2';
    } else {
        textColor = 'black';
    }
    return (
        <TouchableWithoutFeedback
            onPress={() => { navigation.navigate("standalonepost") }}>
            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={[newColours[0], newColours[1]]} style={styles.container}>
                {/* Header */}
                <View style={{ display: "flex", flexDirection: 'row', alignItems: 'center', padding: 16 }}>
                    <Text style={{ color: textColor, marginRight: 5, fontSize: 16 }}>Publicación <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{postIndex}</Text></Text>
                    <Text style={{ fontSize: 5, marginRight: 5, color: textColor }}>{'\u2B24'}</Text>
                    <Text style={{ fontSize: 10, color: textColor, fontSize: 13 }}>Hace 5 minutos</Text>
                </View>
                {/* Header Ends */}
                {/* Counters */}
                <View style={styles.controlsContainer}>
                    <View style={styles.control}>
                        <Icon style={{ marginRight: 5 }} size={24} color={textColor} name="message-square" />
                        <Text style={{ color: textColor, fontSize: 16 }}>50</Text>
                    </View>
                    <View style={styles.control}>
                        <Icon style={{ marginRight: 5 }} size={24} color={textColor} name="thumbs-up" />
                        <Text style={{ color: textColor, fontSize: 16 }}>100</Text>
                    </View>
                    <View style={styles.control}>
                        <Icon style={{ marginRight: 5 }} size={24} color={textColor} name="thumbs-down" />
                        <Text style={{ color: textColor, fontSize: 16 }}>20</Text>
                    </View>
                </View>
                {/* Counter Ends */}
            </LinearGradient>
        </TouchableWithoutFeedback>
    );
}
const styles = StyleSheet.create({
    container: {
        width: '90%',
        borderRadius: 24,
        marginBottom: 16,
        alignSelf: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
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
});
export default PublicationCard;