import React, { useState } from 'react';
import {
  Modal,
  View,
  ScrollView,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { firebase } from '../firebase/config';
function Signin({ navigation }) {
  const [email, setEmail] = useState('');
  const [psw, setPsw] = useState('');
  // errors
  const [emptyEmail, setEmptyEmail] = useState(false);
  const [emptyPsw, setEmptyPsw] = useState(false);
  // modal errors
  const [errorModal, setErrorModal] = useState(false);
  const [errorContent, setErrorContent] = useState('');
  const onSignIngPress = () => {
    if (email != '') {
      setEmptyEmail(false);
      if (psw != '') {
        setEmptyPsw(false);
        // Firebase
        firebase
          .auth()
          .signInWithEmailAndPassword(email, psw)
          .then((response) => {
            const uinfo = {
              uid: response.user.uid,
              uemail: response.user.email,
              upsw: psw,
            }
            navigation.navigate("tabnavigator", uinfo);
          })
          .catch(error => {
            if (error.code == "auth/user-not-found") {
              setErrorContent("No se encontró este usuario");
              setErrorModal(true);
            } else if (error.code == "auth/wrong-password") {
              console.log("aqui llego")
              setErrorContent("Algún dato es incorrecto");
              setErrorModal(true);
            } else if (error.code == "auth/too-many-requests") {
              setErrorContent("Demasiados intentos, espera un minuto y vuelve a intentar");
              setErrorModal(true);
            }
            console.log(error);
            // alert(error)
          })
        // Firebase
      } else {
        setEmptyPsw(true);
      }
    } else {
      setEmptyPsw(false);
      setEmptyEmail(true);
    }
  }
  return (
    <>
      {/* WrongModal */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={errorModal}
      >
        <TouchableWithoutFeedback onPress={() => { setErrorModal(false); }}>
          <View style={styles.modalOutter} >
            <View style={styles.modalContainer}>
              <Icon name="frown" size={52} style={{ marginBottom: 12 }} />
              <Text style={styles.modalMessage}>{errorContent}</Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'center',
          backgroundColor: '#fcfcfc',
        }}>
        <View style={styles.container}>
          <View style={styles.inputGroup}>
            <Text style={styles.fieldLabel}>Correo electrónico</Text>
            <View style={styles.fieldContainer}>
              <Icon name="at-sign" style={styles.fieldIcon} size={24} />
              <TextInput
                keyboardType="email-address"
                style={styles.logField}
                placeholder="al123@alumnos.uacj.mx"
                value={email}
                onChangeText={text => {
                  setEmail(text);
                }}
              />
            </View>
            {emptyEmail
              ? <Text style={styles.error}>Introduce un correo electrónico</Text>
              : null}
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.fieldLabel}>Contraseña</Text>
            <View style={styles.fieldContainer}>
              <Icon name="lock" style={styles.fieldIcon} size={24} />
              <TextInput
                secureTextEntry={true}
                value={psw}
                style={styles.logField}
                placeholder="************"
                onChangeText={text => {
                  setPsw(text);
                }}
              />
            </View>
            {emptyPsw
              ? <Text style={styles.error}>Introduce tu contraseña</Text>
              : null}
          </View>
          <TouchableWithoutFeedback
            onPress={() => {
              onSignIngPress();
            }}>
            <Text style={styles.logButton}>Iniciar Sesión</Text>
          </TouchableWithoutFeedback>
          <Text style={styles.recommendation}>
            ¿No tienes una cuenta?{' '}
            <TouchableWithoutFeedback
              onPress={() => {
                navigation.navigate('login');
              }}>
              <Text style={styles.hereText}>Regístrate</Text>
            </TouchableWithoutFeedback>
          </Text>
        </View>
      </ScrollView>
    </>
  );
}
const styles = StyleSheet.create({
  modalOutter: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  modalContainer: {
    width: "50%",
    padding: 28,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    shadowColor: '#000',
    paddingHorizontal: 12,
    borderRadius: 50,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalMessage: {
    textAlign: "center"
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputGroup: {
    width: '75%',
    marginBottom: 24,
  },
  fieldLabel: {
    marginBottom: 8,
    fontWeight: '700',
    fontSize: 16,
  },
  fieldContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    shadowColor: '#000',
    paddingHorizontal: 12,
    borderRadius: 50,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  fieldIcon: {},
  logField: {
    width: '100%',
    zIndex: 0,
    paddingLeft: 12,
  },
  error: {
    textAlign: 'right',
    color: "#ff2400"
  },
  hereText: {
    color: '#ff2400',
    textDecorationLine: 'underline',
  },
  logButton: {
    marginBottom: 12,
    backgroundColor: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    padding: 18,
    borderRadius: 50,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  recommendation: {
    fontSize: 16,
  },
});
export default Signin;
