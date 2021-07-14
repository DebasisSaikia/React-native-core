import React, { useState } from 'react';
import { View, StyleSheet, Text, Button, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native'
import Card from '../components/Card';
import Colors from '../constants/colors';
import Input from '../components/Input'

const StartScreen = () => {
    // check input value
    const [enteredNum, setEnteredNum] = useState('');

    // confirm input value
    const [confirmed, setConfirmed] = useState(false)

    const [selected, setSelected] = useState()

    // handle input value
    const handleInputValue = (inputValue) => {
        setEnteredNum(inputValue.replace(/[^0-9]/g, ''))
    }

    // handle reset
    const resetInput = () => {
        setEnteredNum('')
        setConfirmed(false)
    }

    // confirmed input value
    const confirmInput = () => {
        const chosenNumber = parseInt(enteredNum)

        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert('Invalid Number!', 'It has to be between 1 and 99', [{ text: 'Okay', style: 'destructive', onPress: resetInput }])
            return;
        }
        setConfirmed(true);
        setSelected(chosenNumber)
        setEnteredNum('');
    }

    // show toast 
    let output;
    if (confirmed) {
        output = <Text>You choose {selected}</Text>
    }

    return (
        <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }}>
            <View style={styles.screen}>
                <Text style={styles.title}>Start Game</Text>
                <Card style={styles.inputContainer}>
                    <Text>Select a Number</Text>
                    <Input style={styles.input} autoCapitalize='none'
                        autoCorrect={false} keyboardType='numeric'
                        maxLength={2}
                        onChangeText={handleInputValue}
                        value={enteredNum}
                    />
                    <View style={styles.btnContainer}>
                        <View style={styles.button}>
                            <Button title="Reset" color={Colors.secondary} onPress={resetInput} />
                        </View>
                        <View style={styles.button}>
                            <Button title="Confirm" color={Colors.primary} onPress={confirmInput} />
                        </View>

                    </View>
                </Card>
                {confirmed && output}
            </View>
        </TouchableWithoutFeedback>
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
