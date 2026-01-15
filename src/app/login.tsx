import { View, Text, ScrollView, KeyboardAvoidingView, Platform, Keyboard } from "react-native";
import { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import PhoneInput from "@/components/forms/PhoneInput";
import Checkbox from "@/components/forms/Checkbox";
import Button from "@/components/Button";
import LogoICANSVG from "@/assets/logo-ICAN.svg";

export default function LoginScreen() {
    const router = useRouter();
    const [phoneNumber, setPhoneNumber] = useState("");
    const [isAgreed, setIsAgreed] = useState(false);
    const [keyboardHeight, setKeyboardHeight] = useState(0);

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

    const handleContinue = () => {
        if (phoneNumber.length === 10 && isAgreed) {
            console.log("Phone number:", phoneNumber);
            router.push({
                pathname: "/otp",
                params: { phoneNumber },
            });
        }
    };

    const isButtonEnabled = phoneNumber.length === 10 && isAgreed;

    return (
        <SafeAreaView className="flex-1 bg-black">
            <KeyboardAvoidingView
                className="flex-1"
                behavior={Platform.OS === "ios" ? "padding" : "height"}>
                <ScrollView
                    contentContainerStyle={{ flexGrow: 1, paddingBottom: 20 }}
                    showsVerticalScrollIndicator={false}
                    keyboardShouldPersistTaps="handled"
                    contentInsetAdjustmentBehavior="automatic">
                    <View className="flex-1 px-6 justify-center">
                        {/* Логотип и текст */}
                        <View className="items-center">
                            <LogoICANSVG width={200} height={75} />
                            <Text
                                className="text-white text-center text-[20px] mt-6 font-medium leading-[20px] tracking-[0.4px]"
                                style={{ fontFamily: "Inter Tight" }}>
                                Умное пространство{"\n"}под контролем
                            </Text>
                        </View>
                    </View>

                    {/* Форма внизу */}
                    <View
                        className="px-2"
                        style={{ marginBottom: keyboardHeight > 0 ? keyboardHeight : 8 }}>
                        {/* Заголовок */}
                        <Text className="text-white text-lg font-medium mb-4">
                            Введите номер телефона
                        </Text>

                        {/* Поле ввода телефона */}
                        <PhoneInput value={phoneNumber} onChange={setPhoneNumber} />

                        {/* Чекбокс согласия */}
                        <View className="mb-4">
                            <Checkbox value={isAgreed} onValueChange={setIsAgreed}>
                                <Text className="text-gray-400 text-sm leading-5">
                                    Я прочитал и согласен с{" "}
                                    <Text className="text-white">
                                        Пользовательское соглашение и Политика конфиденциальности
                                    </Text>
                                </Text>
                            </Checkbox>
                        </View>

                        {/* Кнопка "Далее" */}
                        <Button
                            title="Далее"
                            onPress={handleContinue}
                            variant="light"
                            disabled={!isButtonEnabled}
                        />
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}
