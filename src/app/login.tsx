import { View, Text, ScrollView } from "react-native";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import PhoneInput from "@/components/forms/PhoneInput";
import Checkbox from "@/components/forms/Checkbox";
import Button from "@/components/Button";
import LogoICANSVG from "@/assets/logo-ICAN.svg";

export default function LoginScreen() {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [isAgreed, setIsAgreed] = useState(false);

    const handleContinue = () => {
        if (phoneNumber.length === 10 && isAgreed) {
            console.log("Phone number:", phoneNumber);
            // Здесь будет логика отправки кода
        }
    };

    const isButtonEnabled = phoneNumber.length === 10 && isAgreed;

    return (
        <View className="flex-1 bg-black">
            <ScrollView
                contentContainerStyle={{ flexGrow: 1 }}
                showsVerticalScrollIndicator={false}>
                <View className="flex-1 px-6 justify-center">
                    {/* Логотип и текст */}
                    <View className="items-center">
                        <LogoICANSVG width={200} height={75} />
                        <Text className="text-white text-center text-base mt-6 font-normal">
                            Умное пространство{"\n"}под контролем
                        </Text>
                    </View>
                </View>
            </ScrollView>

            <SafeAreaView edges={["bottom"]} className="bg-black px-2 pb-4">
                {/* Заголовок */}
                <Text className="text-white text-lg font-medium mb-4">Введите номер телефона</Text>

                {/* Поле ввода телефона */}
                <PhoneInput value={phoneNumber} onChange={setPhoneNumber} />

                {/* Чекбокс согласия */}
                <View className="mb-6">
                    <Checkbox value={isAgreed} onValueChange={setIsAgreed}>
                        <Text className="text-gray-400 text-sm flex-1 leading-5">
                            Я прочитал и согласен с{" "}
                            <Text className="text-white underline">
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
            </SafeAreaView>
        </View>
    );
}
