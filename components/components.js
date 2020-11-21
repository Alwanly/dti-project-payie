import React from 'react';
import { TouchableOpacity, View,Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const ButtonMenu = ({name,text,screenName}) => {    
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={()=>navigation.navigate(screenName)}>
            <View style={styles.buttonContainer}>
                <View style={styles.buttonIcon}>
                    <Icon 
                    name={name}
                    size={25}
                    color="gray"                    
                    />
                </View>
                <Text style={styles.buttonText}>{text}</Text>
            </View>
        </TouchableOpacity>
    );
  }
const onNavivation = (nav)=>{
    if(nav == "TopUP"){
        
    }
}
const renderTransaksiItem = ({item}) =>(
    <View style={styles.containerTransaksiItem}>
        <View style={styles.IconTransaksiItem}>
                <Icon
                name="repeat"
                size={25}
                color="gray"/>            
            </View>        
        <View style={styles.ContentTransaksiItem}>
            <Text style={styles.textTransastiItem}>Rp.{item.price}</Text>
            <Text style={styles.textTransastiItem}>Transafer ke {item.price}</Text>
            </View>        
        <View style={styles.DateTransaksiItem}>
                <Text>{item.date}</Text>
            </View>        
        
    </View>
)

const ButtonPrimary = ({title,screenName})=>{   
    const navigation = useNavigation(); 
        return(
            <TouchableOpacity onPress={()=>navigation.navigate(screenName)}>                
                <View style = {styles.buttonPrimary}>
                <Text style = {{color: 'white'}}>{title}</Text>
                </View>
            </TouchableOpacity>
        )
    }

export default {ButtonMenu,renderTransaksiItem,ButtonPrimary}

const styles =StyleSheet.create({
    buttonContainer:{                        
        padding:8,
        flex:1, 
        padding:10,
        alignItems: 'center',               
    },
    buttonIcon:{
        height:50,
        width:50,        
        backgroundColor:"white",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        borderRadius:10                                        
    },
    buttonText:{
        color:"#FFFFFF",
        fontSize:12,
        fontWeight:"500"
    },
    containerTransaksiItem:{
        flex:1,
        flexDirection:"row",        
        height:80,     
        marginTop:8,                                           
        borderRadius:2,                
        borderStyle: "solid",
        borderWidth:1,
        backgroundColor:'#FFF'
    },
    IconTransaksiItem:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"        
    },
    ContentTransaksiItem:{
        flex:3,
        padding:6        
    },
    DateTransaksiItem:{
        flex:2,
        justifyContent:"center",
        alignItems:"center"
    },
    textTransastiItem:{
        marginTop:6,
    },
    buttonPrimary:{
        backgroundColor:"#4982C1",
        marginTop:8,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:2,
        height:48,
        marginHorizontal:21        
    },    
})