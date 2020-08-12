import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  StyleSheet,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
// Others
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Feather';
import CatIMG from '../resources/img/cat.jpg';
const ImageContainer = () => {
  const [hide, setHide] = useState(false);
  const [blur, setBlur] = useState(6);
  const toggleImage = () => {
    setHide(!hide);
    toggleBlur();
  };
  const toggleBlur = () => {
    switch (hide) {
      case true:
        setBlur(6);
        break;
      case false:
        setBlur(0);
      default:
        break;
    }
  };
  return (
    <TouchableWithoutFeedback onPress={toggleImage}>
      <View>
        {hide ? null : (
          <View
            style={{
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0,0,0,0.5)',
              position: 'absolute',
              zIndex: 20,
            }}
          />
        )}
        {hide ? null : (
          <Animatable.Text
            animation="pulse"
            iterationCount={2}
            easing="ease-out"
            style={{position: 'absolute', zIndex: 30, bottom: 20, right: 30}}>
            <Icon disabled={true} name="eye" color={'white'} size={40} />
          </Animatable.Text>
        )}
        <View style={styles.ImageContainer}>
          <Image
            source={CatIMG}
            style={{width: '100%', height: '100%'}}
            blurRadius={blur}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
const Post = ({number, hasImage, modalfunc}) => {
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
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={[newColours[0], newColours[1]]}
      style={styles.postContainer}>
      {/* Card Header */}
      <View style={styles.headerContainer}>
        {/* Post Number and TimeStamp */}
        <View style={styles.headerInfo}>
          {/* Post Number */}
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 30,
              marginRight: 5,
              color: textColor,
            }}>
            {number}
          </Text>
          {/* Time Stamp */}
          <View style={styles.timeStampContainer}>
            <Text style={{fontSize: 5, marginRight: 5, color: textColor}}>
              {'\u2B24'}
            </Text>
            <Text style={{fontSize: 10, color: textColor, fontSize: 13}}>
              Hace 5 minutos
            </Text>
          </View>
        </View>
        {/* More */}
        <TouchableWithoutFeedback
          onPress={() => {
            modalfunc();
          }}>
          <Icon
            name="more-horizontal"
            size={24}
            color={textColor}
            style={{padding: 10, marginRight: 5}}
          />
        </TouchableWithoutFeedback>
      </View>
      {/* Card Header Ends */}
      {hasImage ? <ImageContainer /> : null}
      {/* Card Text Container */}
      <TouchableWithoutFeedback
        onPress={() => {
          navigation.navigate('standalonepost');
        }}>
        <View style={styles.textContainer}>
          <Text style={{textAlign: 'center', color: textColor, fontSize: 16}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in
            efficitur eros. Suspendisse tempus sed ipsum ut accumsan. Vivamus
            sit amet libero molestie, lobortis felis vel, congue metus. Integer
            vitae tempor risus. Nam sit amet augue ut gravida.{' '}
          </Text>
        </View>
      </TouchableWithoutFeedback>
      {/* Card Text Container ends */}
      {/* Card Controls Container */}
      <View style={styles.controlsContainer}>
        <TouchableWithoutFeedback
          onPress={() => {
            navigation.navigate('standalonepost');
          }}>
          <View style={styles.control}>
            <Icon
              style={{marginRight: 5}}
              size={20}
              color={textColor}
              name="message-square"
            />
            <Text style={{color: textColor, fontSize: 15}}>50</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
          <View style={styles.control}>
            <Icon
              style={{marginRight: 5}}
              size={20}
              color={textColor}
              name="thumbs-up"
            />
            <Text style={{color: textColor, fontSize: 15}}>100</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
          <View style={styles.control}>
            <Icon
              style={{marginRight: 5}}
              size={20}
              color={textColor}
              name="thumbs-down"
            />
            <Text style={{color: textColor, fontSize: 15}}>20</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
      {/* Card Controls Container ends */}
    </LinearGradient>
  );
};
const styles = StyleSheet.create({
  postContainer: {
    display: 'flex',
    width: '94%',
    borderRadius: 24,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerInfo: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 15,
  },
  timeStampContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  ImageContainer: {
    width: '100%',
    maxHeight: 300,
  },
  textContainer: {
    padding: 24,
    paddingTop: 8,
  },
  controlsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingBottom: 16,
    paddingRight: 16,
  },
  control: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginRight: 20,
  },
});
export default Post;
