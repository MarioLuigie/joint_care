//components
import Group from '@/components/shared/containers/Group'
import Icon from '@/components/shared/common/Icon'
import Paper from '@/components/shared/containers/Paper'

const AddReadingOption = () => {
	const date = {
		currentDate: '14 grudnia 2023',
		nextVisitDate: '16.12.2023',
		timeToNextVisit: '4',
	}
	return (
		<Group gap="4" className="items-start h-[100px]">
			<div className="flex-center gap-8">
				<p className="text-[26px] font-bold">Dodaj odczyt</p>
				<div className="flex-center gap-2 text-jc-blue">
					<Icon path="/assets/icons/calendar.svg" />
					<p className="text-sm text-black">{date.currentDate}</p>
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
						{`Następna wizyta lekarska za ${date.timeToNextVisit} dni (${date.nextVisitDate})`}
					</p>
				</div>
			</div>
		</Group>
	)
}

const Header = ({ children }: { children: React.ReactNode }) => {
	return (
		<header className="flex justify-between items-center bg-jc-bg h-[120px] w-full rounded-t-lg p-[30px]">
			{children}
		</header>
	)
}

const Main = ({ children }: { children: React.ReactNode }) => {
	return (
		<main className="min-h-[300px] w-full rounded-b-lg border-[1px] border-jc-blue3">
			{children}
		</main>
	)
}

const Weather = () => {
	const temp = {
		currentTemp: '4 °C',
		perceptibleTemp: '2 °C',
	}
	return (
		<Group gap="0">
			<Header>
				<div className="flex flex-col gap-2">
					<p className="font-semibold text-lg">Pogoda</p>
					<p className="text-jc-text4 text-sm">Słonecznie</p>
				</div>
				<div className="flex flex-col gap-2">
					<div className="flex justify-end items-center gap-2">
						<Icon path="/assets/icons/sun.svg" />
						<p className="text-3xl font-bold">{temp.currentTemp}</p>
					</div>
					<p className="text-jc-text4 text-sm text-right">
						Odczuwalność: {temp.perceptibleTemp}
					</p>
				</div>
			</Header>
			<Main>
				<div></div>
			</Main>
		</Group>
	)
}

const Dust = () => {
	return (
		<Group gap="0">
			<Header>
				<div className="flex flex-col gap-2">
					<p className="font-semibold text-lg">Pylenie</p>
					<p className="text-jc-text4 text-sm">Duże</p>
				</div>
				<div className="flex flex-col gap-2">
					<Icon path="/assets/icons/dust.svg" />
				</div>
			</Header>
			<Main>
				<div></div>
			</Main>
		</Group>
	)
}

const AirQuality = () => {
	return (
		<Group gap="0">
			<Header>
				<div className="flex flex-col gap-2">
					<p className="font-semibold text-lg">Jakość powietrza</p>
					<p className="text-jc-text4 text-sm">Dobra</p>
				</div>
				<div className="flex flex-col gap-2">
					<div className="flex justify-end items-center gap-2">
						<Icon path="/assets/icons/sun.svg" />
						<p className="text-3xl font-bold">12</p>
					</div>
					<p className="text-jc-text4 text-sm text-right">
						CAQI
					</p>
				</div>
			</Header>
			<Main>
				<div></div>
			</Main>
		</Group>
	)
}

export default function AtmosphericConditions() {
	return (
		<Group className="flex flex-col gap-4 w-full h-full">
			<Paper>
				<AddReadingOption />
			</Paper>
			<Paper className="grow">
				<Group gap="6">
					<p className="text-[26px] font-bold">Warunki atmosferyczne</p>
					<Weather />
					<Dust />
					<AirQuality />
				</Group>
			</Paper>
		</Group>
	)
}
