import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import * as SplashScreen from 'expo-splash-screen'
import * as NavigationBar from 'expo-navigation-bar'
import { useEffect, useState } from 'react'
import { Platform } from 'react-native'
import '../../global.css'

// Предотвращаем автоматическое скрытие splash screen
SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
	const [appIsReady, setAppIsReady] = useState(false)

	// Настраиваем цвет навигационной панели Android
	useEffect(() => {
		if (Platform.OS === 'android') {
			NavigationBar.setBackgroundColorAsync('transparent')
			NavigationBar.setButtonStyleAsync('dark')
		}
	}, [])

	// Скрываем splash screen после загрузки
	useEffect(() => {
		async function prepare() {
			try {
				await new Promise(resolve => setTimeout(resolve, 100))
			} catch (e) {
				console.warn(e)
			} finally {
				setAppIsReady(true)
			}
		}

		prepare()
	}, [])

	useEffect(() => {
		if (appIsReady) {
			SplashScreen.hideAsync()
		}
	}, [appIsReady])

	if (!appIsReady) {
		return null
	}

	return (
		<SafeAreaProvider>
			<StatusBar style='light' />
			<Stack
				screenOptions={{
					headerShown: false
				}}
			>
				<Stack.Screen name='login' options={{ headerShown: false }} />
				<Stack.Screen name='register' options={{ headerShown: false }} />
				<Stack.Screen name='(protected)' options={{ headerShown: false }} />
			</Stack>
		</SafeAreaProvider>
	)
}
