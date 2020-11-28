import * as React from 'react';
import {Text, View,StyleSheet} from 'react-native';
import {Button,TextInput} from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';


const Login = ()=>{
    const navigation = useNavigation();
    return (
        <View style = {styles.container}>
            <Text            
            style = {styles.textLogo}
            >Payie</Text>
            <TextInput
            style = {styles.inputField}
            placeholder ="Email"
            underlineColorAndroid="white"
            mode="outlined"
            />
            <TextInput
            secureTextEntry={true}
            style = {styles.inputField}
            placeholder ="Password"
            underlineColorAndroid="white"            
            mode="outlined"
            />
            <Button
            style = {styles.button}            
            mode="contained"  
            onPress ={()=> navigation.navigate('Home')}                   
            >login</Button>

            <Text
            onPress = {()=> navigation.navigate('Registrasi')}             
            style = {styles.link}>Registrasi</Text>

        </View>
    );     
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:'center',
        backgroundColor:'white'
    },
    textLogo:{
        fontSize:20,
        fontStyle:"italic",
        fontWeight:"bold",        
        textAlign:"center",
        padding:8,        
        color: '#3fc7d4',  
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
    link:{
        marginTop:20,
        fontWeight:'100',
        fontStyle:"normal",
        color:'blue',
        borderBottomColor:'blue',
        borderBottomWidth:1        
    }    
});

export default Login;