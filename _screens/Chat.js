import React, {useState} from 'react';
import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Image,
  TextInput,
} from 'react-native';
// Other
import Icon from 'react-native-vector-icons/Feather';
import UserPic from '../resources/img/Flamita.png';
import {LinearTextGradient} from 'react-native-text-gradient';
const ProperMessage = () => {
  const [timeStampShow, setTimeStampShow] = useState(false);
  const toggleTimeStamp = () => {
    setTimeStampShow(!timeStampShow);
  };
  return (
    <View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          paddingLeft: 24,
          paddingTop: 16,
          paddingBottom: 8,
          alignSelf: 'flex-end',
        }}>
        {/* Message */}
        <TouchableWithoutFeedback onPress={toggleTimeStamp}>
          <View style={styles.messageBox}>
            <Text>???</Text>
          </View>
        </TouchableWithoutFeedback>
        {/* UserPic */}
        <View style={{marginHorizontal: 16}}>
          <Image
            source={UserPic}
            style={{
              height: 40,
              width: 40,
              borderRadius: 24,
              backgroundColor: 'black',
            }}
          />
        </View>
      </View>
      {timeStampShow ? (
        <View style={{alignSelf: 'flex-end', marginRight: '20%', marginTop: 4}}>
          <Text style={{color: 'grey'}}>Hace 5 minutos</Text>
        </View>
      ) : null}
    </View>
  );
};
const AlienMessage = () => {
  const [timeStampShow, setTimeStampShow] = useState(false);
  const toggleTimeStamp = () => {
    setTimeStampShow(!timeStampShow);
  };
  return (
    <View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          paddingRight: 24,
          paddingTop: 16,
          paddingBottom: 8,
        }}>
        {/* UserPic */}
        <View style={{marginHorizontal: 16}}>
          <Image
            source={UserPic}
            style={{
              height: 40,
              width: 40,
              borderRadius: 24,
              backgroundColor: 'black',
            }}
          />
        </View>
        {/* Message */}
        <TouchableWithoutFeedback onPress={toggleTimeStamp}>
          <View style={styles.messageBox}>
            <Text>??</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
      {timeStampShow ? (
        <View style={{marginLeft: '20%', marginTop: 4}}>
          <Text style={{color: 'grey'}}>Hace 5 minutos</Text>
        </View>
      ) : null}
    </View>
  );
};
const Messages = () => {
  return (
    <>
      <ScrollView style={styles.mainContainer}>
        <View style={styles.messageContainer}>
          <ProperMessage />
          <AlienMessage />
          <ProperMessage />
          <AlienMessage />
          <ProperMessage />
          <AlienMessage />
          <ProperMessage />
          <AlienMessage />
          <ProperMessage />
          <AlienMessage />
          <AlienMessage />
          <AlienMessage />
          <AlienMessage />
        </View>
      </ScrollView>
      <View style={styles.commentInputContainer}>
        <Image
          source={UserPic}
          style={{width: 50, height: 50, borderRadius: 25}}
        />
        <TextInput placeholder="¡Comenta!" style={styles.commentInput} />
        <TouchableWithoutFeedback>
          <LinearTextGradient
            style={{paddingHorizontal: 16, transform: [{rotate: '43deg'}]}}
            locations={[-1, 1]}
            colors={['#24C6DC', '#514A9D']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}>
            <Icon name="send" size={24} />
          </LinearTextGradient>
        </TouchableWithoutFeedback>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#F2F5FF',
  },
  meddageContainer: {},
  commentInputContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    zIndex: 20,
    padding: 5,
    shadowColor: '#000',
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
  },
  messageBox: {
    backgroundColor: 'white',
    maxWidth: '80%',
    borderRadius: 24,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
export default Messages;
