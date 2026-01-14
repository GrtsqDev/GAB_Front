import { Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'

export default function TabsLayout() {
	return (
		<Tabs
			screenOptions={{
				headerShown: false,
				tabBarActiveTintColor: '#3E4565'
			}}
		>
			<Tabs.Screen
				name='index'
				options={{
					title: 'Главная',
					headerShown: false
				}}
			/>
			<Tabs.Screen
				name='studios'
				options={{
					title: 'Студии',
					headerShown: false
				}}
			/>
			<Tabs.Screen
				name='record'
				options={{
					title: 'Запись',
					headerShown: false
				}}
			/>
			<Tabs.Screen
				name='exchange'
				options={{
					title: 'Биржа',
					headerShown: false
				}}
			/>
			<Tabs.Screen
				name='chats'
				options={{
					title: 'Чаты',
					headerShown: false
				}}
			/>
		</Tabs>
	)
}
