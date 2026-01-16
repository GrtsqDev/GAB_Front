import { View, Text, ScrollView } from "react-native";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "@/components/Header";
import Input from "@/components/forms/Input";
import Button from "@/components/Button";
import PenIconSVG from "@/assets/panIcon.svg";

export default function CardsScreen() {
    const [cardNumber, setCardNumber] = useState("0000 0000 000 000");
    const [expiryDate, setExpiryDate] = useState("00/00");
    const [cvv, setCvv] = useState("000");

    const handleUnlinkCard = () => {
        // TODO: Implement unlink card functionality
        console.log("Unlink card");
    };

    const handleAddCard = () => {
        // TODO: Navigate to add card screen
        console.log("Add card");
    };

    return (
        <SafeAreaView className="flex-1 bg-[#0A0A0A]" edges={["top"]}>
            <Header variant="back-with-centered-title" title="Карты" />
            <ScrollView className="flex-1 px-2" showsVerticalScrollIndicator={false}>
                {/* Card Section */}
                <View className="mt-4 mb-8">
                    <Text className="text-white text-base mb-4">Карта</Text>

                    {/* Card Number Input */}
                    <Input
                        placeholder="Номер карты"
                        value={cardNumber}
                        onChangeText={setCardNumber}
                        keyboardType="numeric"
                        floatingLabel={true}
                        rightIcon={<PenIconSVG width={14} height={14} />}
                    />

                    {/* Date and CVV Row */}
                    <View className="flex-row" style={{ gap: 8 }}>
                        <View className="flex-1">
                            <Input
                                placeholder="Дата"
                                value={expiryDate}
                                onChangeText={setExpiryDate}
                                keyboardType="numeric"
                                floatingLabel={true}
                                rightIcon={<PenIconSVG width={14} height={14} />}
                            />
                        </View>
                        <View className="flex-1">
                            <Input
                                placeholder="CVV"
                                value={cvv}
                                onChangeText={setCvv}
                                keyboardType="numeric"
                                maxLength={3}
                                floatingLabel={true}
                                rightIcon={<PenIconSVG width={14} height={14} />}
                            />
                        </View>
                    </View>
                    {/* Unlink Card Button */}
                    <Button
                        title="Открепить карту"
                        onPress={handleUnlinkCard}
                        variant="dark"
                        size="large"
                        style={{ borderColor: "#3D3D3D", borderWidth: 1 }}
                    />
                </View>

                {/* Add Card Section */}
                <View className="mb-8">
                    <Text className="text-white text-base  mb-2">Добавить карту</Text>
                    <Button
                        title="Добавить +"
                        onPress={handleAddCard}
                        variant="light"
                        size="large"
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
