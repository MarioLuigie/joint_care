//components
import Icon from '@/components/shared/common/Icon'
import { Button } from '@/components/ui/button'
import RemoveIcon from '/public/assets/icons/delete.svg'

export default function RemoveButton({
	handleRemove,
}: {
	handleRemove: () => void
}) {
	return (
		<Button
			className="bg-white rounded-lg border-2 border-jc-gray9 w-[40px] h-[40px] hover:bg-white"
			onClick={handleRemove}
		>
			<div className="text-jc-text4">
				<Icon path={RemoveIcon.src} />
			</div>
		</Button>
	)
}
