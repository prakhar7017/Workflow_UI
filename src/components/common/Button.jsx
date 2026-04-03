const variants = {
  primary:
    'bg-app-primary text-white shadow-sm hover:bg-indigo-600 hover:shadow-md active:bg-indigo-700 transition-all duration-200',
  secondary:
    'bg-white text-gray-700 border border-gray-200/90 shadow-sm hover:bg-gray-50 hover:border-gray-300 transition-all duration-200',
  ghost:
    'text-indigo-100/90 hover:bg-white/10 active:bg-white/15 transition-colors duration-200',
  icon: 'p-2 rounded-lg text-gray-500 hover:bg-gray-100 hover:text-gray-800 transition-colors duration-200',
}

const sizes = {
  sm: 'px-3 py-1.5 text-sm rounded-lg',
  md: 'px-4 py-2.5 text-sm font-medium rounded-xl',
  lg: 'px-5 py-3 text-sm font-medium rounded-xl',
  icon: 'p-2 rounded-lg',
}

export function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  type = 'button',
  disabled = false,
  children,
  ...props
}) {
  const base =
    'inline-flex items-center justify-center gap-2 font-medium outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50'

  return (
    <button
      type={type}
      disabled={disabled}
      className={`${base} ${variants[variant] ?? variants.primary} ${sizes[size] ?? sizes.md} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
