import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "@/components/Header";
import Button from "@/components/Button";

interface OrderData {
    id: number;
    type: "not_finished" | "completed" | "cancelled";
    studioAddress: string;
    bookingDate: string;
    bookingTime: string;
    debtAmount?: number;
}

// Mock данные заказа
const orderData: OrderData = {
    id: 1,
    type: "not_finished",
    studioAddress: "Алексеевская 24",
    bookingDate: "12 октября",
    bookingTime: "14:00 - 15:00",
    debtAmount: 1000,
};

export default function OrderScreen() {
    const handlePayment = () => {
        // TODO: Implement payment functionality
        console.log("Payment initiated");
    };

    return (
        <SafeAreaView className="flex-1 bg-[#0A0A0A]" edges={["top"]}>
            <Header variant="back-with-centered-title" title="Незавершенный заказ" />
            <ScrollView className="flex-1 px-4" showsVerticalScrollIndicator={false}>
                <View className="mt-8">
                    {/* Debt Badge */}
                    {orderData.debtAmount && (
                        <View className="bg-[#3C110F] rounded-2xl p-4 flex-row justify-between items-center mb-2">
                            <Text className="text-base" style={{ color: "#CF0B00" }}>
                                Задолженность
                            </Text>
                            <Text className="text-base" style={{ color: "#CF0B00" }}>
                                {orderData.debtAmount} ₽
                            </Text>
                        </View>
                    )}

                    {/* Order Details Card */}
                    <View className="bg-[#141515] rounded-2xl p-4">
                        {/* Studio Address */}
                        <View className="mb-4">
                            <Text style={{ color: "#5E5E5E" }} className="text-[12px] mb-1">
                                Адрес студии:
                            </Text>
                            <Text className="text-white text-[20px]">
                                {orderData.studioAddress}
                            </Text>
                        </View>

                        {/* Booking Date */}
                        <View className="mb-4">
                            <Text style={{ color: "#5E5E5E" }} className="text-[12px] mb-1">
                                Дата бронирования:
                            </Text>
                            <Text className="text-white text-[20px]">{orderData.bookingDate}</Text>
                        </View>

                        {/* Booking Time */}
                        <View>
                            <Text style={{ color: "#5E5E5E" }} className="text-[12px] mb-1">
                                Время бронирования:
                            </Text>
                            <Text className="text-white text-[20px]">{orderData.bookingTime}</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>

            {/* Payment Button */}
            <View className="px-4 pb-16">
                <Button variant="light" title="Оплатить" size="large" onPress={handlePayment} />
            </View>
        </SafeAreaView>
    );
}
