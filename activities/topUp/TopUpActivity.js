import * as React from 'react';
import {View,Image,StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {Button,TextInput} from 'react-native-paper';


const TopUpActivity = ()=>{
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style = {styles.wrapperImage}>
                <Image
                source={require('../../assets/img/vectorTopUP.png')}/>
                </View>
            <View style={styles.wrapperContent}>
                <TextInput                            
                style = {styles.inputField}
                placeholder = "Nominal Top UP"
                underlineColorAndroid="white"
                mode='outlined'
                />
                <Button
                mode="contained"
                onPress={()=> navigation.navigate('TopUpBerhasil')}
                style={styles.button}>submit</Button>
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

export default TopUpActivity;