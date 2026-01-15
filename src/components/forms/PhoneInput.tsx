import { View, Text } from "react-native";
import { useState } from "react";
import Input from "@/components/forms/Input";
import RussianFlag from "@/assets/russianFlag.svg";

interface PhoneInputProps {
    onChangeText: (phoneNumber: string) => void;
    placeholder?: string;
}

export default function PhoneInput({ onChangeText, placeholder = "" }: PhoneInputProps) {
    const [displayValue, setDisplayValue] = useState("");

    const formatPhoneNumber = (text: string): string => {
        // Убираем все нечисловые символы
        const digits = text.replace(/\D/g, "");

        // Формат: +7 (999) 999-99-99
        let formatted = "";
        if (digits.length > 0) formatted = "(" + digits.substring(0, 3);
        if (digits.length >= 3) formatted += ") ";
        if (digits.length > 3) formatted += digits.substring(3, 6);
        if (digits.length > 6) formatted += "-" + digits.substring(6, 8);
        if (digits.length > 8) formatted += "-" + digits.substring(8, 10);

        return formatted;
    };

    const handleTextChange = (text: string) => {
        const formatted = formatPhoneNumber(text);
        setDisplayValue(formatted);
        // Передаём только цифры без форматирования
        onChangeText(formatted.replace(/\D/g, ""));
    };

    return (
        <View className="w-full mb-4">
            <View className="relative">
                <View className="absolute left-3 top-3.5 flex-row items-center gap-2 z-10">
                    <RussianFlag />
                    <View className="w-px h-4 bg-gray-200" />
                    <Text className="text-base text-gray-500">+7</Text>
                </View>
                <Input
                    placeholder={placeholder}
                    onChangeText={handleTextChange}
                    value={displayValue}
                    keyboardType="phone-pad"
                    className="bg-[#141515] border-0"
                    style={{ paddingLeft: 60, marginBottom: 0 }}
                />
            </View>
        </View>
    );
}
