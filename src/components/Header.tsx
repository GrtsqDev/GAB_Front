import { View, TouchableOpacity, Text, Image } from "react-native";
import { useRouter } from "expo-router";
import BackArrowSVG from "@/assets/back-arrow.svg";

type HeaderProps = {
    variant?: "back-only" | "back-with-title" | "back-with-centered-title" | "home";
    title?: string;
    city?: string;
    date?: string;
    avatarUrl?: string;
    onBackPress?: () => void;
};

export default function Header({
    variant = "back-only",
    title,
    city,
    date,
    avatarUrl,
    onBackPress,
}: HeaderProps) {
    const router = useRouter();

    const handleBackPress = () => {
        if (onBackPress) {
            onBackPress();
        } else {
            router.back();
        }
    };

    if (variant === "home") {
        return (
            <View className="flex-row items-center justify-between px-4 py-3">
                <View className="flex-1" />
                <View className="items-center">
                    <Text className="text-white text-lg font-semibold">{city}</Text>
                    <Text className="text-gray-400 text-xs mt-0.5">{date}</Text>
                </View>
                <View className="flex-1 items-end">
                    <TouchableOpacity>
                        <Image
                            source={
                                avatarUrl
                                    ? { uri: avatarUrl }
                                    : require("@/assets/home/defoultAva.png")
                            }
                            className="w-10 h-10 rounded-full"
                        />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    if (variant === "back-with-centered-title") {
        return (
            <View className="flex-row items-center justify-center px-2 py-4 relative">
                <TouchableOpacity onPress={handleBackPress} className="p-2 absolute left-2">
                    <BackArrowSVG width={40} height={24} />
                </TouchableOpacity>
                {title && <Text className="text-white text-lg font-medium">{title}</Text>}
            </View>
        );
    }

    return (
        <View className="flex-row items-center px-2 py-4">
            <TouchableOpacity onPress={handleBackPress} className="p-2">
                <BackArrowSVG width={40} height={24} />
            </TouchableOpacity>
            {variant === "back-with-title" && title && (
                <Text className="text-white text-lg font-medium ml-4">{title}</Text>
            )}
        </View>
    );
}
