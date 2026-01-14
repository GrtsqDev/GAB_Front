import { TextInput, TextInputProps, View } from 'react-native'
import { ReactNode } from 'react'

type InputProps = TextInputProps & {
	icon?: ReactNode
	className?: string
}

function Input({ className, icon, ...rest }: InputProps) {
	return (
		<View
			className={`flex-row items-center bg-[#2a2a2a] border border-gray-700 rounded-xl mb-4 px-3 ${className || ''}`}
		>
			{icon && <View className='mx-1 justify-center items-center'>{icon}</View>}
			<TextInput
				className={`flex-1 py-3.5 text-base text-white ${icon ? 'ml-1' : ''}`}
				placeholderTextColor='#9CA3AF'
				{...rest}
			/>
		</View>
	)
}

export default Input
