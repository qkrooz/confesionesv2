import React from 'react';
import { ScrollView, View, Text, StyleSheet, Image, TouchableWithoutFeedback, TextInput } from 'react-native'
import { List } from 'react-native-paper';
// Other
import UserPic from '../resources/img/Flamita.png';
import Icon from 'react-native-vector-icons/Feather';
const User = () => {
    const [expanded, setExpanded] = React.useState(true);
    const handlePress = () => setExpanded(!expanded);
    return (
        <View style={styles.mainContainer}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.imageContainer}>
                    <Image source={UserPic} style={styles.userImage} />
                </View>
                <View style={styles.accordionContainer}>
                    <List.Section style={styles.accordion}>
                        <List.Accordion
                            title="Correo electrónico"
                            left={() => <Icon name="at-sign" size={24} />}>
                            <View style={styles.optionContainer}>
                                <TouchableWithoutFeedback>
                                    <View style={{
                                        padding: 24,
                                        width: '100%',
                                        display: 'flex',
                                        flexDirection: "row",
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <Text style={{
                                            marginRight: 8,
                                            color: 'grey',
                                            fontSize: 18
                                        }}>al164513@alumnos.uacj.mx</Text>
                                        <Icon name="edit-2" style={{
                                            color: 'grey',
                                            fontSize: 18
                                        }} />
                                    </View>
                                </TouchableWithoutFeedback>
                            </View>
                        </List.Accordion>
                        <List.Accordion
                            title="Contraseña"
                            left={() => <Icon name="lock" size={24} />}>
                            <View style={styles.optionContainer}>
                                <View style={styles.pswContainer}>
                                    <Text style={styles.inputLabel}>Contraseña actual</Text>
                                    <TextInput style={styles.textInput}></TextInput>
                                    <Text style={styles.inputLabel}>Nueva Contraseña</Text>
                                    <TextInput style={styles.textInput}></TextInput>
                                    <Text style={styles.inputLabel}>Confirmar Contraseña</Text>
                                    <TextInput style={styles.textInput}></TextInput>
                                    <TouchableWithoutFeedback style={styles.button}>
                                        <Text style={styles.buttonLabel}>GUARDAR</Text>
                                    </TouchableWithoutFeedback>
                                </View>
                            </View>
                        </List.Accordion>
                        <List.Item
                            title="Ubicación"
                            left={() => <Icon name="map-pin" size={24} style={{ paddingTop: 5 }} />}
                            onPress={() => { alert('Modal de Ubicacion') }}
                            style={styles.listItem}
                        >
                        </List.Item>
                    </List.Section>
                </View>
            </ScrollView>
        </View>
    );
}
const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
        width: '100%',
        display: 'flex',
    },
    mainContainer: {
        height: '100%',
        backgroundColor: '#F2F5FF',
    },
    imageContainer: {
        marginTop: 32,
        width: '100%',
        alignSelf: "center",
        display: 'flex',
        alignItems: 'center',
        height: 200,
        width: 200,
        borderRadius: 100,
        marginBottom: 24
    },
    userImage: {
        height: '100%',
        width: '100%',
        borderRadius: 100,
        backgroundColor: 'white',
    },
    accordionContainer: {
        // backgroundColor: 'red',
    },
    accordion: {
        alignSelf: "center",
        paddingHorizontal: 10,
        paddingBottom:15,
        backgroundColor: 'white',
        width: '85%',
        borderRadius: 24,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    optionContainer: {
        width: "100%",
        display: 'flex',
        alignItems: 'flex-start',
        paddingLeft: 0,
        margin: 0
    },
    listItem: {
        display: 'flex',
        borderRadius: 24,
    },
    pswContainer: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24,
    },
    inputLabel: {
        color: "grey",
        marginBottom: 10,
        paddingLeft: 24,
        alignSelf: 'flex-start'
    },
    textInput: {
        width: '90%',
        marginBottom: 12,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#f1f1f1',
        paddingLeft: 16
    },
    buttonLabel: {
        backgroundColor: 'white',
        color: '#0EAD69',
        padding: 12,
        paddingHorizontal: 24,
        borderRadius: 50,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 3,
    },
    button: {

    }
})
export default User;