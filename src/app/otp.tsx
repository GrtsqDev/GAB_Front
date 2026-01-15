import {
    View,
    Text,
    ScrollView,
    KeyboardAvoidingView,
    Platform,
    TextInput,
    Keyboard,
} from "react-native";
import { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLocalSearchParams } from "expo-router";
import Button from "@/components/Button";
import Header from "@/components/Header";

export default function OTPScreen() {
    const { phoneNumber } = useLocalSearchParams<{ phoneNumber: string }>();
    const [otpCode, setOtpCode] = useState("");
    const [keyboardHeight, setKeyboardHeight] = useState(0);
    const [countdown, setCountdown] = useState(5);

    const formatPhoneNumber = (phone: string) => {
        if (!phone || phone.length !== 10) return phone;
        return `${phone.slice(0, 3)} ${phone.slice(3, 6)}-${phone.slice(6, 8)}-${phone.slice(8, 10)}`;
    };

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener("keyboardDidShow", (e) => {
            setKeyboardHeight(e.endCoordinates.height);
        });
        const keyboardDidHideListener = Keyboard.addListener("keyboardDidHide", () => {
            setKeyboardHeight(0);
        });

        return () => {
            keyboardDidShowListener.remove();
            keyboardDidHideListener.remove();
        };
    }, []);

    useEffect(() => {
        if (countdown > 0) {
            const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
            return () => clearTimeout(timer);
        }
    }, [countdown]);

    const handleResend = () => {
        if (countdown === 0) {
            setCountdown(5);
            // Логика повторной отправки кода
            console.log("Resending OTP");
        }
    };

    return (
        <SafeAreaView className="flex-1 bg-black">
            <Header variant="back-only" />
            <KeyboardAvoidingView
                className="flex-1"
                behavior={Platform.OS === "ios" ? "padding" : "height"}>
                <ScrollView
                    contentContainerStyle={{ flexGrow: 1, paddingBottom: 20 }}
                    showsVerticalScrollIndicator={false}
                    keyboardShouldPersistTaps="handled"
                    contentInsetAdjustmentBehavior="automatic">
                    <View
                        className="flex-1 px-6 justify-center"
                        style={{ marginBottom: keyboardHeight > 0 ? keyboardHeight : 0 }}>
                        {/* Заголовок */}
                        <Text className="text-white text-[17px] font-medium leading-[22px] tracking-[0.4px] mb-6">
                            Добро пожаловать!
                        </Text>

                        {/* Описание */}
                        <Text className="text-white text-[17px] font-medium leading-[22px] tracking-[0.4px] mb-8">
                            Завершите авторизацию{"\n"}и регистрацию, чтобы пользоваться{"\n"}
                            нашим приложением.
                        </Text>

                        {/* Информация о номере телефона */}
                        <Text className="text-gray-400 text-sm leading-5 mb-2">
                            На ваш номер{" "}
                            <Text className="text-white">
                                +7 {formatPhoneNumber(phoneNumber || "")}
                            </Text>{" "}
                            был отправлен код,{"\n"}для прохождения вашей верификации
                        </Text>

                        {/* Поле ввода кода */}
                        <TextInput
                            className="bg-[#141515] text-white text-base px-4 py-4 rounded-lg mb-4"
                            placeholder="Введите код"
                            placeholderTextColor="#5E5E5E"
                            value={otpCode}
                            onChangeText={setOtpCode}
                            keyboardType="number-pad"
                            maxLength={6}
                        />

                        {/* Кнопка повторной отправки */}
                        <Button
                            title={
                                countdown > 0
                                    ? `Отправить повторно (${countdown} сек)`
                                    : "Отправить повторно"
                            }
                            onPress={handleResend}
                            variant="light"
                            disabled={countdown > 0}
                        />
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}
