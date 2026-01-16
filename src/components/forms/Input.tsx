import { TextInput, TextInputProps, View, Text } from "react-native";
import { ReactNode } from "react";

type InputProps = TextInputProps & {
    icon?: ReactNode;
    rightIcon?: ReactNode;
    className?: string;
    floatingLabel?: boolean;
};

function Input({ className, icon, rightIcon, floatingLabel = false, ...rest }: InputProps) {
    const hasValue = rest.value && rest.value.toString().length > 0;
    const showFloatingLabel = floatingLabel && hasValue;

    return (
        <View
            className={`flex-row items-center bg-[#141515] rounded-xl mb-2 px-3 ${showFloatingLabel ? "pt-4" : ""} ${className || ""}`}
            style={{ minHeight: 52, position: "relative" }}>
            {showFloatingLabel && (
                <Text
                    className="absolute top-2 left-4 text-gray-500"
                    style={{
                        fontSize: 12,
                        letterSpacing: 0.2,
                    }}>
                    {rest.placeholder}
                </Text>
            )}
            {icon && <View className="mx-1 justify-center items-center">{icon}</View>}
            <TextInput
                className={`flex-1 text-white ${icon ? "ml-1" : ""}`}
                placeholderTextColor="#5E5E5E"
                style={{
                    fontFamily: "Inter Tight",
                    fontWeight: "500",
                    fontSize: 16,
                    letterSpacing: 0.32,
                }}
                {...rest}
                placeholder={showFloatingLabel ? "" : rest.placeholder}
            />
            {rightIcon && <View className="mx-1 justify-center items-center">{rightIcon}</View>}
        </View>
    );
}

export default Input;
