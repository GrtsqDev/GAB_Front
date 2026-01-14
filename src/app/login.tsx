import {
	View,
	Text,
	StyleSheet,
	Image,
	TouchableOpacity,
	ScrollView
} from 'react-native'
import { useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { Ionicons } from '@expo/vector-icons'
import PhoneInput from '@/components/forms/PhoneInput'
import Button from '@/components/Button'
import LogoICANSVG from '@/assets/logo-ICAN.svg'

export default function LoginScreen() {
	const [phoneNumber, setPhoneNumber] = useState('')
	const [isAgreed, setIsAgreed] = useState(false)

	const handleContinue = () => {
		if (phoneNumber.length === 10 && isAgreed) {
			console.log('Phone number:', phoneNumber)
			// Здесь будет логика отправки кода
		}
	}

	const isButtonEnabled = phoneNumber.length === 10 && isAgreed

	return (
		<View className='flex-1 bg-black'>
			<ScrollView
				contentContainerStyle={{ flexGrow: 1 }}
				showsVerticalScrollIndicator={false}
			>
				<View className='flex-1 px-6 pt-20'>
					{/* Логотип и текст */}
					<View className='items-center mb-32'>
						<LogoICANSVG width={200} height={75} />
						<Text className='text-white text-center text-base mt-6 font-normal'>
							Умное пространство{'\n'}под контролем
						</Text>
					</View>

					{/* Заголовок */}
					<Text className='text-white text-lg font-medium mb-4'>
						Введите номер телефона
					</Text>

					{/* Поле ввода телефона */}
					<PhoneInput
						value={phoneNumber}
						onChange={setPhoneNumber}
						placeholder='Номер телефона'
					/>

					{/* Чекбокс согласия */}
					<TouchableOpacity
						onPress={() => setIsAgreed(!isAgreed)}
						className='flex-row items-start mt-4 mb-8'
						activeOpacity={0.7}
					>
						<View
							className={`w-5 h-5 rounded border-2 mr-3 mt-0.5 items-center justify-center ${
								isAgreed ? 'bg-red-700 border-red-700' : 'border-gray-400'
							}`}
						>
							{isAgreed && (
								<Ionicons name='checkmark' size={14} color='white' />
							)}
						</View>
						<Text className='text-gray-400 text-sm flex-1 leading-5'>
							Я прочитал и согласен с{' '}
							<Text className='text-white underline'>
								Пользовательское соглашение
							</Text>{' '}
							и{' '}
							<Text className='text-white underline'>
								Политика конфиденциальности
							</Text>
						</Text>
					</TouchableOpacity>

					{/* Кнопка "Далее" */}
					<View className='flex-1 justify-end pb-8'>
						<Button
							title='Далее'
							onPress={handleContinue}
							variant='light'
							disabled={!isButtonEnabled}
						/>
					</View>
				</View>
			</ScrollView>
		</View>
	)
}
