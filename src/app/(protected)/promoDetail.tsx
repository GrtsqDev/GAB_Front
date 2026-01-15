import { View, Text, ScrollView, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "@/components/Header";

export default function PromoDetailScreen() {
    return (
        <SafeAreaView className="flex-1 bg-black" edges={["top"]}>
            <Header variant="back-with-centered-title" title="Новый гость" />

            <ScrollView className="flex-1 mt-4" showsVerticalScrollIndicator={false}>
                {/* Thumbnail Image */}
                <View className="w-full h-[200px] mb-8 px-2">
                    <Image
                        source={require("../../assets/promoThumbnail.jpg")}
                        className="w-full h-full rounded-lg"
                        resizeMode="cover"
                    />
                </View>

                <View className="px-2">
                    {/* Title */}
                    <Text className="text-white text-[20px] leading-[1.2] tracking-[0.4px] font-bold mb-4">
                        Новый гость
                    </Text>

                    {/* City */}
                    <Text className="text-gray-400 text-[12px] mb-2">Москва</Text>

                    {/* Tag */}
                    <Text className="text-gray-300 text-[12px] bg-[#4C4D55] px-2 py-1 rounded-lg self-start mb-8">
                        Бессрочно
                    </Text>

                    {/* Description */}
                    <Text className="text-gray-300 text-[16px] leading-[1.5] mb-4">
                        В честь прихода новых гостей мы рады предложить специальную акцию — скидку
                        на первую часовую сессию аренды студии. Это отличный шанс попробовать
                        профессиональное оборудование и опыт наших звукорежиссеров по выгодной цене.
                    </Text>

                    <Text className="text-gray-300 text-[16px] leading-[1.5] mb-4">
                        Мы создаем комфортную атмосферу, чтобы ваше творчество звучало максимально
                        выразительно и качественно. Для новых гостей мы подготовили персональный
                        подход и бесплатную консультацию по всем вопросам записи, чтобы вы сразу
                        почувствовали себя уверенно и комфортно.
                    </Text>

                    <Text className="text-gray-300 text-[16px] leading-[1.5] mb-4">
                        Не упустите возможность раскрыть свой музыкальный потенциал и создать
                        уникальные треки с нашей помощью. Акция действует ограниченное время,
                        записывайтесь и станьте частью нашей творческой семьи уже сегодня!
                    </Text>

                    <Text className="text-gray-500 text-[12px] leading-[1.4] mb-12">
                        Участвуя в акции, вы автоматически соглашаетесь с условиями участия
                    </Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
