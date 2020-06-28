import React from 'react';
import { ScrollView, View, Text, StyleSheet, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native';
// Components
import PublicationCard from '../_components/PublicationCard';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
// Others
import UserPic from '../resources/img/Flamita.png';
const Notification = () => {
    const navigation = useNavigation();
    return (
        <TouchableWithoutFeedback
            onPress={() => { navigation.navigate("standalonepost") }}>
            <View style={{ display: "flex", flexDirection: 'row', paddingTop: 24 }}>
                <Image source={UserPic} style={{ height: 50, width: 50 }} />
                <View>
                    <View style={{ display: "flex", flexDirection: 'row', alignItems: 'baseline', marginBottom: 8 }}>
                        <Text style={{ color: "#FF512F" }}>@Flamita <Text style={{ color: "black" }}>comentó tu publicación <Text style={{ fontWeight: "bold", fontSize: 16 }}>56</Text></Text>
                        </Text>
                    </View>
                    <Text style={{ fontSize: 12 }}>Hace 5 minutos</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}
const Notifications = () => {
    return (
        <View style={styles.mainContainer}>
            <ScrollView style={{ width: '100%', display: 'flex', paddingTop: 16 }}>
                <View>
                    {/* Posts list */}
                    <PublicationCard postIndex={54} />
                    <PublicationCard postIndex={106} />
                </View>
                <View style={{ padding: 24 }}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Notificaciones</Text>
                    <View style={styles.notificationContainer}>
                        <Notification />
                        <Notification />
                        <Notification />
                        <Notification />
                        <Notification />
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}
const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#F2F5FF',
    },
    notificationContainer: {
        display: 'flex',
        alignItems: 'flex-start'
    }
})
export default Notifications;