import * as React from 'react';
import {View,Image,Text,StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import 'react-native-gesture-handler';
import {Button} from 'react-native-paper';


const TopUpBerhasilActivity = ()=>{
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style = {styles.wrapperImage}>
            <Image
            source={require('../../assets/img/vectorTopUP.png')}/>
            </View>
            <View style={styles.wrapperContent}>
                <Text style={styles.textHeader}>Top Up Berhasil</Text>
                <Text style={styles.textHeader}>Rp.60,000</Text>
                <View style={styles.surfaceCard}>
                    <Text style={styles.cardText}>20 Agustus 2020</Text>
                    <Text style={styles.cardText}>VA BNI</Text>                    
                </View>
                <Button 
                mode="contained"
                onPress = {()=>{navigation.navigate('Home')}}
                style={styles.button}>SELESAI</Button>
            </View>

        </View>
    );     
};

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    wrapperImage:{
        flex:1,
        alignItems:"center",
        justifyContent:"flex-end",
        padding:16        
    },
    wrapperContent:{
        flex:2,
        justifyContent:"flex-start",           
        alignItems:"center"
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
export default TopUpBerhasilActivity;