import { View, Text, ScrollView, KeyboardAvoidingView, Platform } from "react-native";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import Header from "@/components/Header";
import PhoneInput from "@/components/forms/PhoneInput";
import Checkbox from "@/components/forms/Checkbox";
import Button from "@/components/Button";

export default function NumberChangeScreen() {
    const router = useRouter();
    const [phoneNumber, setPhoneNumber] = useState("");
    const [isAgreed, setIsAgreed] = useState(false);

    const handleContinue = () => {
        if (phoneNumber.length === 10 && isAgreed) {
            console.log("New phone number:", phoneNumber);
            router.push({
                pathname: "/profileEdit",
                params: { phoneNumber },
            });
        }
    };

    const isButtonEnabled = phoneNumber.length === 10 && isAgreed;

    return (
        <SafeAreaView className="flex-1 bg-black">
            <Header variant="back-only" />
            <KeyboardAvoidingView
                className="flex-1"
                behavior={Platform.OS === "ios" ? "padding" : undefined}
                enabled={Platform.OS === "ios"}>
                <ScrollView
                    contentContainerStyle={{ flexGrow: 1, paddingBottom: 20 }}
                    showsVerticalScrollIndicator={false}
                    keyboardShouldPersistTaps="handled"
                    contentInsetAdjustmentBehavior="automatic">
                    <View className="flex-1" />

                    {/* Форма внизу */}
                    <View className="px-2 pb-2">
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
