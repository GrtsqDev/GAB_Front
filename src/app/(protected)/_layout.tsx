import { Redirect, Stack } from 'expo-router'

export default function ProtectedLayout() {
	//const isLoggedIn = useSelector((state: { auth: AuthState }) => state.auth?.id)

	// Временно убрал проверку на авторизацию
	// if (!isLoggedIn) {
	// 	console.log(isLoggedIn)
	// 	return <Redirect href='/login' />
	// }
	return (
		<Stack
			screenOptions={{
				headerShown: false
			}}
		/>
	)
}
