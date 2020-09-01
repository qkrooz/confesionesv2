import React, { useState } from 'react';
import {
  View,
  Modal,
  ScrollView,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { firebase } from '../firebase/config';
function endsWithAny(suffixes, string) {
  return suffixes.some(function (suffix) {
    return string.endsWith(suffix);
  });
}
function hasNumbers(t) {
  var regex = /\d/g;
  return regex.test(t);
}
function Login({ navigation }) {
  const validDomains = ['alumnos.uacj.mx', 'uacj.mx'];
  const [newmail, setNewmail] = useState('');
  const [newpsw, setNewpsw] = useState('');
  const [confirmpsw, setConfirmpsw] = useState('');
  const [data, setData] = useState({
    mail: '',
    psw: ''
  });
  // errorStates
  const [emailError, setEmailError] = useState(false);
  const [empyEmailError, setEmpyEmailError] = useState(false);
  const [pswError, setPswError] = useState(false);
  const [emptyPswError, setEmptyPswError] = useState(false);
  const [emptyConfirmPswError, setEmptyConfirmPswError] = useState(false);
  const [strongPswError, setStrongPswError] = useState(false);
  // Modal
  const [modal, setModal] = useState(false);
  const [sadModal, setSadModal] = useState(false);
  const [sadModalContent, setSadModalContent] = useState('');


  const onRegisterFunction = () => {
    let emailValid = endsWithAny(validDomains, newmail);
    let isPswStrong = hasNumbers(newpsw);
    if (newmail !== '') {
      // El email esta vacio?
      setEmpyEmailError(false);
      if (emailValid) {
        // El email tiene un dominio valido?
        setEmailError(false);
        if (newpsw !== '') {
          // la contrase­ña esta vacia?
          setEmptyPswError(false);
          if (confirmpsw !== '') {
            // la contraseña de confirmacion esta vacia?
            setEmptyConfirmPswError(false);
            if (newpsw == confirmpsw) {
              // las dos contraseñas son iguales?
              setPswError(false);
              if (isPswStrong) {
                // La contraseña tiene al menos un numero?
                setStrongPswError(false);
                // Registro.
                firebase
                  .auth()
                  .createUserWithEmailAndPassword(newmail, newpsw)
                  // Aqui se crea
                  .then((response) => {
                    // Cuando se crea...
                    setModal(true);
                  })
                  .catch((error) => {
                    setSadModal(true);
                    console.log(error);
                    // Error en el formulario, casi no habra pues ya hay auth frontend
                    if (error.code == "auth/email-already-in-use") {
                      setSadModalContent('Este correo ya está en uso');
                    } else if (error.code == "auth/weak-password") {
                      setSadModalContent('Tu contraseña debe ser de al menos 6 carácteres');
                    }
                  });
              } else {
                setStrongPswError(true);
              }
            } else {
              setStrongPswError(false);
              setPswError(true);
            }
          } else {
            setEmptyConfirmPswError(true);
          }
        } else {
          setEmptyPswError(true);
        }
      } else {
        setEmailError(true);
      }
    } else {
      setEmailError(false);
      setEmpyEmailError(true);
    }
  }
  return (
    <>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modal}
      >
        <TouchableWithoutFeedback onPress={() => { setModal(false); navigation.navigate("signin", data); }}>
          <View style={styles.modalOutter} >
            <View style={styles.modalContainer}>
              <Icon name="check" size={52} />
              <Text>¡Registro exitoso!</Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
      {/* WrongModal */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={sadModal}
      >
        <TouchableWithoutFeedback onPress={() => { setSadModal(false); }}>
          <View style={styles.modalOutter} >
            <View style={styles.modalContainer}>
              <Icon name="frown" size={52} style={{ marginBottom: 12 }} />
              <Text style={styles.modalMessage}>{sadModalContent}</Text>
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
                onChangeText={text => {
                  setNewmail(text);
                }}
              />
            </View>
            {emailError
              ? <Text style={styles.error}>El correo electrónico no es permitido</Text>
              : null
            }
            {empyEmailError
              ? <Text style={styles.error}>Ingresa un correo electrónico</Text>
              : null
            }
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.fieldLabel}>Contraseña</Text>
            <View style={styles.fieldContainer}>
              <Icon name="lock" style={styles.fieldIcon} size={24} />
              <TextInput
                secureTextEntry={true}
                style={styles.logField}
                placeholder="************"
                onChangeText={text => {
                  setNewpsw(text);
                }}
              />
            </View>
            {strongPswError
              ? <Text style={styles.error}>Incluye al menos un número</Text>
              : null}
            {emptyPswError
              ? <Text style={styles.error}>Ingresa una contraseña</Text>
              : null}
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.fieldLabel}>Confirma tu contraseña</Text>
            <View style={styles.fieldContainer}>
              <Icon name="lock" style={styles.fieldIcon} size={24} />
              <TextInput
                secureTextEntry={true}
                style={styles.logField}
                placeholder="************"
                onChangeText={text => {
                  setConfirmpsw(text);
                }}
              />
            </View>
            {emptyConfirmPswError ? <Text style={styles.error}>Confirma tu contraseña</Text> : null}
            {pswError
              ? <Text style={styles.error}>Tu contraseñas no coinciden</Text>
              : null}
          </View>

          <TouchableWithoutFeedback
            onPress={() => { onRegisterFunction(); }}>
            <Text style={styles.logButton}>Regístrate</Text>
          </TouchableWithoutFeedback>
          <Text style={styles.recommendation}>
            ¿Ya tienes una cuenta?{' '}
            <TouchableWithoutFeedback
              onPress={() => {
                navigation.navigate('signin');
              }}>
              <Text style={styles.hereText}>Inicia Sesión </Text>
            </TouchableWithoutFeedback>
          </Text>
        </View>
      </ScrollView >
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
export default Login;
