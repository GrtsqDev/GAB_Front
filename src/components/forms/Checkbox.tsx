import { View, Text, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

interface CheckboxProps {
	value: boolean
	onValueChange: (value: boolean) => void
	children?: React.ReactNode
	label?: string
	disabled?: boolean
}

export default function Checkbox({
	value,
	onValueChange,
	children,
	label,
	disabled = false
}: CheckboxProps) {
	return (
		<TouchableOpacity
			onPress={() => !disabled && onValueChange(!value)}
			className='flex-row items-start'
			activeOpacity={0.7}
			disabled={disabled}
		>
			<View
				className={`w-5 h-5 rounded border-2 mr-3 mt-0.5 items-center justify-center ${
					value ? 'bg-red-700 border-red-700' : 'border-gray-400'
				} ${disabled ? 'opacity-50' : ''}`}
			>
				{value && <Ionicons name='checkmark' size={14} color='white' />}
			</View>
			{children ? (
				<View className='flex-1'>{children}</View>
			) : label ? (
				<Text className='text-gray-400 text-sm flex-1 leading-5'>{label}</Text>
			) : null}
		</TouchableOpacity>
	)
}
