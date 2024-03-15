import { Button } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function RegistrationTrigger() {

	return (
		<Card className='p-[40px] w-[450px] min-w-[350px]'>
			<CardHeader>
				<CardTitle>Nie mam konta</CardTitle>
				<CardDescription>Utwórz konto i zacznij korzystać z serwisu</CardDescription>
			</CardHeader>
			<CardFooter className='flex flex-col gap-3'>
				<Button variant="outline" className='w-full'>
					Załóż konto
				</Button>
			</CardFooter>
		</Card>
	)
}