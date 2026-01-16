import { View, Text, TouchableOpacity } from "react-native";
import ICANcoinSVG from "@/assets/home/icanCoin.svg";

type ICANcoinCardProps = {
    balance: number;
};

export default function ICANcoinCard({ balance }: ICANcoinCardProps) {
    return (
        <View className="bg-[#1A1A1A] rounded-xl p-4 flex-row items-center justify-between">
            <Text className="text-white text-[16px] leading-[1.2] tracking-[0.32px] font-medium">
                ICANcoin
            </Text>
            <View className="flex-row items-center" style={{ gap: 8 }}>
                <Text className="text-white text-lg font-semibold">{balance}</Text>
                <ICANcoinSVG width={10} height={16} />
            </View>
        </View>
    );
}
