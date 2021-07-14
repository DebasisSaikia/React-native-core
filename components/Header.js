import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Colors from '../constants/colors'

const Header = ({ title }) => {
    return (
        <View style={styles.header}>
            <Text style={styles.headText}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 90,
        paddingTop: 36,
        backgroundColor: Colors.primary,
        alignItems: 'center',
        justifyContent: 'center'
    },
    headText: {
        color: '#ecf0f1',
        fontSize: 18,
        fontWeight: 'bold'
    }
});

export default Header;