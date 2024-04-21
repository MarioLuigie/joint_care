interface PaperProps {
	children: React.ReactNode
	className?: string
	rounded?: string
}

export default function Paper({ children, className, rounded='[25px]' }: PaperProps) {
	return <div className={`bg-white rounded-${rounded} p-8 ${className}`}>{children}</div>
}
