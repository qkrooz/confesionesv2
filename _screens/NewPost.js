import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableHighlight } from 'react-native';
// Icons
import Icon from 'react-native-vector-icons/Feather';
// Other
import { LinearTextGradient } from "react-native-text-gradient";
const NewPost = () => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.textinputContainer}>
                <TextInput multiline={true} style={styles.postInput} placeholder="¿Qué vas a compartir hoy?" />
                <Text style={styles.charcountText}>0/250 carácteres</Text>
            </View>
            <TouchableHighlight style={{ padding: 24 }}>
                <View style={styles.imageButtonContainer}>
                    <Icon name="image" size={20} style={{ marginRight: 10 }} color={'#EC008C'} />
                    <LinearTextGradient
                        style={{ display: 'flex', }}
                        locations={[-1, 1]}
                        colors={["#ec008c", "#fc6767"]}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}>
                        <Text>Imagen/Gif</Text>
                    </LinearTextGradient>
                </View>
            </TouchableHighlight>
        </View>
    );
}
const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#F2F5FF'
    },
    textinputContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        height: "50%",
        minHeight: 200,
        shadowColor: "#000",
        borderBottomLeftRadius: 24,
        borderBottomRightRadius: 24,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    postInput: {
        backgroundColor: 'white',
        textAlignVertical: 'top',
        padding: 24
    },
    charcountText: {
        alignSelf: 'flex-end',
        padding: 24,
        paddingBottom: 15,
        fontSize: 12,
        color: 'grey',
    },
    imageButtonContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderRadius: 24,
        shadowColor: "#000",
        padding: 15,
        borderBottomLeftRadius: 24,
        borderBottomRightRadius: 24,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    }
})
export default NewPost;