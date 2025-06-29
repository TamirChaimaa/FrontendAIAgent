// Shared styles and constants for the modern chatbot design

export const colors = {
  primary: {
    50: '#eff6ff',
    100: '#dbeafe',
    200: '#bfdbfe',
    300: '#93c5fd',
    400: '#60a5fa',
    500: '#3b82f6',
    600: '#2563eb',
    700: '#1d4ed8',
    800: '#1e40af',
    900: '#1e3a8a',
  },
  secondary: {
    50: '#f5f3ff',
    100: '#ede9fe',
    200: '#ddd6fe',
    300: '#c4b5fd',
    400: '#a78bfa',
    500: '#8b5cf6',
    600: '#7c3aed',
    700: '#6d28d9',
    800: '#5b21b6',
    900: '#4c1d95',
  },
  gray: {
    50: '#f9fafb',
    100: '#f3f4f6',
    200: '#e5e7eb',
    300: '#d1d5db',
    400: '#9ca3af',
    500: '#6b7280',
    600: '#4b5563',
    700: '#374151',
    800: '#1f2937',
    900: '#111827',
  }
};

export const gradients = {
  primary: 'bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-600',
  secondary: 'bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-600',
  light: 'bg-gradient-to-br from-white via-blue-50/80 to-indigo-50/80',
  dark: 'bg-gradient-to-br from-gray-800 via-gray-900 to-black',
  glass: 'bg-white/80 backdrop-blur-xl',
  glassDark: 'bg-gray-900/80 backdrop-blur-xl',
};

export const shadows = {
  sm: 'shadow-sm',
  md: 'shadow-md',
  lg: 'shadow-lg',
  xl: 'shadow-xl',
  '2xl': 'shadow-2xl',
  inner: 'shadow-inner',
  glow: 'shadow-[0_0_20px_rgba(59,130,246,0.3)]',
  glowPurple: 'shadow-[0_0_20px_rgba(147,51,234,0.3)]',
};

export const animations = {
  fadeIn: 'animate-fade-in',
  fadeInUp: 'animate-fade-in-up',
  bounce: 'animate-bounce',
  pulse: 'animate-pulse',
  ping: 'animate-ping',
  spin: 'animate-spin',
  bounceSlow: 'animate-bounce-slow',
  shimmer: 'animate-shimmer',
  glow: 'animate-glow',
};

export const transitions = {
  fast: 'transition-all duration-200',
  normal: 'transition-all duration-300',
  slow: 'transition-all duration-500',
  bounce: 'transition-all duration-300 cubic-bezier(0.4, 0, 0.2, 1)',
};

export const borderRadius = {
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  xl: 'rounded-xl',
  '2xl': 'rounded-2xl',
  '3xl': 'rounded-3xl',
  full: 'rounded-full',
};

export const spacing = {
  xs: 'p-1',
  sm: 'p-2',
  md: 'p-3',
  lg: 'p-4',
  xl: 'p-6',
  '2xl': 'p-8',
};

export const typography = {
  h1: 'text-2xl font-bold tracking-tight',
  h2: 'text-xl font-semibold',
  h3: 'text-lg font-medium',
  body: 'text-base leading-relaxed',
  small: 'text-sm',
  caption: 'text-xs',
};

export const buttonStyles = {
  primary: `${gradients.primary} text-white font-semibold px-6 py-3 ${borderRadius.xl} ${shadows.lg} hover:shadow-xl transform hover:scale-105 ${transitions.normal}`,
  secondary: 'bg-white text-gray-800 font-semibold px-6 py-3 border-2 border-gray-200 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300',
  ghost: 'text-gray-600 hover:text-gray-800 hover:bg-gray-100 px-4 py-2 rounded-lg transition-all duration-200',
  danger: 'bg-red-500 text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:bg-red-600 hover:shadow-xl transform hover:scale-105 transition-all duration-300',
};

export const inputStyles = {
  primary: `w-full px-4 py-3 bg-white/80 backdrop-blur-sm border-2 border-blue-200/50 ${borderRadius.xl} ${shadows.lg} focus:outline-none focus:ring-4 focus:ring-blue-300/30 focus:border-blue-400 ${transitions.normal}`,
  secondary: `w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 ${borderRadius.xl} ${shadows.sm} focus:outline-none focus:ring-4 focus:ring-gray-300/30 focus:border-gray-400 ${transitions.normal}`,
};

export const cardStyles = {
  primary: `${gradients.light} ${borderRadius['2xl']} ${shadows.lg} border border-white/20 overflow-hidden`,
  secondary: 'bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden',
  glass: `${gradients.glass} ${borderRadius['2xl']} ${shadows.lg} border border-white/30 overflow-hidden`,
};

export const messageStyles = {
  ai: `${gradients.light} ${borderRadius['2xl']} ${shadows.lg} border border-blue-200/50 text-gray-800`,
  user: `${gradients.primary} ${borderRadius['2xl']} ${shadows.lg} text-white`,
};

export const responsive = {
  container: 'w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8',
  grid: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4',
  flex: 'flex flex-col sm:flex-row items-center justify-between',
};

export const utilities = {
  glassmorphism: 'bg-white/80 backdrop-blur-xl border border-white/30',
  textGradient: 'bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent',
  hoverLift: 'hover:transform hover:scale-105 hover:shadow-xl transition-all duration-300',
  focusRing: 'focus:outline-none focus:ring-4 focus:ring-blue-300/30',
};

// Common component configurations
export const chatConfig = {
  maxWidth: 'max-w-4xl',
  height: 'h-[600px]',
  headerHeight: 'h-[140px]',
  messageSpacing: 'space-y-4',
  padding: 'p-6',
};

export const productConfig = {
  cardHeight: 'min-h-[500px]',
  imageHeight: 'h-48',
  gridCols: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
  gap: 'gap-4',
};

// Animation delays for staggered animations
export const animationDelays = {
  message: (index) => `${index * 0.1}s`,
  product: (index) => `${index * 0.05}s`,
  background: (index) => `${index * 2}s`,
};

// Export all as a single object for easy importing
export default {
  colors,
  gradients,
  shadows,
  animations,
  transitions,
  borderRadius,
  spacing,
  typography,
  buttonStyles,
  inputStyles,
  cardStyles,
  messageStyles,
  responsive,
  utilities,
  chatConfig,
  productConfig,
  animationDelays,
}; 