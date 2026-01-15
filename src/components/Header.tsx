import { View, TouchableOpacity, Text } from "react-native";
import { useRouter } from "expo-router";
import BackArrowSVG from "@/assets/back-arrow.svg";

type HeaderProps = {
    variant?: "back-only" | "back-with-title";
    title?: string;
    onBackPress?: () => void;
};

export default function Header({ variant = "back-only", title, onBackPress }: HeaderProps) {
    const router = useRouter();

    const handleBackPress = () => {
        if (onBackPress) {
            onBackPress();
        } else {
            router.back();
        }
    };

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
