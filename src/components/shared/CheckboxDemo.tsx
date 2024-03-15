import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

interface CheckboxDemoProps {
  id: string
  label: string
}

export default function CheckboxDemo({ id, label }: CheckboxDemoProps ) {

  return (
    <div className="flex items-center space-x-2">
      <Checkbox id={id} />
      <Label htmlFor={id}>{label}</Label>
    </div>
  )
}