import * as React from 'react';
import {View,Image,TextInput,Text} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import 'react-native-gesture-handler';
import styles from './Styles';
import Components from './components';


const Transfer = ()=>{
    const navigation = useNavigation();
    return (
        <View style={{flex:1}}>
            <View style = {styles.containerImage}>
            <Image
            source={require('../assets/6617.png')}/>
            </View>
            <View style={styles.containerContent}>
               <TextInput
            secureTextEntry={true}
            style = {styles.textInputPrimary}
            placeholder = "Nominal Transfer"
            />
             <TextInput
            secureTextEntry={true}
            style = {styles.textInputPrimary}
            placeholder = "Nomor Handphone"
            />
            <Components.ButtonPrimary title="PERIKSA NOMOR" screenName="TransferBerhasil"/>
            </View>

        </View>
    );     
};
const TransferBerhasil = ()=>{
    const navigation = useNavigation();
    return (
        <View style={{flex:1}}>
            <View style = {styles.containerImage}>
            <Image
            source={require('../assets/6617.png')}/>
            </View>
            <View style={styles.containerContent}>
                <Text style={styles.textTopUpHeader}>Transfer Berhasil</Text>
                <Text style={styles.textTopUpHeader}>Rp.100,000</Text>
                <View style={styles.card}>
                    <Text style={styles.cardText}>30 Agustus 2020</Text>
                    <Text style={styles.cardText}>Penerima :Alwan</Text>                    
                    <Text style={styles.cardText}>0909090</Text>                    
                </View>
                <Components.ButtonPrimary title="SELESAI" screenName="Home"/>
            </View>

        </View>
    );     
};

export {Transfer,TransferBerhasil};