import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const Card = (props) => {
    let {active, cases, country, deaths, todayCases, todayDeaths, recovered, critical, totalTests, index} = props.item;
    return(
        <View style={[styles.container, {backgroundColor: props.index%2 === 0 ? '#add8e6' : '#ade6d8'}]}>
            <Text style={styles.country}>{country}</Text>
            
            <View style={styles.rowView}>
                <Text style={styles.rowContent}>Total Cases: {cases}</Text>
                <Text style={styles.rowContent}>Active Cases: {active}</Text>
            </View>

            <View style={styles.rowView}>
                <Text style={styles.rowContent}>Today's Cases: {todayCases}</Text>
                <Text style={styles.rowContent}>Critical Cases: {critical}</Text>
            </View>
             
            <View style={styles.rowView}>
                <Text style={styles.rowContent}>Today's Deaths: {todayDeaths}</Text>
                <Text style={styles.rowContent}>Total Deaths: {deaths}</Text>
            </View>

            <View style={styles.rowView}>
                <Text style={styles.rowContent}>Recovered: {recovered}</Text>
                <Text style={styles.rowContent}>Total Tested: {totalTests}</Text>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container:{
        borderWidth: 1,
        borderRadius: 10,
        margin: 10,
        backgroundColor: '#add8e6'
    },
    country: {
        fontSize: 24, 
        color: '#000', 
        fontWeight: 'bold', 
        paddingHorizontal: 5
    },
    rowView:{
        flexDirection: 'row', 
        justifyContent: 'space-between',
        marginVertical: 5, 
        paddingHorizontal: 5
    },
    rowContent: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333'
    }
})