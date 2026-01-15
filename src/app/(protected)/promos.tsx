import { View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import Header from "@/components/Header";
import PromoCard from "@/components/PromoCard";

export default function PromosScreen() {
    const router = useRouter();

    const promos = [
        {
            id: "1",
            title: "Новый гость",
            tag: "Бесплатно",
            buttonText: "Подробнее",
            image: require("@/assets/home/newGuestCover2.png"),
        },
        {
            id: "2",
            title: "Реферальная программа",
            tag: "Бесплатно",
            buttonText: "Подробнее",
            image: require("@/assets/home/refferalCover2.png"),
        },
    ];

    return (
        <SafeAreaView className="flex-1 bg-black" edges={["top"]}>
            <Header variant="back-with-centered-title" title="Акции" />

            <ScrollView className="flex-1 px-2" showsVerticalScrollIndicator={false}>
                <View className="gap-3 pb-6 pt-6">
                    {promos.map((promo) => (
                        <PromoCard
                            key={promo.id}
                            title={promo.title}
                            tag={promo.tag}
                            buttonText={promo.buttonText}
                            image={promo.image}
                            size="full"
                            onPress={() => router.push("/promoDetail")}
                        />
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
