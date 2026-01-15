import { Redirect } from "expo-router";

export default function Index() {
    // Временное перенаправление на главную для разработки
    return <Redirect href="/(protected)/(tabs)" />;
}
