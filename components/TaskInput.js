import React, { useState } from 'react'
import { Button, StyleSheet, TextInput, View, Modal } from 'react-native'

const TaskInput = ({ onAddTask, visible, onCancel }) => {
    const [text, setText] = useState('')

    //handle change input function
    const handleInput = (inputText) => {
        setText(inputText)
    }
    // clear input
    const onAddGoal = () => {
        onAddTask(text);
        setText('')
    }

    return (
        <Modal visible={visible} animationType='fade'>
            <View style={styles.inputContainer}>

                <TextInput placeholder="Add Task Here" style={styles.textInput} value={text} onChangeText={handleInput} />
                <View style={styles.btnContainer}>
                    <View style={styles.button}>
                        <Button title="Cancel" color="#e74c3c" onPress={onCancel} />
                    </View>
                    <View style={styles.button}>
                        <Button title='ADD' color="#27ae60" onPress={onAddGoal} />
                    </View>

                </View>
            </View>
        </Modal>

    )
}

const styles = StyleSheet.create({
    inputContainer: {
        // flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    textInput: {
        borderColor: 'gray',
        borderWidth: 1,
        padding: 5,
        width: '90%',
        borderRadius: 10,
        marginBottom: 10,
        marginTop: 10
    },
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '60%'
    },
    button: {
        width: '40%'
    }
})

export default TaskInput
