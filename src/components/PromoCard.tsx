import { View, Text, Image, ImageSourcePropType, TouchableOpacity } from "react-native";
import Button from "@/components/Button";

type PromoCardProps = {
    title: string;
    buttonText: string;
    image: ImageSourcePropType;
    size?: "small" | "large" | "full";
    tag?: string;
    onPress?: () => void;
};

export default function PromoCard({
    title,
    buttonText,
    image,
    size = "large",
    tag,
    onPress,
}: PromoCardProps) {
    const sizeClasses = {
        small: "w-[184px] h-[98px]",
        large: "w-[280px] h-[140px]",
        full: "w-full h-[120px]",
    };

    return (
        <TouchableOpacity
            onPress={onPress}
            activeOpacity={0.7}
            className={`${sizeClasses[size]} rounded-2xl overflow-hidden bg-[#141515] ${size !== "full" ? "mr-3" : ""} relative p-3`}>
            <View className="mb-auto">
                <Text className="text-white text-[14px] leading-[1.1] tracking-[0.28px] font-semibold mb-2">
                    {title}
                </Text>
                {tag && (
                    <Text className="text-gray-300 text-[12px] bg-[#4C4D55] px-3 py-1 rounded-lg self-start">
                        {tag}
                    </Text>
                )}
            </View>

            <View className="self-start">
                <Button title={buttonText} onPress={onPress} variant="outline" size="small" />
            </View>
            <Image
                source={image}
                className={
                    size === "full"
                        ? "absolute top-0 right-0 h-[120px] w-auto"
                        : "absolute bottom-0 right-[-20px] w-32 h-32"
                }
                resizeMode="contain"
            />
        </TouchableOpacity>
    );
}
