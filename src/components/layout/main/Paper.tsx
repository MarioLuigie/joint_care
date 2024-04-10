interface PaperProps {
	children: React.ReactNode
	className?: string
}

export default function Paper({ children, className }: PaperProps) {
	return <div className={`bg-white rounded p-10 ${className}`}>{children}</div>
}
