import { View, Text, TouchableOpacity } from "react-native";

type DebtCardProps = {
    studioName: string;
    date: string;
    time: string;
    hasDebt?: boolean;
    onPress?: () => void;
};

export default function DebtCard({ studioName, date, time, hasDebt = true, onPress }: DebtCardProps) {
    return (
        <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
            <View className="w-full rounded-2xl overflow-hidden bg-[#141515] p-4 mb-1">
            <View className="flex-row items-start justify-between mb-1">
                <Text className="text-white text-base flex-1">{studioName}</Text>
                <Text className="text-white text-base">{date}</Text>
            </View>

            <Text className="text-base mb-4" style={{ color: "#5E5E5E" }}>
                {time}
            </Text>

            {hasDebt && (
                <View className="bg-[#4C4D55] px-2 py-1 rounded-lg self-start">
                    <Text className="text-gray-300 text-xs">Есть задолженность</Text>
                </View>
            )}
        </View>
        </TouchableOpacity>
    );
}
