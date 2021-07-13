import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const TaskItem = ({ children, onDelete, id }) => {
    return (
        <TouchableOpacity onPress={onDelete.bind(this, id)}>
            <View style={styles.itemStyle}>
                <Text style={styles.taskStyles}>{children}</Text>
            </View>
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    itemStyle: {
        padding: 10,
        borderWidth: 1,
        margin: 10,
        backgroundColor: '#2c3e50',
    },
    taskStyles: {
        textAlign: 'center',
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20
    }
})

export default TaskItem
