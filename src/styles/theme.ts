/**
 * Design Tokens
 * Переменные дизайна для переиспользования во всём приложении
 */

// ============================================
// COLORS - Цвета
// ============================================
export const colors = {
	// Brand / Primary
	primary: '#5771FF',
	primaryDark: '#6935FD',

	// Градиенты (для LinearGradient)
	gradientPrimary: ['#875CFF', '#5B77FF'] as const,
	gradientSuccess: ['#26BA59', '#10F2C8'] as const,
	gradientError: ['#EF4444', '#F87171'] as const,

	// Semantic
	success: '#4CAF50',
	error: '#EF4444',
	warning: '#F59E0B',
	info: '#5771FF',

	// Text
	textPrimary: '#333333',
	textWhite: '#FFFFFF',

	// Background
	bgPrimary: '#FFFFFF',
	bgSecondary: '#F6F7FA',
	bgPage: '#f2f2f7',

	bgOverlay: 'rgba(0, 0, 0, 0.5)',

	// Border
	border: '#E5E7EB'
}

// ============================================
// FONT SIZES - Размеры шрифтов
// ============================================
export const fontSize = {
	h1: 32,
	h2: 28,
	h3: 24,
	h4: 22,
	h5: 20,
	h6: 18,

	xl: 20,
	lg: 18,
	md: 16,
	base: 15,
	sm: 14,
	xs: 13,
	xxs: 12
}

// ============================================
// BORDER RADIUS - Скругления
// ============================================
export const borderRadius = {
	xs: 4,
	sm: 8,
	md: 12,
	lg: 16,
	xl: 20,
	xxl: 24,
	full: 999
}
