import * as React from 'react';
import {View,Image,StyleSheet,Text} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import 'react-native-gesture-handler';



const TransferActivity = ()=>{
    const navigation = useNavigation();
    return (
        <View style={{flex:1}}>
            <View style = {styles.wrapperImage}>
            <Image
            source={require('../../assets/img/vectorTransfer.png')}/>
            </View>
            <View style={styles.containerContent}>
               <TextInput 
               mode="outlined"                       
                style = {styles.inputField}
                placeholder = "Nominal Transfer"
                />
             <TextInput
             mode="outlined"
             style = {styles.inputField}
             placeholder = "Nomor Handphone"
            />
            <View style={{alignItems:"center"}}>
                <Text>Penerima :</Text>
                <Text>Alwan</Text>
            </View>
            <Button
            style={styles.button}
            mode="contained"
            onPress={()=>navigation.navigate("TransferBerhasil")}
            >perisak nomor</Button>           
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
export default TransferActivity;