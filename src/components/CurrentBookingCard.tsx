import { View, Text } from "react-native";

type CurrentBookingCardProps = {
    studioName: string;
    date: string;
    time: string;
    timeRemaining: string;
};

export default function CurrentBookingCard({
    studioName,
    date,
    time,
    timeRemaining,
}: CurrentBookingCardProps) {
    return (
        <View className="bg-[#1A1A1A] rounded-2xl p-4">
            <Text className="text-[#5E5E5E] mb-8 text-[14px] leading-[16.8px] tracking-[0.28px]">
                Текущее бронирование:
            </Text>
            <View className="flex-row items-start justify-between">
                <View className="flex-1">
                    <Text className="text-white mb-2 text-[16px] leading-[24px] tracking-[0.4px] font-semibold">
                        {studioName}
                    </Text>
                    <Text
                        className="text-[#5E5E5E] text-[14px] leading-[16.8px] tracking-[0.28px]"
                        numberOfLines={1}>
                        {date} {time}
                    </Text>
                </View>
                <Text className="text-white text-[16px] leading-[24px] tracking-[0.4px]">
                    {timeRemaining}
                </Text>
            </View>
        </View>
    );
}
