import { View, Text } from 'react-native'
import { useState, useEffect } from 'react'
import Input from './Input'
import RusFlagSVG from '@/assets/russianFlag.svg'

// Валидатор для react-hook-form
// Формат value: строка с цифрами (например "9123456789")
export const validatePhone = (value: string): boolean | string => {
	if (!value) return 'Введите номер телефона'

	const digits = value.replace(/\D/g, '')

	if (digits.length < 10 || digits.length > 10) {
		return 'Введите 10 цифр'
	}
	return true
}

interface PhoneInputProps {
	value?: string
	onChange?: (phoneNumber: string) => void
	onBlur?: () => void
	placeholder?: string
}

export default function PhoneInput({
	value = '',
	onChange,
	onBlur,
	placeholder = 'Номер телефона'
}: PhoneInputProps) {
	const [displayValue, setDisplayValue] = useState('')

	// Синхронизируем displayValue с внешним value
	useEffect(() => {
		if (value) {
			const formatted = formatPhoneNumber(value)
			setDisplayValue(formatted)
		}
	}, [])

	const formatPhoneNumber = (text: string): string => {
		// Убираем все нечисловые символы
		const digits = text.replace(/\D/g, '')

		// Формат: XXX-XXX-XX-XX
		let formatted = ''
		if (digits.length > 0) formatted = digits.substring(0, 3)
		if (digits.length > 3) formatted += '-' + digits.substring(3, 6)
		if (digits.length > 6) formatted += '-' + digits.substring(6, 8)
		if (digits.length > 8) formatted += '-' + digits.substring(8, 10)
		return formatted
	}

	const handleTextChange = (text: string) => {
		const formatted = formatPhoneNumber(text)
		setDisplayValue(formatted)
		const digits = formatted.replace(/\D/g, '')
		// Передаём только цифры
		onChange?.(digits)
	}

	return (
		<View className='w-full mb-2'>
			<View className='relative'>
				<View className='absolute left-3 top-3.5 z-20 p-0.5'>
					<RusFlagSVG width={20} height={20} />
				</View>
				<Text className='absolute left-[42px] top-3.5 text-base text-gray-400 z-10'>
					+7
				</Text>
				<Input
					placeholder={placeholder}
					onChangeText={handleTextChange}
					onBlur={onBlur}
					value={displayValue}
					keyboardType='phone-pad'
					className='pl-[76px] mb-0'
				/>
			</View>
		</View>
	)
}
