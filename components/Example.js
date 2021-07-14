import React, { useState } from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';
import TaskInput from './components/TaskInput';
import TaskItem from './components/TaskItem';

export default function App() {

    const [tasks, setTasks] = useState([])
    const [openModal, setOpenModal] = useState(false);

    // function to add task
    const addTask = (inputTask) => {
        setTasks(currentState => [...tasks, { id: Math.random().toString(), value: inputTask }])
        setOpenModal(false)
    }

    // delete task
    const deleteTask = (taskId) => {
        setTasks(currentTasks => {
            return currentTasks.filter((task) => task.id !== taskId)
        })

    }

    // cancel task
    const cancelTask = () => {
        setOpenModal(false)
    }

    return (
        <View style={styles.container} >
            <Button title="Add Task" onPress={() => setOpenModal(true)} color="#e74c3c" />
            {/* <View style={styles.inputContainer}>
        <TextInput placeholder="Add Task Here" style={styles.textInput} value={text} onChangeText={handleInput} />
        <Button title='ADD ' color="orange" onPress={addTask} />
      </View> */}
            <TaskInput visible={openModal} onAddTask={addTask} onCancel={cancelTask} />

            {/* view to add list of task */}
            <FlatList
                keyExtractor={(item, index) => item.id}
                data={tasks}
                renderItem={itemData => (
                    <TaskItem id={itemData.item.id} onDelete={deleteTask}>
                        {itemData.item.value}
                    </TaskItem>
                )}
            />
            {/* <ScrollView >
        {tasks.map((task, id) => (
          <View key={id} style={styles.itemStyle}>
            <Text style={styles.taskStyles}>{task}</Text>
          </View>
        ))}
      </ScrollView> */}

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 50
    },
});
