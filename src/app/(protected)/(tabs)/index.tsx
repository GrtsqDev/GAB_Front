import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import Header from "@/components/Header";
import NotificationCard from "@/components/NotificationCard";
import CurrentBookingCard from "@/components/CurrentBookingCard";
import ICANcoinCard from "@/components/ICANcoinCard";
import PromoSlider from "@/components/PromoSlider";
import StudioCard from "@/components/StudioCard";
import Button from "@/components/Button";
import { formatDate } from "../../../utils/dateFormatter";

export default function IndexScreen() {
    const router = useRouter();

    const promos = [
        {
            id: "1",
            title: "Новый гость",
            buttonText: "Подробнее",
            image: require("@/assets/home/newGuestCover1.png"),
        },
        {
            id: "2",
            title: "Реферальная программа",
            buttonText: "Подробнее",
            image: require("@/assets/home/refferalCover1.png"),
        },
    ];

    return (
        <SafeAreaView className="flex-1 bg-black" edges={["top"]}>
            <Header variant="home" city="Москва" date={formatDate()} />

            <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
                {/* Notification Card */}
                <View className="px-2 mb-4 mt-4">
                    <NotificationCard
                        title="Разрешите пуш-уведомления, чтобы не пропускать напоминание о своей записи и наших акциях"
                        buttonText="Перейти в настройки"
                    />
                </View>

                {/* Current Booking */}
                <View className="px-2 mb-4">
                    <CurrentBookingCard
                        studioName="Алексеевская 24"
                        date="20 октября (пн)"
                        time="16:00-18:00"
                        timeRemaining="через 3д. 20ч."
                    />
                </View>

                {/* ICANcoin */}
                <View className="px-2 mb-8">
                    <ICANcoinCard balance={0} />
                </View>

                {/* Акции Section */}
                <View className="mb-6">
                    <View className="flex-row items-center justify-between px-2 mb-4">
                        <Text className="text-white text-[20px] leading-[1.2] tracking-[0.4px] font-bold">
                            Акции
                        </Text>
                    </View>
                    <PromoSlider promos={promos} />
                    <View className="px-2 mt-2">
                        <Button
                            title="Все акции"
                            variant="dark"
                            size="medium"
                            style={{ backgroundColor: "#141515" }}
                            onPress={() => router.push("/promos")}
                        />
                    </View>
                </View>

                {/* Студии Section */}
                <View className="px-2 pb-6">
                    <View className="flex-row items-center justify-between mb-4">
                        <Text className="text-white text-[20px] leading-[1.2] tracking-[0.4px] font-bold">
                            Студии
                        </Text>
                        <Button title="Все студии" variant="outline" size="small" />
                    </View>

                    <StudioCard
                        name="Алексеевская 24"
                        status="Сегодня есть время, включая ночь"
                        gradientColors={["#141515", "#3C0300"]}
                        gradientStart={{ x: 0, y: 0 }}
                        gradientEnd={{ x: 1, y: 1 }}
                    />

                    <StudioCard
                        name="Бауманя 52"
                        status="Сейчас свободно"
                        gradientColors={["#55565F", "#141515"]}
                        gradientStart={{ x: 1, y: 0 }}
                        gradientEnd={{ x: 0, y: 1 }}
                    />

                    <StudioCard
                        name="Алексеевская 24"
                        status="Сегодня есть время, включая ночь"
                        gradientColors={["#141515", "#3C0300"]}
                        gradientStart={{ x: 0, y: 0 }}
                        gradientEnd={{ x: 1, y: 1 }}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
