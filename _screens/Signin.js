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

function Signin({navigation}) {
  const [email, setEmail] = useState('');
  const [psw, setPsw] = useState('');
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
              style={styles.logField}
              placeholder="al123@alumnos.uacj.mx"
              value={email}
              onChangeText={text => {
                setEmail(text);
              }}
            />
          </View>
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
        </View>
        <TouchableWithoutFeedback
          onPress={() => {
            navigation.navigate('tabnavigator');
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
export default Signin;
