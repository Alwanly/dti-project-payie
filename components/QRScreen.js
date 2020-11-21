import * as React from 'react';
import {View,Image,StyleSheet,TouchableHighlight,Text,TextInput} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import 'react-native-gesture-handler';
import Components from './components';
import Icon from 'react-native-vector-icons/Ionicons';
import styleRoot from './Styles';
const QRpayment = ()=>{
    const navigation = useNavigation();
    return (
        <View style={styles.container}>  
            <TouchableHighlight onPress={()=> navigation.navigate("Konfirmasi Bayar")}>                
                <View style={styles.spacePhoto}>
                <Icon
                name="camera"
                size={25}
                color="gray"/>
                </View>
            </TouchableHighlight>          
        </View>
    );     
};

const KonfirmasiBayar = ()=>{
    return(
        <View style={styles.container}>
            <View style={styles.containerHeader}>
            <Image
            source={require('../assets/2924708.png')}            
            />
            <TextInput
            style={styles.TextInputPayment}
            placeholder="Rp.60000"
            />
            </View>
            <View style={styles.containerContent}>
                <View style={styleRoot.card}>
                    <Text style={styleRoot.cardText}>Pembayaran Kepada:</Text>                
                    <Text style={styleRoot.cardText}>DTI Telkom</Text>                
                    <Text style={styleRoot.cardText}>Jl.Telekomunikasi</Text>                
                </View>
                <Components.ButtonPrimary title="SUBMIT" screenName="PaymentInfo"/>                
            </View>
        </View>
    )    
}

const PaymentInfo = ()=>{
    return(
        <View style={styles.container}>
            <View style={styles.containerHeader}>
                <Image
                    source={require('../assets/2924708.png')}            
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
                <Components.ButtonPrimary title="SELESAI" screenName="Home"/>                
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
        alignItems:"stretch",
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
    }
})
export {QRpayment,KonfirmasiBayar,PaymentInfo}