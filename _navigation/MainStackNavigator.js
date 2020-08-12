import React, {useState} from 'react';
import {
  TouchableHighlight,
  TouchableWithoutFeedback,
  Text,
  StyleSheet,
  Modal,
  View,
} from 'react-native';
// React Navigation
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import TabNavigator from './TabNavigator';
// Screens
import NewPost from '../_screens/NewPost';
// Other
import Icon from 'react-native-vector-icons/Feather';
const Stack = createStackNavigator();
function MainStackNavigator() {
  const [postModalVisible, setpostmodalVisible] = useState(false);
  const [userModalVisible, setusermodalVisible] = useState(false);
  const [messagesVisible, setmessagesmodalVisible] = useState(false);

  return (
    <>
      {/* POST MODAL */}
      <Modal
        animationType="slide"
        visible={postModalVisible}
        transparent={true}>
        <TouchableWithoutFeedback onPress={() => setpostmodalVisible(false)}>
          <View style={styles.modalContainerOutter}>
            <TouchableWithoutFeedback onPress={() => {}}>
              <View style={styles.modalbuttonContainer}>
                <TouchableWithoutFeedback>
                  <View style={styles.modalButton}>
                    <Icon name="share-2" style={{marginRight: 10}} size={24} />
                    <Text style={{fontSize: 18, fontWeight: '700'}}>
                      Compartir
                    </Text>
                  </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback>
                  <View style={[styles.modalButton, {marginBottom: 15}]}>
                    <Icon
                      name="flag"
                      style={{marginRight: 10}}
                      size={24}
                      color="#ff2400"
                    />
                    <Text
                      style={{
                        fontSize: 18,
                        fontWeight: '700',
                        color: '#ff2400',
                      }}>
                      Reportar
                    </Text>
                  </View>
                </TouchableWithoutFeedback>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
      {/* USER MODAL */}
      <Modal
        animationType="slide"
        visible={userModalVisible}
        transparent={true}>
        <TouchableWithoutFeedback onPress={() => setusermodalVisible(false)}>
          <View style={styles.modalContainerOutter}>
            <TouchableWithoutFeedback onPress={() => {}}>
              <View style={styles.modalbuttonContainer}>
                <TouchableWithoutFeedback>
                  <View style={styles.modalButton}>
                    <Icon
                      name="alert-triangle"
                      style={{marginRight: 10}}
                      size={24}
                    />
                    <Text style={{fontSize: 18, fontWeight: '700'}}>
                      Reportar un error
                    </Text>
                  </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback>
                  <View style={styles.modalButton}>
                    <Icon
                      name="help-circle"
                      style={{marginRight: 10}}
                      size={24}
                    />
                    <Text style={{fontSize: 18, fontWeight: '700'}}>
                      Sobre la app
                    </Text>
                  </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback>
                  <View style={[styles.modalButton, {marginBottom: 15}]}>
                    <Icon
                      name="log-out"
                      style={{marginRight: 10}}
                      size={24}
                      color="#ff2400"
                    />
                    <Text
                      style={{
                        fontSize: 18,
                        fontWeight: '700',
                        color: '#ff2400',
                      }}>
                      Cerrar Sesión
                    </Text>
                  </View>
                </TouchableWithoutFeedback>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
      {/* MESSAGES MODAL */}
      <Modal animationType="slide" visible={messagesVisible} transparent={true}>
        <TouchableWithoutFeedback
          onPress={() => setmessagesmodalVisible(false)}>
          <View style={styles.modalContainerOutter}>
            <TouchableWithoutFeedback onPress={() => {}}>
              <View style={styles.modalbuttonContainer}>
                <TouchableWithoutFeedback>
                  <View style={[styles.modalButton, {marginBottom: 15}]}>
                    <Icon name="x" style={{marginRight: 10}} size={24} />
                    <Text style={{fontSize: 18, fontWeight: '700'}}>
                      Eliminar
                    </Text>
                  </View>
                </TouchableWithoutFeedback>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="tabnavigator"
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen
            name="tabnavigator"
            component={TabNavigator}
            initialParams={{
              postModal: () => setpostmodalVisible(!postModalVisible),
              userModal: () => setusermodalVisible(!userModalVisible),
              messagesModal: () => setmessagesmodalVisible(!messagesVisible),
            }}
          />
          <Stack.Screen
            name="newpost"
            component={NewPost}
            mode="modal"
            style={styles.header}
            options={{
              headerShown: true,
              title: 'Nuevo Post',
              headerRight: () => (
                <TouchableHighlight>
                  <Text style={styles.postButton}>PUBLICAR</Text>
                </TouchableHighlight>
              ),
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
const styles = StyleSheet.create({
  header: {
    backgroundColor: 'white',
  },
  postButton: {
    color: '#0EAD69',
    marginRight: 24,
  },
  //   Modals
  modalContainerOutter: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },
  modalbuttonContainer: {
    width: '100%',
    padding: 24,
    paddingTop: 32,
    paddingBottom: 12,
    backgroundColor: 'white',
    borderTopRightRadius: 24,
    borderTopLeftRadius: 24,
    borderTopColor: '#f2f2f2',
    borderTopWidth: 1,
    borderRightColor: '#f2f2f2',
    borderRightWidth: 1,
    borderLeftColor: '#f2f2f2',
    borderLeftWidth: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  modalButton: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
});
export default MainStackNavigator;
