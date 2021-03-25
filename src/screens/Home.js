import React from 'react';
import {Button, Text, View, StyleSheet } from 'react-native';

export const Home = ({navigation}) => {
    return(
        <View style={styles.container}>
            <Text style={styles.msg}>Welcome to the Virtual Employee</Text>
            <Text style={[styles.msg, {marginBottom: 50}]}>Access Corona details from drawer</Text>

            <Button
                onPress={() => navigation.openDrawer()}
                title="Open Drawer"
            />
      
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    msg: {
        color: '#000', 
        fontSize: 18
    }
})