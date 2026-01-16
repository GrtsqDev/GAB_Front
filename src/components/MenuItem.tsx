import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type MenuItemProps = {
    title: string;
    onPress: () => void;
    className?: string;
    rightText?: string;
    rightTextColor?: string;
};

export default function MenuItem({
    title,
    onPress,
    className,
    rightText,
    rightTextColor = "#fff",
}: MenuItemProps) {
    return (
        <TouchableOpacity
            className={`flex-row items-center justify-between bg-[#141515] rounded-xl mb-2 px-3 ${className || ""}`}
            style={{ minHeight: 52 }}
            onPress={onPress}
            activeOpacity={0.7}>
            <Text
                style={{
                    fontSize: 16,
                    lineHeight: 16,
                    letterSpacing: 0.32,
                    color: rightText ? "#5E5E5E" : "#FFFFFF",
                }}>
                {title}
            </Text>
            <View className="flex-row items-center" style={{ gap: 8 }}>
                {rightText ? (
                    <Text
                        style={{
                            fontSize: 14,
                            color: rightTextColor,
                        }}>
                        {rightText}
                    </Text>
                ) : (
                    <Ionicons name="chevron-forward" size={20} color="#9CA3AF" />
                )}
            </View>
        </TouchableOpacity>
    );
}
