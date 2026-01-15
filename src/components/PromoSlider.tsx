import { View, ScrollView, Dimensions } from "react-native";
import { useRouter } from "expo-router";
import PromoCard from "./PromoCard";

const { width } = Dimensions.get("window");

type PromoSliderProps = {
    promos: Array<{
        id: string;
        title: string;
        buttonText: string;
        image: any;
    }>;
};

export default function PromoSlider({ promos }: PromoSliderProps) {
    const router = useRouter();

    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingLeft: 8, paddingRight: 8 }}
            snapToInterval={184 + 8} // width of card + gap
            decelerationRate="fast">
            {promos.map((promo) => (
                <PromoCard
                    key={promo.id}
                    title={promo.title}
                    buttonText={promo.buttonText}
                    image={promo.image}
                    size="small"
                    onPress={() => router.push("/promoDetail")}
                />
            ))}
        </ScrollView>
    );
}
