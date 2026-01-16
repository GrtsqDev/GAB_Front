import { View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import Header from "@/components/Header";
import DebtCard from "@/components/DebtCard";

// Mock данные задолженностей
const debts = [
    {
        id: 1,
        studioName: "Алексеевская 24",
        date: "12 октября",
        time: "14:00 - 15:00",
        hasDebt: true,
    },
];

export default function DebtScreen() {
    const router = useRouter();

    const handleDebtPress = (debtId: number) => {
        router.push("/(protected)/order");
        //router.push(`/(protected)/(profile)/order?id=${debtId}`);
    };

    return (
        <SafeAreaView className="flex-1 bg-[#0A0A0A]" edges={["top"]}>
            <Header variant="back-with-centered-title" title="Задолженность" />
            <ScrollView className="flex-1 px-2" showsVerticalScrollIndicator={false}>
                <View className="mt-4">
                    {debts.map((debt) => (
                        <DebtCard
                            key={debt.id}
                            studioName={debt.studioName}
                            date={debt.date}
                            time={debt.time}
                            hasDebt={debt.hasDebt}
                            onPress={() => handleDebtPress(debt.id)}
                        />
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
