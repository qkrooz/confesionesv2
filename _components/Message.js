import React from 'react';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native'
import { useNavigation } from '@react-navigation/native';
// Other
import UserPic from '../resources/img/Flamita.png';
const Message = () => {
    const navigation = useNavigation();
    return (
        <TouchableWithoutFeedback
            onPress={() => {
                navigation.navigate("chat")
            }}>
            <View
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    padding: 16,
                    paddingLeft: 24
                }}>
                {/* user pic */}
                <View>
                    <Image
                        source={UserPic}
                        style={{
                            width: 70,
                            height: 70,
                            borderRadius: 40,
                            marginRight: 16,
                            backgroundColor: '#D892F2'
                        }} />
                </View>
                {/* message info */}
                <View
                    style={{
                        flexGrow: 1
                    }}>
                    <Text
                        style={{
                            fontWeight: '500',
                            fontSize: 18
                        }}>@Flamita</Text>
                    <Text
                        style={{
                            fontSize: 12,
                            color: 'grey'
                        }}>Hace 5 minutos</Text>
                </View>
                {/* unread message count */}
                <View>
                    <Text
                        style={{
                            backgroundColor: '#292929',
                            width: 20,
                            height: 20,
                            borderRadius: 10,
                            textAlign: 'center',
                            textAlignVertical: 'center',
                            color: 'white'
                        }}>5</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>

    );
}
export default Message; 