import Icon from '@/components/shared/common/Icon'

interface WarningNotifProps {
	icon?: string
	isError: boolean
	children: React.ReactNode
}

export default function WarningNotif({ icon = '/assets/icons/warning.svg', isError, children }: WarningNotifProps) {
	if (isError) {
		return (
			<div className="flex-start gap-3 bg-[#FBF4DD] p-4 mb-2 rounded-lg">
				<div style={{minWidth: '25px'}}>
					<Icon path={icon} />
				</div>
				<div className="text-[13px] text-[#C78523]">
					{children}
				</div>
			</div>) 
		} else {
		return null
	}
}