import React from 'react';
import { View, StyleSheet, Text, TextInput, Button } from 'react-native'
import Card from '../components/Card';

const StartScreen = () => {
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Start Game</Text>
            <Card style={styles.inputContainer}>
                <Text>Select a Number</Text>
                <TextInput />
                <View style={styles.btnContainer}>
                    <View style={styles.button}>
                        <Button title="Reset" color="#2c3e50" />
                    </View>
                    <View style={styles.button}>
                        <Button title="Confirm" color="#d35400" />
                    </View>

                </View>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        marginVertical: 10
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
    },
    btnContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between'
    },
    button: {
        width: '40%'
    }
})

export default StartScreen