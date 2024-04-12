export default function Group({
	children,
	row = false,
	gap = '4',
}: {
	children: React.ReactNode
	row?: boolean
	gap?: string
}) {
	return (
		<section className={`flex ${row ? '' : 'flex-col'} gap-${gap}`}>{children}</section>
	)
}
