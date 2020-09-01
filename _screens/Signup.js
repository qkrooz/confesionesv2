import React, {useState} from 'react';
import {
  View,
  ScrollView,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

function Login({navigation}) {
  const [newmail, setNewmail] = useState('');
  const [newpsw, setNewpsw] = useState('');
  const [confirmpsw, setConfirmpsw] = useState('');
  return (
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
              value={newmail}
              style={styles.logField}
              placeholder="al123@alumnos.uacj.mx"
              onChangeText={text => {
                setNewmail(newmail);
              }}
            />
          </View>
        </View>
        <View style={styles.inputGroup}>
          <Text style={styles.fieldLabel}>Contraseña</Text>
          <View style={styles.fieldContainer}>
            <Icon name="lock" style={styles.fieldIcon} size={24} />
            <TextInput
              value={newpsw}
              style={styles.logField}
              placeholder="************"
              onChangeText={text => {
                setNewpsw(text);
              }}
            />
          </View>
        </View>
        <View style={styles.inputGroup}>
          <Text style={styles.fieldLabel}>Confirma tu contraseña</Text>
          <View style={styles.fieldContainer}>
            <Icon name="lock" style={styles.fieldIcon} size={24} />
            <TextInput
              value={confirmpsw}
              style={styles.logField}
              placeholder="************"
              onChangeText={text => {
                setConfirmpsw(text);
              }}
            />
          </View>
        </View>

        <TouchableWithoutFeedback>
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
    </ScrollView>
  );
}
const styles = StyleSheet.create({
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
