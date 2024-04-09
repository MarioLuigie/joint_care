import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

interface IRadio {
  label: string
  value: string
}

export default function InputRadioGroup({
  radios
}: { radios: IRadio[] }) {

  return (
    <div>
      <RadioGroup defaultValue="comfortable" className='flex gap-6'>
        {radios.map((radio, i) => (
          <div className="flex items-center space-x-2" key={i}>
            <RadioGroupItem value={radio.value} id={`r${i}`} className='border-slate-400 text-jc-blue focus:border-jc-blue' />
            <Label htmlFor={`r${i}`} className='text-jc-text4 text-sm'>{radio.label}</Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  )
}