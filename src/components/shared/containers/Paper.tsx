interface PaperProps {
	children: React.ReactNode
	className?: string
}

export default function Paper({ children, className }: PaperProps) {
	return <div className={`bg-white rounded-[25px] p-8 ${className}`}>{children}</div>
}
