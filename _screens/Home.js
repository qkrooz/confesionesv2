import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native'
// Components
import Post from '../_components/Post';
const Home = () => {
    return (
        <ScrollView >
            <View style={styles.mainContainer}>
                <Post number={3} hasImage={false} />
                <Post number={2} hasImage={true} />
                <Post number={1} hasImage={false} />
            </View>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        paddingTop: 25,
        paddingBottom: 0,
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#F2F5FF',
    }
})
export default Home;