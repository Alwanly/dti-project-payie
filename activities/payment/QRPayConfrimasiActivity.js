import * as React from 'react';
import {View,StyleSheet,TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { RNCamera } from 'react-native-camera';
const QRPayConfrimasiActivity = ()=>{
    const navigation = useNavigation();
    return (
        <View style={styles.container}>          
            <RNCamera style={styles.wrapperPhoto}>            
            <TouchableOpacity
            onPress={()=>{navigation.navigate('QRPayConfirmasi')}}
            >                
                <Icon 
                    name="scan"
                    size={100}
                    color="white"                    
                    />
            </TouchableOpacity>
            </RNCamera>            
        </View>
    );     
};

const styles = StyleSheet.create({
    container:{
        justifyContent:"center",
        flex:1
    },
    wrapperPhoto:{        
        alignSelf:"center",        
        height:200,
        width:319,
        backgroundColor:"#C4C4C4",
        justifyContent:"center",
        alignItems:"center"       
    },
    capture: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        color: '#000',
        padding: 10,
        margin: 40
      }
})
export default QRPayConfrimasiActivity;