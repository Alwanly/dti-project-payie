import * as React from 'react';
import {View,FlatList,StyleSheet} from 'react-native';
import Components from '../../components/components';
import DataDumy from '../../components/DataDumy';


const TransaksiActivity = ()=>{
    return(
        <View style={styles.container}>      
        <View style={styles.containerMenu}>            
            <View>                                    
                <FlatList
                    data = {DataDumy.dataTransafer}
                    renderItem = {Components.renderTransaksiItem}                  
                />                                                                
            </View>             
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"stretch",
        backgroundColor:"#F0F0F0"
    },
    containerMenu:{
        flex:4,   
        padding:16,
    },
});

export default TransaksiActivity; 