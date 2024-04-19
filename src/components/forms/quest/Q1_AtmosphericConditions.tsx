import Group from '@/components/shared/containers/Group'
import Paper from '@/components/shared/containers/Paper'
import Icon from '@/components/shared/common/Icon'

export default function AtmosphericConditions() {
	const date = '14 grudnia 2023'

	return (
		<Group className="flex flex-col gap-6 w-full h-full">
			<Paper>
				<div className="flex flex-col items-start h-[100px]">
					<div className="flex-center gap-8">
						<p className="text-[26px] font-bold">Dodaj odczyt</p>
						<div className='flex-center gap-2'>
              <Icon path='/assets/icons/calendar.svg'/>
							<p className="text-sm">{date}</p>
						</div>
					</div>
				</div>
			</Paper>
			<Paper className="grow">2</Paper>
		</Group>
	)
}
