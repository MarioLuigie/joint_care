export default function Group({
	children,
	row = false,
	gap = '4',
	className,
}: {
	children: React.ReactNode
	row?: boolean
	gap?: string
	className?: string
}) {
	return (
		<div className={`flex ${row ? '' : 'flex-col'} gap-${gap} ${className}`}>{children}</div>
	)
}
