import { Checkbox } from "@/components/ui/checkbox"

interface CheckboxDemoProps {
  children: React.ReactNode
  id: string
}

export default function CheckboxDemo({ children, id }: CheckboxDemoProps ) {

  return (
    <div className="flex items-center space-x-2">
      <Checkbox id={id} />
      {children}
    </div>
  )
}