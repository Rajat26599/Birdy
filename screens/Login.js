import { useState } from 'react';
import { Alert, StyleSheet, Text, View, Image } from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInput } from 'react-native-gesture-handler';
import { TouchableOpacity } from 'react-native';
import colors from '../colors';

export default function Login({ navigation }){
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");

    const onHandleLogin = () => {
        if(email != "" && password != ""){
            signInWithEmailAndPassword(auth, email, password)
                .then(() => console.log("Login Successful"))
                .catch((err) => Alert.alert("Login error", err.message));
        }
    };
    return (
        <View style={styles.container}>
            <Image
                style={styles.backImg}
                source={require('../assets/birdBackground.jpg')}
            />
            <View style={styles.whiteSheet} />
            <SafeAreaView style={styles.form}>
                <Text style={styles.title}>Login</Text>
                <TextInput 
                    style={styles.input}
                    placeholder="Enter email"
                    autoCapitalize='none'
                    keyboardType='email-address'
                    textContentType='emailAddress'
                    autoFocus={true}
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />
     
                <TextInput 
                    style={styles.input}
                    placeholder="Enter password"
                    autoCapitalize='none'
                    autoCorrect={false}
                    textContentType='password'
                    secureTextEntry={true}
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                />

                <TouchableOpacity style={styles.button} onPress={onHandleLogin}>
                    <Text style={{fontWeight:'bold', color:'#fff', fontSize:10}}>Log In</Text>
                </TouchableOpacity>
                <View style={{marginTop:20, flexDirection:'row', alignItems:'center', alignSelf:'center'}}>
                    <Text style={{color:'gray', fontWeight:'600', fontSize:14}}>Don't have an account?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                        <Text style={{color:'#f57c00', fontWeight:'600', fontSize:14}}> Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    title: {
        fontSize: 36,
        fontWeight: 'bold',
        color: "orange",
        alignSelf: "center",
        paddingBottom: 24,
        paddingTop: 60,
    },
    input: {
        backgroundColor: colors.mediumGray,
        height: 50,
        marginBottom: 20,
        fontSize: 16,
        borderRadius: 10,
        padding: 12
    },
    backImg: {
        width: '100%',
        height: 260,
        position: 'absolute',
        top: 0,
        resizeMode: 'cover',
    },
    whiteSheet: {
        width: '100%',
        height: '75%',
        position: 'absolute',
        bottom: 0,
        backgroundColor: '#fff',
        borderTopLeftRadius: 60
    },
    form: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 30
    },
    button: {
        backgroundColor: '#f57c00',
        height: 50,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40
    }
}) 