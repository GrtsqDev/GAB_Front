import { TextInput, TextInputProps, View } from "react-native";
import { ReactNode } from "react";

type InputProps = TextInputProps & {
    icon?: ReactNode;
    className?: string;
};

function Input({ className, icon, ...rest }: InputProps) {
    return (
        <View
            className={`flex-row items-center bg-[#2a2a2a] border border-gray-700 rounded-xl mb-2 px-3 ${className || ""}`}
            style={{ minHeight: 52 }}>
            {icon && <View className="mx-1 justify-center items-center">{icon}</View>}
            <TextInput
                className={`flex-1 text-white ${icon ? "ml-1" : ""}`}
                placeholderTextColor="#9CA3AF"
                style={{
                    fontFamily: "Inter Tight",
                    fontWeight: "500",
                    fontSize: 16,
                    lineHeight: 16,
                    letterSpacing: 0.32,
                    paddingVertical: 0,
                }}
                {...rest}
            />
        </View>
    );
}

export default Input;
