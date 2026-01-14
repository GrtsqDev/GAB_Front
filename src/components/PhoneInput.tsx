import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { useState } from 'react'
import Input from './forms/Input'
import Svg, { Path } from 'react-native-svg'

type Country = 'RU' | 'ID'

interface PhoneInputProps {
	onChangeText: (phoneNumber: string) => void
	placeholder?: string
}

export default function PhoneInput({
	onChangeText,
	placeholder = 'Phone Number'
}: PhoneInputProps) {
	const [country, setCountry] = useState<Country>('ID')
	const [displayValue, setDisplayValue] = useState('')

	const formatPhoneNumber = (text: string, countryCode: Country): string => {
		// Убираем все нечисловые символы
		const digits = text.replace(/\D/g, '')

		if (countryCode === 'RU') {
			// Формат: XXX-XXX-XX-XX
			let formatted = ''
			if (digits.length > 0) formatted = digits.substring(0, 3)
			if (digits.length > 3) formatted += '-' + digits.substring(3, 6)
			if (digits.length > 6) formatted += '-' + digits.substring(6, 8)
			if (digits.length > 8) formatted += '-' + digits.substring(8, 10)
			return formatted
		} else {
			// Формат: XXX-XXXX-XXXX
			let formatted = ''
			if (digits.length > 0) formatted = digits.substring(0, 3)
			if (digits.length > 3) formatted += '-' + digits.substring(3, 7)
			if (digits.length > 7) formatted += '-' + digits.substring(7, 11)
			return formatted
		}
	}

	const handleTextChange = (text: string) => {
		const formatted = formatPhoneNumber(text, country)
		setDisplayValue(formatted)
		// Передаём только цифры без форматирования
		onChangeText(formatted.replace(/\D/g, ''))
	}

	const toggleCountry = () => {
		const newCountry: Country = country === 'ID' ? 'RU' : 'ID'
		setCountry(newCountry)
		// Переформатируем текущее значение под новую страну
		if (displayValue) {
			const formatted = formatPhoneNumber(displayValue, newCountry)
			setDisplayValue(formatted)
		}
	}

	const countryPrefix = country === 'RU' ? '+7' : '+62'

	const renderFlag = () => {
		if (country === 'RU') {
			return (
				<Svg width={20} height={20} viewBox='0 0 32 32'>
					<Path fill='#1435a1' d='M1 11H31V21H1z' />
					<Path
						d='M5,4H27c2.208,0,4,1.792,4,4v4H1v-4c0-2.208,1.792-4,4-4Z'
						fill='#fff'
					/>
					<Path
						d='M5,20H27c2.208,0,4,1.792,4,4v4H1v-4c0-2.208,1.792-4,4-4Z'
						transform='rotate(180 16 24)'
						fill='#c53a28'
					/>
					<Path
						d='M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z'
						opacity='0.15'
					/>
					<Path
						d='M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z'
						fill='#fff'
						opacity='0.2'
					/>
				</Svg>
			)
		} else {
			return (
				<Svg width={20} height={20} viewBox='0 0 32 32'>
					<Path
						d='M31,8c0-2.209-1.791-4-4-4H5c-2.209,0-4,1.791-4,4v9H31V8Z'
						fill='#ea3323'
					/>
					<Path
						d='M5,28H27c2.209,0,4-1.791,4-4v-8H1v8c0,2.209,1.791,4,4,4Z'
						fill='#fff'
					/>
					<Path
						d='M5,28H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4ZM2,8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8Z'
						opacity='0.15'
					/>
					<Path
						d='M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z'
						fill='#fff'
						opacity='0.2'
					/>
				</Svg>
			)
		}
	}

	return (
		<View style={styles.container}>
			<View style={styles.inputWrapper}>
				<TouchableOpacity style={styles.flagButton} onPress={toggleCountry}>
					{renderFlag()}
				</TouchableOpacity>
				<Text style={styles.prefix}>{countryPrefix}</Text>
				<Input
					placeholder={placeholder}
					onChangeText={handleTextChange}
					value={displayValue}
					keyboardType='phone-pad'
					style={styles.phoneInput}
				/>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		marginBottom: 16
	},
	inputWrapper: {
		position: 'relative'
	},
	flagButton: {
		position: 'absolute',
		left: 12,
		top: 13,
		zIndex: 2,
		padding: 2
	},
	prefix: {
		position: 'absolute',
		left: 42,
		top: 14,
		fontSize: 16,
		color: '#6B7280',
		zIndex: 1
	},
	phoneInput: {
		paddingLeft: 76,
		marginBottom: 0
	}
})
