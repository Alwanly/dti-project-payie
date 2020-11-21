import {StyleSheet} from 'react-native';


const styles = StyleSheet.create({
    container:{ 
        flex: 1, 
        alignItems: 'stretch', 
        justifyContent: 'center',                
        padding:8

     },
     containerImage:{
         flex:1,
         alignItems:"center",
         justifyContent:"flex-end",
         padding:16
     },
     containerContent:{
         flex:2,
         justifyContent:"flex-start",                                    
     },
     textInputPrimary:{
         marginTop:8,
         marginHorizontal:21,
         height:48,
         borderWidth:1,
         borderColor:"#C3C3C3"
     },
    input:{        
        marginBottom:8,
        borderWidth: 1,
        borderColor:'gray'        
    },
    title_brand:{
        fontSize:20,
        fontStyle:"italic",
        fontWeight:"bold",        
        textAlign:"center",
        padding:8,        
        color: '#3fc7d4',        
    },
    link_register:{
        fontSize:14,
        textAlign:"center",
        margin:8,
        textDecorationLine:"underline"                
    },
    container_home:{
        flex: 1, 
        alignItems:'stretch',
        backgroundColor:'#f2f2f2'        
    },           
    toolbar_home:{
        flex:1,
        backgroundColor:'#FFF',
        justifyContent:'flex-end',       
        alignItems:'flex-start',
        padding:16        
    },    
    container_profile:{
        flex:3,
        backgroundColor:"#005690",
        justifyContent:"center",
        alignItems:"center"
    },
    container_menu:{
        flex:4,   
        padding:16,              
    },
    section_tow:{
        flex:3,
        backgroundColor:'green'                
    },
    text_harga:{
        fontSize:32,
        fontWeight:'bold'
    },
    container_button_menu:{
        height:100,
        flexDirection:"row",
        justifyContent:"space-around",
        backgroundColor: "#4982C1",            
        padding:8,
        borderRadius:5,
    },
    containerProfile:{
        width:120,
        height:120,
        borderRadius:120/2,
        backgroundColor:"white"        
    },
    textPrimary:{
        fontSize:18,
        fontWeight:'400',
        color:"#FFFFFF",
        marginTop:8
    },
    textTopUpHeader:{
        textAlign:"center",
        fontSize:24,
        marginTop:6        
    },
    card:{
        marginTop:6,
        backgroundColor:"#4982C1",
        width:280,
        alignSelf:"center",
        paddingVertical:6
    },
    cardText:{
        fontSize:18,
        fontWeight:'400',
        color:"#FFFFFF",
        marginVertical:6,
        textAlign:"center"        
    }      
})

export default styles;