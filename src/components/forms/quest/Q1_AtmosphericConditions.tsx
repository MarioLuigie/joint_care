//components
import Group from '@/components/shared/containers/Group'
import Icon from '@/components/shared/common/Icon'
import Paper from '@/components/shared/containers/Paper'

const AddReadingOption = () => {
	const date = '14 grudnia 2023'
	const nextVisit = '4'
	const nextVisitDate = '16.12.2023'

	return (
		<Group gap="4" className="items-start h-[100px]">
			<div className="flex-center gap-8">
				<p className="text-[26px] font-bold">Dodaj odczyt</p>
				<div className="flex-center gap-2 text-jc-blue">
					<Icon path="/assets/icons/calendar.svg" />
					<p className="text-sm text-black">{date}</p>
				</div>
			</div>
			<div className="flex gap-2">
				<Icon path="/assets/icons/stethoscope.svg" />
				<div className="flex flex-col">
					<div className="flex gap-2">
						<p>Nie masz zaplanowanej na dzisiaj wizyty lekarskiej</p>
						<p className="text-jc-blue underline font-semibold cursor-pointer">
							Dodaj wizytę
						</p>
					</div>
					<p className="text-jc-gray8 pt-1">
						{`Następna wizyta lekarska za ${nextVisit} dni (${nextVisitDate})`}
					</p>
				</div>
			</div>
		</Group>
	)
}

const Header = ({ children }: { children: React.ReactNode }) => {
	return (
		<header className='flex justify-between items-center bg-jc-bg h-[120px] w-full rounded-t-lg p-[30px]'>
			{children}
		</header>
	)
}

const Main = ({ children }: { children: React.ReactNode }) => {
	return (
		<main className='min-h-[300px] w-full rounded-b-lg border-[1px] border-jc-blue3'>
			{children}
		</main>
	)
}

const Weather = () => {
	return (
		<Group gap='0'>
			<Header>
				<div className='flex flex-col'>
					<p className='font-semibold text-lg'>Pogoda</p>
					<p>Słonecznie</p>
				</div>
				<div>
					<Icon path='/assets/icons/sun.svg' />
				</div>
			</Header>
			<Main>
				<div>

				</div>
			</Main>
		</Group>
	)
}

const Dust = () => {
	return <div></div>
}

const AirQuality = () => {
	return <div></div>
}

export default function AtmosphericConditions() {
	return (
		<Group className="flex flex-col gap-4 w-full h-full">
			<Paper>
				<AddReadingOption />
			</Paper>
			<Paper className="grow">
				<Group gap='6'>
					<p className="text-[26px] font-bold">Warunki atmosferyczne</p>
					<Weather />
					<Dust />
					<AirQuality />
				</Group>
			</Paper>
		</Group>
	)
}
