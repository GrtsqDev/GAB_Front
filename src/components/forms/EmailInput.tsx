import { Ionicons } from '@expo/vector-icons'
import Input from './Input'

// Валидатор для react-hook-form
export const validateEmail = (value: string): boolean | string => {
	if (!value) return 'Email is required'
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
	if (!emailRegex.test(value)) {
		return 'Please enter a valid email'
	}
	return true
}

interface EmailInputProps {
	value?: string
	onChange?: (email: string) => void
	onBlur?: () => void
	placeholder?: string
}

export default function EmailInput({
	value = '',
	onChange,
	onBlur,
	placeholder = 'Email'
}: EmailInputProps) {
	return (
		<Input
			placeholder={placeholder}
			value={value}
			onChangeText={onChange}
			onBlur={onBlur}
			icon={<Ionicons name='mail-outline' size={22} />}
			keyboardType='email-address'
			autoCapitalize='none'
		/>
	)
}
