import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useFonts } from "expo-font";
import { useEffect } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import { SplashScreen } from "expo-router";

SplashScreen.preventAutoHideAsync();
const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        console.log(email, password)
    }
    const [fontsloaded, error] = useFonts({
        "Convergence-Regular": require("../assets/fonts/Convergence-Regular.ttf"),
    })

    useEffect(() => {
        if (error) throw error;
        if (fontsloaded) SplashScreen.hideAsync();
    }, [fontsloaded, error])

    if (!fontsloaded && !error) return null;

    return (
        <>
            <View className="flex items-center mt-20">
                <Text className="text-3xl font-convergence">Repped</Text>
            </View>

            <View className="flex-1 bg-black mt-20 rounded-t-2xl ">
                <Text className="flex text-2xl text-white font-convergence p-10">Login</Text>
                <TextInput
                    className="flex ml-10 bg-white  p-2 w-[80%] rounded-md mb-4"
                    placeholder="Email"
                    value={email}
                    onChange={setEmail}
                />
                <TextInput
                    className="flex ml-10 bg-white  p-2 w-[80%] rounded-md mb-4"
                    placeholder="Password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />
                <TouchableOpacity
                    className="w-[80%] bg-purple-500 p-2 rounded-md items-center ml-10 mt-5"
                    onPress={handleLogin}
                >
                    <Text className="text-white font-semibold ">Login</Text>
                </TouchableOpacity>

                <Text className="text-white mt-5 ml-10">
                    Already have an account? <Text className="text-purple-500">Sign Up</Text>
                </Text>
                <View className="flex justify-center space-x-10 mt-20 flex-row ">
                    <TouchableOpacity className="mr-3">
                        <Icon name="facebook" size={24} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Icon name="google" size={24} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity className="ml-3">
                        <Icon name="twitter" size={24} color="white" />
                    </TouchableOpacity>
                </View>
            </View>

        </>
    );
}

export default Login;
