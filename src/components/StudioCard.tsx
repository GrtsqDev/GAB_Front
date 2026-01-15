import { View, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import InfoIconSVG from "@/assets/infoIcon.svg";
import Button from "@/components/Button";

type StudioCardProps = {
    name: string;
    status: string;
    gradientColors: [string, string];
    gradientStart?: { x: number; y: number };
    gradientEnd?: { x: number; y: number };
    onBookPress?: () => void;
    onMapPress?: () => void;
};

export default function StudioCard({
    name,
    status,
    gradientColors,
    gradientStart = { x: 0, y: 0 },
    gradientEnd = { x: 1, y: 1 },
    onBookPress,
    onMapPress,
}: StudioCardProps) {
    return (
        <LinearGradient
            colors={gradientColors}
            start={gradientStart}
            end={gradientEnd}
            style={{
                borderRadius: 16,
                padding: 16,
                marginBottom: 12,
            }}>
            <View className="flex-row items-start justify-between mb-3">
                <Text className="text-white text-xl font-bold flex-1">{name}</Text>
                <TouchableOpacity className="ml-2">
                    <InfoIconSVG width={18} height={18} />
                </TouchableOpacity>
            </View>

            <View className="mb-4">
                <Text className="text-gray-300 text-[12px] bg-[#4C4D55] px-3 py-1 rounded-lg self-start mb-4">
                    {status}
                </Text>
            </View>

            <View className="flex-row gap-3">
                <View className="flex-1">
                    <Button
                        title="Забронировать"
                        onPress={onBookPress}
                        variant="light"
                        size="medium"
                    />
                </View>
                <View className="flex-1">
                    <Button title="На карте" onPress={onMapPress} variant="dark" size="medium" />
                </View>
            </View>
        </LinearGradient>
    );
}
