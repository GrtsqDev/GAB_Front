import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import * as SplashScreen from "expo-splash-screen";
import * as NavigationBar from "expo-navigation-bar";
import { useEffect, useState } from "react";
import { Platform } from "react-native";
import { useFonts, InterTight_500Medium } from "@expo-google-fonts/inter-tight";
import "../../global.css";

// Предотвращаем автоматическое скрытие splash screen
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const [fontsLoaded] = useFonts({
        InterTight_500Medium,
    });

    // Настраиваем цвет навигационной панели Android
    useEffect(() => {
        if (Platform.OS === "android") {
            NavigationBar.setBackgroundColorAsync("transparent");
            NavigationBar.setButtonStyleAsync("dark");
        }
    }, []);

    useEffect(() => {
        if (fontsLoaded) SplashScreen.hideAsync();
    }, [fontsLoaded]);

    if (!fontsLoaded) return null;

    return (
        <SafeAreaProvider>
            <StatusBar style="light" />
            <Stack
                screenOptions={{
                    headerShown: false,
                }}>
                <Stack.Screen name="login" options={{ headerShown: false }} />
                <Stack.Screen name="register" options={{ headerShown: false }} />
                <Stack.Screen name="kyc" options={{ headerShown: false }} />
                <Stack.Screen name="(protected)" options={{ headerShown: false }} />
            </Stack>
        </SafeAreaProvider>
    );
}
