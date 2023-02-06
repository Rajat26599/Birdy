import React, { useEffect } from "react";
import { View, TouchableOpacity, Text, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from '@expo/vector-icons';
import colors from '../colors';
import { Entypo } from '@expo/vector-icons';

const Home = () => {
    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
            headerTitle: 'Birdy',
            headerTitleAlign: 'center',
            headerLeft: () => {
                return <FontAwesome name="search" size={24} color={colors.gray} style={{marginLeft:15}} />
            },
            headerRight: () => {
                return <TouchableOpacity
                    onPress={() => navigation.navigate("Profile")}
                    style={{ 
                        height:40, 
                        width:40, 
                        marginRight: 15,
                        borderRadius: 25,
                        borderWidth: 1,
                        borderColor: colors.gray,
                        overflow: 'hidden',
                    }}
                >
                    <Image
                        source={require('../assets/chatBird.jpg')}
                        style={{
                            width: 40,
                            height: 40,
                        }}
                    />
                </TouchableOpacity>
            }
        }, [navigation]);
    });

    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => navigation.navigate("Chat")}
                style={styles.chatButton}
            >
                <Entypo name="chat" size={24} color={colors.lightGray} />
            </TouchableOpacity>
        </View>
    )
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        backgroundColor: '#fff'
    },
    chatButton: {
        backgroundColor: colors.primary,
        height: 50,
        width: 50,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: colors.primary,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowRadius: 8,
        shadowOpacity: .9,
        elevation: 3,
        marginRight: 20,
        marginBottom: 50,
    }
})