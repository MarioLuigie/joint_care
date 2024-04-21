//components
import { Button } from '@/components/ui/button'
import ToggleButtons from "@/components/shared/common/ToggleButtons"

export default function Settings() {

	function Consent() {
		return (
			<div className="flex-center gap-6 p-2 border-2 border-slate-200 rounded-[15px] h-[77px] w-[440px]">
				<p className="font-semibold text-base [text-shadow:_0_4px_4px_rgb(0_0_0_/_25%)]">
					Czy chcesz włączyć powiadomienia?
				</p>
				<div className="flex-center gap-2 p-2 bg-jc-gray0 rounded-[12px]">
					<ToggleButtons />
				</div>
			</div>
		)
	}

	return (
		<div className="flex flex-col items-center justify-start p-8 rounded-[25px] w-full bg-white">
			<div className="flex flex-col items-start justify-start gap-10 w-[400px] p-2">
				<p className="text-3xl font-bold">Ustawienia</p>
				<Consent />
				<Button className="px-8">Zapisz zmiany</Button>
			</div>
		</div>
	)
}
