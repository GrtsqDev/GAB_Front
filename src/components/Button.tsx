import { Pressable, PressableProps, Text } from "react-native";
import React from "react";

type ButtonProps = {
    title: string;
    onPress?: () => void;
    variant?: "light" | "dark" | "outline";
    disabled?: boolean;
} & PressableProps;

function Button({ title, onPress, variant = "light", disabled, ...rest }: ButtonProps) {
    const isLight = variant === "light";
    const isOutline = variant === "outline";

    return (
        <Pressable
            className={`w-full py-4 rounded-full items-center justify-center ${
                disabled
                    ? "bg-gray-800"
                    : isOutline
                      ? "bg-transparent border border-[#3D3D3D]"
                      : isLight
                        ? "bg-white"
                        : "bg-black border border-white"
            }`}
            onPress={onPress}
            disabled={disabled}
            {...rest}>
            <Text
                className={`text-base font-medium ${
                    disabled ? "text-gray-600" : isLight ? "text-black" : "text-white"
                }`}>
                {title}
            </Text>
        </Pressable>
    );
}

export default Button;
