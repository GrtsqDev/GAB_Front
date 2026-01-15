import { View, Text, TouchableOpacity, Modal, FlatList } from "react-native";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

export type SelectOption = {
    label: string;
    value: string;
};

type SelectProps = {
    placeholder?: string;
    value?: string;
    options: SelectOption[];
    onChange: (value: string) => void;
    className?: string;
};

export default function Select({
    placeholder = "Выберите",
    value,
    options,
    onChange,
    className,
}: SelectProps) {
    const [isOpen, setIsOpen] = useState(false);

    const selectedOption = options.find((opt) => opt.value === value);

    return (
        <>
            <TouchableOpacity
                className={`flex-row items-center justify-between bg-[#141515] rounded-xl mb-2 px-3 ${className || ""}`}
                style={{ minHeight: 52 }}
                onPress={() => setIsOpen(true)}
                activeOpacity={0.7}>
                <Text
                    className={selectedOption ? "text-white" : "text-[#5E5E5E]"}
                    style={{
                        fontFamily: "Inter Tight",
                        fontWeight: "500",
                        fontSize: 16,
                        lineHeight: 16,
                        letterSpacing: 0.32,
                    }}>
                    {selectedOption ? selectedOption.label : placeholder}
                </Text>
                <Ionicons
                    name="chevron-down"
                    size={20}
                    color="#9CA3AF"
                    style={{ transform: [{ rotate: isOpen ? "180deg" : "0deg" }] }}
                />
            </TouchableOpacity>

            <Modal
                visible={isOpen}
                transparent
                animationType="fade"
                onRequestClose={() => setIsOpen(false)}>
                <TouchableOpacity
                    className="flex-1 bg-black/50 justify-center px-6"
                    activeOpacity={1}
                    onPress={() => setIsOpen(false)}>
                    <View className="bg-[#141515] rounded-xl overflow-hidden border border-gray-700">
                        <FlatList
                            data={options}
                            keyExtractor={(item) => item.value}
                            renderItem={({ item }) => (
                                <TouchableOpacity
                                    className={`px-4 py-4 ${
                                        item.value === value ? "bg-[#141515]" : ""
                                    }`}
                                    onPress={() => {
                                        onChange(item.value);
                                        setIsOpen(false);
                                    }}>
                                    <Text
                                        className={
                                            item.value === value ? "text-white" : "text-gray-400"
                                        }
                                        style={{
                                            fontFamily: "Inter Tight",
                                            fontWeight: "500",
                                            fontSize: 16,
                                        }}>
                                        {item.label}
                                    </Text>
                                </TouchableOpacity>
                            )}
                        />
                    </View>
                </TouchableOpacity>
            </Modal>
        </>
    );
}
