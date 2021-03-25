import React, {useState, useEffect} from 'react';
import { ActivityIndicator, FlatList, Text, View, StyleSheet } from 'react-native';
import {Card} from './components/Card';

export const Corona = () => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    
    useEffect(()=> {
        let res = fetch('https://coronavirus-19-api.herokuapp.com/countries')
        .then(response => response.json())
        .then(res => {
            setData(res);
            setLoading(false);
        });
    }, []);

    if(isLoading){
        return(
            <ActivityIndicator size={'large'} color='#add8e6' />
        )
    }

    return(
        <View>
            <Text style={style.title}>Corona Details</Text>
            <FlatList 
                data={data}
                renderItem={({item, index}) => {
                    return(
                        <Card item={item} index={index} />
                    )
                }}
            />
        </View>
    )
};

const style = StyleSheet.create({
    title: {
        fontSize: 26, 
        fontWeight: 'bold',
        textAlign: 'center', 
        backgroundColor: '#000', 
        color: '#fff'
    }
})