import * as React from 'react';
import {Text, View,FlatList,SafeAreaView,StyleSheet,ScrollView} from 'react-native';
import 'react-native-gesture-handler';
import Components from '../../components/components';
import DataDumy from '../../components/DataDumy';
import { useNavigation } from '@react-navigation/native';

const HomeActivity = ()=>{     
    const navigation = useNavigation();
    return(
        <View style={styles.container}>
            <View style={styles.statusBar}>
                <Text>Saldo Anda:</Text>
                <Text style={styles.textHarga}>Rp. 1.0709.999.000</Text>
            </View>
            <View style={styles.containerMenu}>
                <View style={styles.cardMenu}>
                    <Components.ButtonMenu name="add" text="Topup" screenName="TopUP"/>                       
                    <Components.ButtonMenu name="scan" text="QRPay" screenName="QRPayment"/>                      
                    <Components.ButtonMenu name="arrow-forward" text="Transfer" screenName="Transfer"/>                      
                </View>                   
                <Text>5 Transaksi Terakhir</Text>                    
                    <FlatList                          
                            data = {DataDumy.dataTransafer}
                            renderItem = {Components.renderTransaksiItem}                  
                        />                                           
            </View>
        </View>
    )    
}

const styles =  StyleSheet.create({
    container:{
        flex:1,
        alignItems:"stretch",
        backgroundColor:"#F0F0F0"
    },
    statusBar:{
        height:134,        
        backgroundColor:'#FFFFFF',
        justifyContent:'flex-end',       
        alignItems:'flex-start',
        padding:16 
    },
    textHarga:{
        fontSize:32,
        fontWeight:'bold'
    },
    containerMenu:{   
        marginVertical:16,     
        paddingHorizontal:16        
    },
    cardMenu:{
        height:100,
        flexDirection:"row",
        justifyContent:"space-around",
        backgroundColor: "#4982C1",            
        padding:8,
        borderRadius:5,        
    }
})

export default HomeActivity;