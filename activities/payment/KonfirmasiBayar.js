import * as React from 'react';
import {View,Image,StyleSheet,TouchableHighlight,Text,KeyboardAvoidingView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {Button, TextInput} from 'react-native-paper';
import Components from '../../components/components';

const QRPayConfirmasiActivity = ()=>{
    const navigation = useNavigation();
    return(
        <View style={styles.container}>
            <View style={styles.containerHeader}>
            <Image
            source={require('../../assets/img/vectorPay.png')}            
            />
            <TextInput                        
            style={styles.TextInputPayment}
            placeholder="Rp.60000"
            underlineColorAndroid="white"
            underlineColor="white"
            mode="flat"
            />
            </View>
            <View style={styles.containerContent}>
                <View style={styles.surfaceCard}>
                    <Text style={styles.cardText}>Pembayaran Kepada:</Text>                
                    <Text style={styles.cardText}>DTI Telkom</Text>                
                    <Text style={styles.cardText}>Jl.Telekomunikasi</Text>                
                </View>
                <Button
                onPress={()=>{navigation.navigate("PaySuccess")}}
                style={styles.button}
                mode="contained"
                >submit</Button>
            </View>
        </View>
    )    
}

const styles = StyleSheet.create({
    container:{
        justifyContent:"center",
        flex:1
    },
    spacePhoto:{        
        alignSelf:"center",        
        height:319,
        width:319,
        backgroundColor:"#C4C4C4",
        justifyContent:"center",
        alignItems:"center"       
    },
    containerHeader:{
        flex:2,
        alignItems:"center",
        justifyContent:"center"
    },
    containerContent:{
        flex:2,
        alignItems:"center",
        justifyContent:"flex-start",
    },
    TextInputPayment:{
        marginVertical:8,
        fontSize:24,        
        width:280,
        height:48,
        textAlign:"center",                
    },
    surfaceCard:{     
        borderRadius:4,           
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
    button:{
        borderRadius:4,
        padding:3,
        width:280,
        height:48, 
        backgroundColor:'#4982C1',
        marginTop:20,
        justifyContent:'center',                 
    },
})
export default QRPayConfirmasiActivity;