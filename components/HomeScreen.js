import * as React from 'react';
import {Text, View,FlatList,SafeAreaView,Image} from 'react-native';
import 'react-native-gesture-handler';
import styles from './Styles';
import Components from './components';
import DataDumy from './DataDumy';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = ()=>{     
    const navigation = useNavigation();
    return(
        <View style={styles.container_home}>
            <View style={styles.toolbar_home}>
                <Text>Saldo Anda:</Text>
                <Text style={styles.text_harga}>Rp. 1.0709.999.000</Text>
            </View>
            <View style={styles.container_menu}>
                <View style={styles.container_button_menu}>
                    <Components.ButtonMenu name="add" text="Topup" screenName="TopUP"/>                       
                    <Components.ButtonMenu name="scan" text="QRPay" screenName="QR Payment"/>                      
                    <Components.ButtonMenu name="arrow-forward" text="Transfer" screenName="Transfer"/>                      
                </View>   
                <View>
                    <Text>5 Transaksi Terakhir</Text>    
                    <SafeAreaView>
                        <FlatList
                            data = {DataDumy.dataTransafer}
                            renderItem = {Components.renderTransaksiItem}                  
                        />            
                    </SafeAreaView>                                                                    
                </View>             
            </View>
        </View>
    )    
}
const TransaksiScreen = ()=>{
    return(
        <View style={styles.container_home}>      
        <View style={styles.container_menu}>            
            <View>                                    
                <FlatList
                    data = {DataDumy.dataTransafer}
                    renderItem = {Components.renderTransaksiItem}                  
                />                                                                
            </View>             
        </View>
    </View>
    )
}

const ProfileScreen = ()=>{
    return(
        <View style={styles.container_home}>
            <View style={styles.container_profile}>  
                <Image                
                style = {styles.containerProfile}        
                />     
                <Text style={styles.textPrimary}>Alwan Alyafi Mulyawan</Text>                          
                <Text style={styles.textPrimary}>088777665544</Text>
                </View>            
            <View style={styles.container_menu}>   
                <Components.ButtonPrimary title="UBAH PROFIL" screenName=""/>
                <Components.ButtonPrimary title="GANTI PASSWORD" screenName=""/>
                <Components.ButtonPrimary title="LOGOUT" screenName="Login"/>                
            </View>
        </View>
    )
}

export {HomeScreen,TransaksiScreen,ProfileScreen}