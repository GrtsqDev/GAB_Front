import { View, Text, TouchableOpacity, Animated } from "react-native";
import { useEffect, useRef } from "react";

type CustomSwitchProps = {
    label: string;
    value: boolean;
    onValueChange: (value: boolean) => void;
};

export default function Switch({ label, value, onValueChange }: CustomSwitchProps) {
    const animatedValue = useRef(new Animated.Value(value ? 1 : 0)).current;

    useEffect(() => {
        Animated.timing(animatedValue, {
            toValue: value ? 1 : 0,
            duration: 200,
            useNativeDriver: false,
        }).start();
    }, [value]);

    const thumbPosition = animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [2, 22],
    });

    const thumbColor = animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: ["#DEDEDE", "#FFFFFF"],
    });

    const trackColor = animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: ["#2B2B2B", "#4b4b4b"],
    });

    return (
        <View
            className="flex-row items-center justify-between bg-[#141515] rounded-xl mb-2 px-3"
            style={{ minHeight: 52 }}>
            <Text
                className="text-white"
                style={{
                    fontSize: 16,
                    lineHeight: 16,
                    letterSpacing: 0.32,
                }}>
                {label}
            </Text>
            <TouchableOpacity onPress={() => onValueChange(!value)} activeOpacity={0.8}>
                <Animated.View
                    style={{
                        width: 40,
                        height: 20,
                        borderRadius: 16,
                        backgroundColor: trackColor,
                        justifyContent: "center",
                    }}>
                    <Animated.View
                        style={{
                            width: 16,
                            height: 16,
                            borderRadius: 8,
                            backgroundColor: thumbColor,
                            transform: [{ translateX: thumbPosition }],
                        }}
                    />
                </Animated.View>
            </TouchableOpacity>
        </View>
    );
}
