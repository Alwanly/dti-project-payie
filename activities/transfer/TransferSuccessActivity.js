import * as React from 'react';
import {View,Image,Text,StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import 'react-native-gesture-handler';
import {Button} from 'react-native-paper';

const TransferSuccessActivity = ()=>{
    const navigation = useNavigation();
    return (
        <View style={styles.constainer}>
            <View style = {styles.wrapperImage}>
            <Image
            source={require('../../assets/img/vectorTransfer.png')}/>
            </View>
            <View style={styles.containerContent}>
                <Text style={styles.textHeader}>Transfer Berhasil</Text>
                <Text style={styles.textHeader}>Rp.100,000</Text>
                <View style={styles.surfaceCard}>
                    <Text style={styles.cardText}>30 Agustus 2020</Text>
                    <Text style={styles.cardText}>Penerima :Alwan</Text>                    
                    <Text style={styles.cardText}>0909090</Text>                    
                </View>
                <Button
                style={styles.button}
                mode="contained"
                onPress={()=>{navigation.navigate("Home")}}
                >selesai</Button>
            </View>

        </View>
    );     
};

const styles = StyleSheet.create({
    constainer:{
        flex:1
    },
    wrapperImage:{
        flex:1,
        alignItems:"center",
        justifyContent:"flex-end",
        padding:16        
    },    
    containerContent:{
        flex:2,
        alignItems:"center"
    },
    inputField:{
        marginBottom:8,        
        width:300,
        backgroundColor:'white'             
    },
    textTopUpHeader:{
        textAlign:"center",
        fontSize:24,
        marginTop:6        
    },
    button:{
        borderRadius:4,
        padding:3,
        width:280,
        height:48, 
        backgroundColor:'#4982C1',
        marginTop:20,
        justifyContent:'center',                 
    },
    surfaceCard:{
        marginTop:16,
        width:280,
        paddingVertical:8,
        alignItems:"center",        
        backgroundColor:"#4982C1",
    },
    cardText:{
        fontSize:18,
        fontWeight:'400',
        color:"#FFFFFF",
        marginVertical:6,
        textAlign:"center"          
    },
    textHeader:{
        textAlign:"center",
        fontSize:24,
        marginTop:6        
    },
    
})

export default TransferSuccessActivity;