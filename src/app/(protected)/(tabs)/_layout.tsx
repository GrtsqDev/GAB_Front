import { Tabs } from "expo-router";
import { View } from "react-native";
import HomeActiveSVG from "@/assets/tabIcons/home_active.svg";
import StudiosSVG from "@/assets/tabIcons/studios.svg";
import RecordSVG from "@/assets/tabIcons/record.svg";
import ExchangeSVG from "@/assets/tabIcons/exchange.svg";
import ChatsSVG from "@/assets/tabIcons/chats.svg";

export default function TabsLayout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: "#F3F3F3",
                tabBarInactiveTintColor: "#5E5E5E",
                tabBarStyle: {
                    backgroundColor: "#101111",
                    borderTopWidth: 0,
                    paddingTop: 4,
                    elevation: 0,
                    shadowOpacity: 0,
                    shadowOffset: {
                        height: 0,
                    },
                    shadowRadius: 0,
                },
                tabBarBackground: () => (
                    <View style={{ flex: 1, backgroundColor: "#101111" }}>
                        <View style={{ height: 1, backgroundColor: "#2C2C2C" }} />
                    </View>
                ),
                tabBarLabelStyle: {
                    fontSize: 12,
                },
            }}>
            <Tabs.Screen
                name="index"
                options={{
                    title: "Главная",
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => <HomeActiveSVG width={20} height={20} />,
                }}
            />
            <Tabs.Screen
                name="studios"
                options={{
                    title: "Студии",
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => <StudiosSVG width={12} height={20} />,
                }}
            />
            <Tabs.Screen
                name="record"
                options={{
                    title: "Запись",
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => <RecordSVG width={20} height={20} />,
                }}
            />
            <Tabs.Screen
                name="exchange"
                options={{
                    title: "Биржа",
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => <ExchangeSVG width={24} height={18} />,
                }}
            />
            <Tabs.Screen
                name="chats"
                options={{
                    title: "Чаты",
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => <ChatsSVG width={28} height={20} />,
                }}
            />
        </Tabs>
    );
}
