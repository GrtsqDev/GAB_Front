import { View, Text, ScrollView, KeyboardAvoidingView, Platform } from "react-native";
import { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter, useLocalSearchParams } from "expo-router";
import Button from "@/components/Button";
import Header from "@/components/Header";
import Input from "@/components/forms/Input";
import Select from "@/components/forms/Select";
import Checkbox from "@/components/forms/Checkbox";

const CITIES = [
    { label: "Москва", value: "moscow" },
    { label: "Санкт-Петербург", value: "spb" },
];

export default function RegisterScreen() {
    const router = useRouter();
    const params = useLocalSearchParams<{ photoTaken?: string }>();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [middleName, setMiddleName] = useState("");
    const [passportSeries, setPassportSeries] = useState("");
    const [passportNumber, setPassportNumber] = useState("");
    const [issuedBy, setIssuedBy] = useState("");
    const [issueDate, setIssueDate] = useState("");
    const [city, setCity] = useState("");
    const [agreedToTerms, setAgreedToTerms] = useState(false);
    const [hasPassportPhoto, setHasPassportPhoto] = useState(false);

    // Отслеживаем возврат со страницы uploadPassport
    useEffect(() => {
        if (params.photoTaken === "true") {
            setHasPassportPhoto(true);
        }
    }, [params.photoTaken]);

    const handleUploadPassport = () => {
        router.push("/uploadPassport");
    };

    const handleSubmit = () => {
        // TODO: валидация и отправка данных на бек
        // Пока бека нет, просто перенаправляем на главную страницу
        router.push("/(protected)/(tabs)");
    };

    // пока что закоментил валидацию всех полей кроме чекбокса
    const isFormValid =
        // firstName &&
        // lastName &&
        // middleName &&
        // passportSeries &&
        // passportNumber &&
        // issuedBy &&
        // issueDate &&
        // city &&
        agreedToTerms;

    return (
        <SafeAreaView className="flex-1 bg-black" edges={["top"]}>
            <Header variant="back-only" />
            <KeyboardAvoidingView
                className="flex-1"
                behavior={Platform.OS === "ios" ? "padding" : undefined}>
                <ScrollView
                    className="flex-1 px-2"
                    showsVerticalScrollIndicator={false}
                    keyboardShouldPersistTaps="handled">
                    <Text
                        className="text-white text-2xl mb-6"
                        style={{
                            fontFamily: "Inter Tight",
                            fontWeight: "600",
                        }}>
                        Заполните данные для{"\n"}подтверждения своей личности
                    </Text>

                    {/* ФИО Section */}
                    <View className="mb-4">
                        <Text className="text-[#5E5E5E] text-sm mb-3">ФИО</Text>
                        <Input
                            placeholder="Имя"
                            value={firstName}
                            onChangeText={setFirstName}
                            autoCapitalize="words"
                        />
                        <Input
                            placeholder="Фамилия"
                            value={lastName}
                            onChangeText={setLastName}
                            autoCapitalize="words"
                        />
                        <Input
                            placeholder="Отчество"
                            value={middleName}
                            onChangeText={setMiddleName}
                            autoCapitalize="words"
                        />
                    </View>

                    {/* Паспорт Section */}
                    <View className="mb-2">
                        <Text className="text-[#5E5E5E] text-sm mb-2 ">Паспорт</Text>
                        <View className="flex-row gap-2 mb-2">
                            <Input
                                placeholder="Серия паспорта"
                                value={passportSeries}
                                onChangeText={setPassportSeries}
                                keyboardType="numeric"
                                maxLength={4}
                                className="flex-1"
                            />
                            <Input
                                placeholder="Номер паспорта"
                                value={passportNumber}
                                onChangeText={setPassportNumber}
                                keyboardType="numeric"
                                maxLength={6}
                                className="flex-1"
                            />
                        </View>
                        <Input
                            placeholder="Кем выдан"
                            value={issuedBy}
                            onChangeText={setIssuedBy}
                            autoCapitalize="sentences"
                        />
                        <Input
                            placeholder="Дата выдачи"
                            value={issueDate}
                            onChangeText={setIssueDate}
                            keyboardType="numeric"
                        />
                    </View>

                    {/* Upload Passport Photo Button */}
                    <View className="mb-4">
                        <Button
                            title={hasPassportPhoto ? "Изменить фото" : "Загрузить фото паспорта"}
                            variant="outline"
                            onPress={handleUploadPassport}
                        />
                    </View>

                    {/* Город Section */}
                    <View className="mb-4">
                        <Text className="text-[#5E5E5E] text-sm mb-3">Город</Text>
                        <Select
                            placeholder="Ваш город"
                            value={city}
                            options={CITIES}
                            onChange={setCity}
                        />
                    </View>

                    {/* Terms Checkbox */}
                    <View className="mb-6">
                        <Checkbox value={agreedToTerms} onValueChange={setAgreedToTerms}>
                            <Text className="text-gray-400 text-sm leading-5">
                                Я прочитал и согласен{"\n"}с{" "}
                                <Text className="text-white">Договором публичной оферты</Text>
                            </Text>
                        </Checkbox>
                    </View>

                    {/* Submit Button */}
                    <View className="mb-16">
                        <Button
                            title="Далее"
                            variant="light"
                            disabled={!isFormValid}
                            onPress={handleSubmit}
                        />
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}
