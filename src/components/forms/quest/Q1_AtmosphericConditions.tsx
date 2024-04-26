//components
import Group from '@/components/shared/containers/Group'
import Icon from '@/components/shared/common/Icon'
import Paper from '@/components/shared/containers/Paper'
//lib
import { questSections } from '@/lib/constants/quest'

//Reading option component
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

//Template for atmospheric conditions
const AtmosphericCondition = ({
	title,
	condition,
	icon,
	value,
	subValue,
	table,
}: {
	title: string
	condition: string
	icon?: string
	value?: string
	subValue?: string
	table?: JSX.Element
}) => {
	return (
		<Group gap="0">
			<header className="flex justify-between items-center bg-jc-bg h-[120px] w-full rounded-t-lg p-[30px]">
				<div className="flex flex-col gap-2">
					<p className="font-semibold text-lg">{title}</p>
					<p className="text-jc-text4 text-sm">{condition}</p>
				</div>
				<div className="flex flex-col gap-2">
					<div className="flex justify-end items-center gap-2">
						{icon ? (
							<Icon path={icon} />
						) : (
							<div className="w-[8px] aspect-square bg-green-500 rounded-full"></div>
						)}
						{value ? <p className="text-3xl font-bold">{value}</p> : null}
					</div>
					{subValue ? (
						<p className="text-jc-text4 text-sm text-right">{subValue}</p>
					) : null}
				</div>
			</header>
			<main className="w-full rounded-b-lg border-[1px] border-jc-blue3 p-[30px]">
				{table}
			</main>
		</Group>
	)
}

//Table for weather
const WeatherTable = () => {
	const weatherPropertiesData = [
		{ title: 'Promieniowanie UVA/UVB/UVC', value: '11' },
		{ title: 'Wilgotność', value: '67%' },
		{ title: 'Opady', value: '0,0 mm' },
		{ title: 'Szansa opadów', value: '47%' },
		{ title: 'Wiatr', value: '11 km/h' },
		{ title: 'Ciśnienie', value: '1012 hPa' },
	]

	const WeatherProperty = ({
		title,
		value,
	}: {
		title: string
		value: string
	}) => (
		<div className="flex flex-col gap-2">
			<p className="text-[15px] text-jc-text2 whitespace-nowrap">{title}</p>
			<p className="font-semibold">{value}</p>
		</div>
	)

	return (
		<div className="grid grid-cols-[40%_30%_30%] gap-y-8 gap-x-8">
			{weatherPropertiesData.map((item, i) => (
				<WeatherProperty key={i} title={item.title} value={item.value} />
			))}
		</div>
	)
}

const Chart = ({ value }: { value: number }) => {

	return (
		<div className='flex items-end gap-[3px] w-[29px] h-[23px]'>
			<div className={`h-[9px] w-[5px] ${value > 0 ? 'bg-red' : 'bg-jc-bg'} rounded-[2px]`}></div>
			<div className={`h-[13px] w-[5px] ${value > 25 ? 'bg-red' : 'bg-jc-bg'} rounded-[2px]`}></div>
			<div className={`h-[18px] w-[5px] ${value > 50 ? 'bg-red' : 'bg-jc-bg'} rounded-[2px]`}></div>
			<div className={`h-full w-[5px] ${value > 75 ? 'bg-red' : 'bg-jc-bg'} rounded-[2px]`}></div>
		</div>
	)
}

//Table for dust
const DustTable = () => {
	const DustPropertiesData = [
		{ allergen: 'Leszczyna', concetration: <Chart value={2} />, trend: 55 },
		{ allergen: 'Platan', concetration: <Chart value={34} />, trend: 20 },
		{ allergen: 'Brzoza', concetration: <Chart value={45} />, trend: 10 },
		{ allergen: 'Klon', concetration: <Chart value={89} />, trend: 70 },
	]

	const DustProperty = ({
		allergen,
		concetration,
		trend,
	}: {
		allergen: string
		concetration: JSX.Element
		trend: number
	}) => (
		<div className="flex justify-between items-center gap-4">
			<p className="w-5/12 text-[15px]">{allergen}</p>
			<div className="w-4/12 font-semibold">{concetration}</div>
			<div className="w-3/12 font-semibold flex-center">
				{trend > 50 ? (
					<Icon path="/assets/icons/up-arrow.svg" />
				) : (
					<Icon path="/assets/icons/down-arrow.svg" />
				)}
			</div>
		</div>
	)

	return (
		<div className="flex flex-col gap-6">
			<div className="flex justify-between items-center gap-4">
				<p className="w-5/12 text-[15px] text-jc-text2">Alergen</p>
				<p className="w-4/12 text-jc-text2">Stężenie</p>
				<p className="w-3/12 text-jc-text2 flex-center">Tendencja</p>
			</div>
			{DustPropertiesData.map((item, i) => (
				<DustProperty
					key={i}
					allergen={item.allergen}
					concetration={item.concetration}
					trend={item.trend}
				/>
			))}
		</div>
	)
}

//Table for air condition
const AirTable = () => {
	const airConditionProperties = [
		{ label: 'PM 10[µg/m3] -', value: 0 },
		{ label: 'O3[µg/m3] -', value: 0 },
		{ label: 'SO2[µg/m3] -', value: 0 },
		{ label: 'PM 2,5[µg/m3] -', value: 0 },
		{ label: 'NO2[µg/m3] -', value: 0 },
	]
	return (
		<div className="grid grid-cols-3 gap-y-4">
			{airConditionProperties.map((item, i) => (
				<div key={i} className="flex gap-2">
					<p>{item.label}</p>
					<p>{item.value}</p>
				</div>
			))}
		</div>
	)
}

export default function AtmosphericConditions() {
	const temp = {
		value: '4 °C',
		subValue: '2 °C',
		condition: 'Słonecznie',
	}

	const dust = {
		condition: 'Duże',
	}

	const air = {
		value: '12',
		subValue: 'CAQI',
		condition: 'Dobra',
	}

	return (
		<Group className="flex flex-col gap-4 w-full h-full">
			<Paper>
				<AddReadingOption />
			</Paper>
			<Paper className="grow">
				<Group gap="6">
					<p className="text-[26px] font-bold">{questSections.atmosphericConditions.label}</p>
					<AtmosphericCondition
						title="Pogoda"
						condition={temp.condition}
						icon="/assets/icons/sun.svg"
						value={temp.value}
						subValue={`Odczuwalność: ${temp.subValue}`}
						table={<WeatherTable />}
					/>
					<AtmosphericCondition
						title="Pylenie"
						condition={dust.condition}
						icon="/assets/icons/dust.svg"
						table={<DustTable />}
					/>
					<AtmosphericCondition
						title="Jakość powietrza"
						condition={air.condition}
						value={air.value}
						subValue={air.subValue}
						table={<AirTable />}
					/>
				</Group>
			</Paper>
		</Group>
	)
}
