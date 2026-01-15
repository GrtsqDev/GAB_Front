import { View, Text, StyleSheet } from "react-native";
import { useState, useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { CameraView, CameraType, useCameraPermissions } from "expo-camera";
import Button from "@/components/Button";
import Header from "@/components/Header";

export default function UploadPassportScreen() {
    const router = useRouter();
    const [permission, requestPermission] = useCameraPermissions();
    const cameraRef = useRef<CameraView>(null);

    const handleTakePhoto = async () => {
        if (cameraRef.current) {
            const photo = await cameraRef.current.takePictureAsync();
            if (photo) {
                // Сохраняем URI фото и возвращаемся на страницу register с параметром
                router.push({
                    pathname: "/register",
                    params: { photoTaken: "true" },
                });
                // TODO: сохранить URI фото (photo.uri) в глобальное состояние Zustand или AsyncStorage
                console.log("Photo URI:", photo.uri);
            }
        }
    };

    // Если разрешения еще не запрошены
    if (!permission) {
        return <View className="flex-1 bg-black" />;
    }

    // Если нет разрешения на камеру
    if (!permission.granted) {
        return (
            <SafeAreaView className="flex-1 bg-black" edges={["top"]}>
                <Header variant="back-only" />
                <View className="flex-1 justify-center items-center px-6">
                    <Text className="text-white text-center text-lg mb-6">
                        Для продолжения необходимо{"\n"}разрешение на использование камеры
                    </Text>
                    <Button title="Предоставить доступ" onPress={requestPermission} />
                </View>
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView className="flex-1 bg-black" edges={["top"]}>
            <Header variant="back-only" />
            <View className="flex-1">
                <Text className="text-white text-xl px-2 mb-4">
                    Расположите паспорт в данной{"\n"}области экрана
                </Text>

                {/* Camera View с рамкой */}
                <View className="flex-1 px-2 mb-6">
                    <View className="flex-1 rounded-2xl overflow-hidden border-2 border-white">
                        <CameraView
                            ref={cameraRef}
                            style={StyleSheet.absoluteFillObject}
                            facing="back"
                        />
                    </View>
                </View>

                {/* Кнопка для съемки */}
                <View className="px-2 mb-16">
                    <Button title="Сделать фото" variant="light" onPress={handleTakePhoto} />
                </View>
            </View>
        </SafeAreaView>
    );
}
