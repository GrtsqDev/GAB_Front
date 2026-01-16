import { Pressable, PressableProps, Text, ViewStyle } from "react-native";
import React from "react";

type ButtonProps = {
    title: string;
    onPress?: () => void;
    variant?: "light" | "dark" | "outline";
    size?: "large" | "medium" | "small";
    disabled?: boolean;
    style?: ViewStyle;
} & PressableProps;

function Button({
    title,
    onPress,
    variant = "light",
    size = "large",
    disabled,
    style,
    ...rest
}: ButtonProps) {
    const isLight = variant === "light";
    const isOutline = variant === "outline";

    const sizeClasses = {
        large: "w-full py-4",
        medium: "py-3 px-4",
        small: "px-3 py-1",
    };

    const textSizeClasses = {
        large: "text-base",
        medium: "text-sm",
        small: "text-xs",
    };

    return (
        <Pressable
            className={`${sizeClasses[size]} rounded-full items-center justify-center ${
                disabled
                    ? "bg-gray-800"
                    : isOutline
                      ? "bg-transparent border border-[#3D3D3D]"
                      : isLight
                        ? "bg-white"
                        : "bg-black"
            }`}
            style={style}
            onPress={onPress}
            disabled={disabled}
            {...rest}>
            <Text
                className={`${textSizeClasses[size]} font-medium ${
                    disabled ? "text-gray-600" : isLight ? "text-black" : "text-white"
                }`}>
                {title}
            </Text>
        </Pressable>
    );
}

export default Button;
