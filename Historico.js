import { Text, View, StyleSheet, FlatList } from "react-native";
import { UtilsContext } from './Context';
import { useState, useContext } from 'react';

export default function Historico(props)
{
    const{ utils, setUtils } = useContext(UtilsContext);

    return (

        <View style={styles.container}>
                 
            <FlatList
                data={utils.data}
                renderItem={
                    ({item}) => 
                    <View style={styles.historico}>
                        <Text style={styles.textHistorico}>
                            {item.sentence} = {item.result} 
                        </Text>
                    </View>
                }
                keyExtractor={(item) => item}
                >
            </FlatList>
                
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      widht: 100,
      backgroundColor: 'black',
      alignItems: 'center',
      justifyContent: 'center',
    },
    textHistorico: {
        marginBottom: "5px",
        marginLeft: "5px", 
        marginTop:"5px", 
        color: "white",
        fontSize: "40px"
    },
    historico: {
        width: "300px", 
        height:"30px",
        marginBottom: "10px"
    }

});