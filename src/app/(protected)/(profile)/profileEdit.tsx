import { View, Text, ScrollView, Image, TouchableOpacity, Alert } from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";
import * as ImagePicker from "expo-image-picker";
import Header from "@/components/Header";
import Input from "@/components/forms/Input";
import Select from "@/components/forms/Select";
import MenuItem from "@/components/MenuItem";
import Button from "@/components/Button";
import PenIconSVG from "@/assets/panIcon.svg";
import { SafeAreaView } from "react-native-safe-area-context";

const cities = [
    { label: "Москва", value: "moscow" },
    { label: "Санкт-Петербург", value: "spb" },
    { label: "Казань", value: "kazan" },
    { label: "Екатеринбург", value: "ekb" },
];

export default function ProfileEditScreen() {
    const router = useRouter();
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [patronymic, setPatronymic] = useState("");
    const [phone, setPhone] = useState("+7 999 920-12-34");
    const [city, setCity] = useState("moscow");
    const [avatarUri, setAvatarUri] = useState<string | null>(null);
    const [passportSeries, setPassportSeries] = useState("");
    const [passportNumber, setPassportNumber] = useState("");
    const [passportIssuedBy, setPassportIssuedBy] = useState(
        "УФМС России по городу Москве в районе Хамовники",
    );
    const [passportIssueDate, setPassportIssueDate] = useState("");
    const [birthDate, setBirthDate] = useState("");

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

    const handleSave = () => {
        // TODO: Implement save functionality
        Alert.alert("Сохранено", "Изменения успешно сохранены");
    };

    return (
        <SafeAreaView className="flex-1 bg-[#0A0A0A]" edges={["top"]}>
            <Header variant="back-only" />
            <ScrollView className="flex-1 px-2" showsVerticalScrollIndicator={false}>
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
                        <Text className="text-white text-sm">Выбрать фотографию</Text>
                    </TouchableOpacity>
                </View>

                {/* Personal Information */}
                <View className="mb-8">
                    <Input
                        placeholder="Имя"
                        value={name}
                        onChangeText={setName}
                        autoCapitalize="words"
                        rightIcon={<PenIconSVG width={14} height={14} />}
                    />
                    <Input
                        placeholder="Фамилия"
                        value={surname}
                        onChangeText={setSurname}
                        autoCapitalize="words"
                        rightIcon={<PenIconSVG width={14} height={14} />}
                    />
                    <Input
                        placeholder="Отчество"
                        value={patronymic}
                        onChangeText={setPatronymic}
                        autoCapitalize="words"
                        rightIcon={<PenIconSVG width={14} height={14} />}
                    />
                </View>

                {/* Phone MenuItem */}
                <View className="mb-8">
                    <MenuItem
                        title={phone}
                        rightText="Сменить номер"
                        onPress={() => {
                            router.push("/(protected)/(profile)/numberChange");
                        }}
                    />
                </View>

                {/* City Select */}
                <View className="mb-8">
                    <Select placeholder="Город" value={city} options={cities} onChange={setCity} />
                </View>

                {/* Passport Information */}
                <View className="mb-8">
                    <View className="flex-row" style={{ gap: 8 }}>
                        <View className="flex-1">
                            <Input
                                placeholder="Серия"
                                value={passportSeries}
                                onChangeText={setPassportSeries}
                                floatingLabel={true}
                                keyboardType="numeric"
                                maxLength={4}
                                rightIcon={<PenIconSVG width={14} height={14} />}
                            />
                        </View>
                        <View className="flex-1">
                            <Input
                                placeholder="Номер"
                                value={passportNumber}
                                onChangeText={setPassportNumber}
                                keyboardType="numeric"
                                floatingLabel={true}
                                maxLength={6}
                                rightIcon={<PenIconSVG width={14} height={14} />}
                            />
                        </View>
                    </View>
                    <Input
                        placeholder="Кем выдан"
                        value={passportIssuedBy}
                        onChangeText={setPassportIssuedBy}
                        multiline
                        floatingLabel={true}
                        rightIcon={<PenIconSVG width={14} height={14} />}
                    />
                    {/* Dates */}
                    <View className="flex-row" style={{ gap: 8 }}>
                        <View className="flex-1">
                            <Input
                                placeholder="Дата выдачи"
                                value={passportIssueDate}
                                onChangeText={setPassportIssueDate}
                                floatingLabel={true}
                                rightIcon={<PenIconSVG width={14} height={14} />}
                            />
                        </View>
                        <View className="flex-1">
                            <Input
                                placeholder="Дата рождения"
                                value={birthDate}
                                floatingLabel={true}
                                onChangeText={setBirthDate}
                                rightIcon={<PenIconSVG width={14} height={14} />}
                            />
                        </View>
                    </View>
                </View>

                {/* Save Button */}
                <View className="mb-16">
                    <Button title="Сохранить изменения" onPress={handleSave} variant="light" />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
