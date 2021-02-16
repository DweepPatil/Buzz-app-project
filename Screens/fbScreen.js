import React from 'react';
import { StyleSheet, Text, View, Image, } from 'react-native';

export default class Fb extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>
                    Facebook!
                </Text>

                <Image source={require('../assets/fb logo.jpg')} style={{ width: 100, height: 100, borderRadius: 100, margin: 10, borderWidth: 5 }} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(72,178,224,0.3)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 20,
        fontFamily: 'Times New Roman',
        fontWeight: 'bold',
        fontStyle: 'italic',
        margin: 10,
    }
});