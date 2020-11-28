import * as React from 'react';
import {View,StyleSheet} from 'react-native';
import { TextInput,Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';


const Register = ()=>{
 const navigation = useNavigation();
    return(
        <View style = {styles.container}>
        <TextInput
        style = {styles.inputField}
        underlineColorAndroid="white"
        mode="outlined"
        placeholder="Email"/>
        <TextInput
        style = {styles.inputField}
        secureTextEntry={true}
        underlineColorAndroid="white"
        mode="outlined"
        placeholder = "Password"/>
        <TextInput
        style = {styles.inputField}
        underlineColorAndroid="white"
        mode="outlined"
        placeholder = "Nama"/>
        <TextInput
        style = {styles.inputField}
        underlineColorAndroid="white"
        mode="outlined"
        placeholder = "No HandPhone"/>     
        <Button
        mode="contained"
        style = {styles.button}            
        onPress = {() =>navigation.navigate('Login')
            }            
        >submit</Button> 
    </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"white"
    },
    inputField:{
        marginBottom:8,        
        width:300,
        backgroundColor:'white'        
    },
    button:{
        padding:3,
        width:300, 
        backgroundColor:'#4982C1',
        marginTop:20,
        justifyContent:'center'               
    },

})
export default Register;