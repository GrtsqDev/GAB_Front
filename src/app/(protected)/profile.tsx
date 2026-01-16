import { View, Text, ScrollView, Image, TouchableOpacity, Alert } from "react-native";
import { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import Header from "@/components/Header";
import Input from "@/components/forms/Input";
import Select from "@/components/forms/Select";
import BalanceCard from "@/components/BalanceCard";
import MenuItem from "@/components/MenuItem";
import Button from "@/components/Button";
import ICANcoinCard from "@/components/ICANcoinCard";
import { SafeAreaView } from "react-native-safe-area-context";

const cities = [
    { label: "Москва", value: "moscow" },
    { label: "Санкт-Петербург", value: "spb" },
    { label: "Казань", value: "kazan" },
    { label: "Екатеринбург", value: "ekb" },
];

export default function ProfileScreen() {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("+7 999 920-12-34");
    const [city, setCity] = useState("moscow");
    const [avatarUri, setAvatarUri] = useState<string | null>(null);

    const pickImage = async () => {
        const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (permissionResult.granted === false) {
            Alert.alert(
                "Нет доступа",
                "Для выбора изображения необходимо предоставить доступ к галерее",
            );
            return;
        }

        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        });

        if (!result.canceled) {
            setAvatarUri(result.assets[0].uri);
        }
    };

    return (
        <SafeAreaView className="flex-1 bg-[#0A0A0A]" edges={["top"]}>
            <Header variant="back-with-centered-title" title="Профиль" />
            <ScrollView className="flex-1 px-4" showsVerticalScrollIndicator={false}>
                {/* Avatar Section */}
                <View className="items-center mt-6 mb-8">
                    <TouchableOpacity onPress={pickImage} activeOpacity={0.7}>
                        <Image
                            source={
                                avatarUri ? { uri: avatarUri } : require("@/assets/defoultAva.png")
                            }
                            className="w-30 h-30 rounded-full"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={pickImage} activeOpacity={0.7} className="mt-2">
                        <Text className="text-white text-4">Редактировать</Text>
                    </TouchableOpacity>
                </View>

                {/* Name Input */}
                <View>
                    <Input
                        placeholder="Имя"
                        value={name}
                        onChangeText={setName}
                        autoCapitalize="words"
                    />
                    {/* Phone MenuItem */}
                    <MenuItem
                        title={phone}
                        rightText="Сменить номер"
                        onPress={() => {
                            // TODO: Navigate to change phone screen
                        }}
                    />
                    {/* City Select */}
                    <Select
                        placeholder="Выберите город"
                        value={city}
                        options={cities}
                        onChange={setCity}
                    />
                </View>

                {/* Balance Card */}
                <View className="mb-8">
                    <BalanceCard
                        balance={1000}
                        hasDebt={true}
                        onViewDebtPress={() => {
                            // TODO: Navigate to debt details
                        }}
                    />
                </View>

                <View className="mb-2">
                    {/* ICANcoin Card */}
                    <ICANcoinCard balance={0} />
                </View>

                {/* Menu Items */}
                <View className="mb-8">
                    <MenuItem
                        title="Карты"
                        onPress={() => {
                            // TODO: Navigate to cards screen
                        }}
                    />
                    <MenuItem
                        title="Настройки"
                        onPress={() => {
                            // TODO: Navigate to settings screen
                        }}
                    />
                    <MenuItem
                        title="Оферта"
                        onPress={() => {
                            // TODO: Navigate to offer screen
                        }}
                    />
                </View>

                {/* Logout Button */}
                <View className="mb-16">
                    <Button
                        title="Выйти"
                        onPress={() => {
                            // TODO: Implement logout functionality
                            Alert.alert("Выход", "Функционал выхода будет реализован позже");
                        }}
                        variant="dark"
                        size="large"
                        style={{ borderColor: "#3D3D3D", borderWidth: 1 }}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
