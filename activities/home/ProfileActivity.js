import * as React from 'react';
import {Text, View,Image,StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
const ProfileActivity = ()=>{
    const navigation = useNavigation();
    return(
        <View style={styles.container}>
            <View style={styles.containerProfile}>  
                <Image                
                style = {styles.wrapperImage}        
                />     
                <Text style={styles.textPrimary}>Alwan Alyafi Mulyawan</Text>                          
                <Text style={styles.textPrimary}>088777665544</Text>
                </View>            
            <View style={styles.containerMenu}>   
                <Button
                style = {styles.button}  
                onPress={()=>{navigation.navigate("Login")}}                
                mode="contained"
                >UBAH PROFIL</Button>  
                <Button
                style = {styles.button}  
                onPress={()=>{navigation.navigate("Login")}}                
                mode="contained"
                >ganti Password</Button>
                <Button
                style = {styles.button}  
                onPress={()=>{navigation.navigate("Login")}}                
                mode="contained"
                >logout</Button>                                       
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"stretch",
        backgroundColor:"#F0F0F0"
    },
    containerProfile:{
        flex:3,
        backgroundColor:"#005690",
        justifyContent:"center",
        alignItems:"center"
    },
    wrapperImage:{
        width:120,
        height:120,
        borderRadius:120/2,
        backgroundColor:"white"            
    },
    containerMenu:{
        flex:4,
        alignItems:"center"                         
    },
    textPrimary:{
        fontSize:18,
        fontWeight:'400',
        color:"#FFFFFF",
        marginTop:8
    },
    button:{
        borderRadius:4,        
        width:280,
        height:48, 
        backgroundColor:'#4982C1',
        marginTop:20,
        justifyContent:'center',                     

    },
});

export default ProfileActivity;