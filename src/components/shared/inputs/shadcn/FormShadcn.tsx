//components
import { Form } from '@/components/ui/form'

export default function FormShadcn({
  className,
	form,
	onSubmit,
	children,
}: {
  className?: string
	form: any
	onSubmit: any
	children: React.ReactNode
}) {
	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className={className}>{children}</form>
		</Form>
	)
}
