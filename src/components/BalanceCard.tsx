import { View, Text, TouchableOpacity } from "react-native";
import Button from "./Button";

type BalanceCardProps = {
    balance: number;
    hasDebt?: boolean;
    onViewDebtPress?: () => void; // коллбек функция которая сработает при клике на кнопку
};

export default function BalanceCard({
    balance,
    hasDebt = false,
    onViewDebtPress,
}: BalanceCardProps) {
    return (
        <View
            className="rounded-xl p-3"
            style={{
                backgroundColor: "#141515",
            }}>
            <View className="flex-row items-center justify-between mb-4">
                <Text className="text-white text-base font-medium">Баланс</Text>
                <Text className={`${hasDebt ? "text-red-500" : "text-white"} text-base font-bold`}>
                    {hasDebt ? "-" : ""}
                    {balance} ₽
                </Text>
            </View>

            {hasDebt && (
                <View className="mb-2">
                    <View className="bg-[#4C4D55] px-2 py-1 mb-4 rounded-lg self-start">
                        <Text className="text-gray-300 text-xs">Есть задолженность</Text>
                    </View>
                    {onViewDebtPress && (
                        <Button
                            title="Посмотреть задолженность"
                            onPress={onViewDebtPress}
                            variant="light"
                        />
                    )}
                </View>
            )}
        </View>
    );
}
