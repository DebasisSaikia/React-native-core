import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native'
import Card from '../components/Card';
import Colors from '../constants/colors';
import Input from '../components/Input'

const StartScreen = () => {
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Start Game</Text>
            <Card style={styles.inputContainer}>
                <Text>Select a Number</Text>
                <Input style={styles.input} autoCapitalize='none' autoCorrect={false} keyboardType='numeric' maxLength={2} />
                <View style={styles.btnContainer}>
                    <View style={styles.button}>
                        <Button title="Reset" color={Colors.secondary} />
                    </View>
                    <View style={styles.button}>
                        <Button title="Confirm" color={Colors.primary} />
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
    },
    input: {
        width: 80,
        textAlign: 'center',
    }
})

export default StartScreen
