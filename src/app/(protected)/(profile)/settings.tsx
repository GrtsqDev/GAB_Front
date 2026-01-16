import { View, ScrollView } from "react-native";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "@/components/Header";
import Switch from "@/components/Switch";

export default function SettingsScreen() {
    const [notificationsEnabled, setNotificationsEnabled] = useState(false);

    return (
        <SafeAreaView className="flex-1 bg-[#0A0A0A]" edges={["top"]}>
            <Header variant="back-with-centered-title" title="Настройки" />
            <ScrollView className="flex-1 px-2" showsVerticalScrollIndicator={false}>
                <View className="mt-4">
                    <Switch
                        label="Уведомления"
                        value={notificationsEnabled}
                        onValueChange={setNotificationsEnabled}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
