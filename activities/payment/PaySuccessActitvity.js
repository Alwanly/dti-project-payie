import * as React from 'react';
import {View,Image,StyleSheet,TouchableHighlight,Text,TextInput} from 'react-native';
import {Button} from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import 'react-native-gesture-handler';
import Components from '../../components/components';
import styleRoot from '../../assets/Styles';


const PaySuccessActitvity = ()=>{
    const navigation = useNavigation();
    return(
        <View style={styles.container}>
            <View style={styles.containerHeader}>
                <Image
                    source={require('../../assets/img/vectorPay.png')}            
                />
                <Text style={styleRoot.textTopUpHeader}>Pembayaran Behasil!</Text>
                <Text style={styleRoot.textTopUpHeader}>Rp.60,000</Text>            
            </View>
            <View style={styles.containerContent}>
                <View style={styleRoot.card}>
                    <Text style={styleRoot.cardText}>Pembayaran Kepada:</Text>                
                    <Text style={styleRoot.cardText}>DTI Telkom</Text>                
                    <Text style={styleRoot.cardText}>Jl.Telekomunikasi</Text>                
                </View>
                <Button
                onPress={()=>{navigation.navigate("Home")}}
                style={styles.button}
                mode="contained"
                >selesai</Button>
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
        fontSize:24,
        borderBottomColor:"gray",
        borderStyle:"solid",
        borderBottomWidth:1,
        width:280,
        height:48,
        textAlign:"center",                
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
export default PaySuccessActitvity;