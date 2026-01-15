import { View, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import CloseIconSVG from "@/assets/home/closeIcon.svg";
import Button from "@/components/Button";

type NotificationCardProps = {
    title: string;
    buttonText: string;
    onButtonPress?: () => void;
};

export default function NotificationCard({
    title,
    buttonText,
    onButtonPress,
}: NotificationCardProps) {
    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) return null;

    return (
        <LinearGradient
            colors={["#590803", "#141515"]}
            start={{ x: 1, y: 0 }}
            end={{ x: 0, y: 1 }}
            style={{
                borderRadius: 12,
                padding: 16,
                position: "relative",
            }}>
            <TouchableOpacity
                onPress={() => setIsVisible(false)}
                className="absolute top-3 right-3 z-10">
                <CloseIconSVG width={20} height={20} />
            </TouchableOpacity>

            <Text className="text-white text-[16px] leading-[1.2] tracking-[0.32px] font-medium mb-4 pr-12">
                {title}
            </Text>

            <View className="self-start">
                <Button title={buttonText} onPress={onButtonPress} variant="outline" size="small" />
            </View>
        </LinearGradient>
    );
}
