import { Button } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function LoginTrigger() {

	return (
		<Card className='p-[40px] w-[450px] min-w-[350px]'>
			<CardHeader>
				<CardTitle>Mam konto</CardTitle>
				<CardDescription>Chcę się zalogować</CardDescription>
			</CardHeader>
			<CardFooter className='flex flex-col gap-3'>
				<Button variant="outline" className='w-full'>
					Zaloguj się
				</Button>
			</CardFooter>
		</Card>
	)
}