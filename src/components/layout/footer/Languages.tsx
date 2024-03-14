import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import LangImage from './LangImage'
import { Language } from "@/lib/types"
import { languages } from '@/lib/constants/icons'

export default function Languages() {

  return (
    <Select>
      <SelectTrigger className="bg-white w-[65px] rounded-full border-none focus:border-none">
        <SelectValue placeholder={languages.length > 0 && languages.map((language: Language) => (
          language.value === "poland" && (
            <LangImage language={language} />
          )))} 
        />
      </SelectTrigger>
      <SelectContent className=' min-w-[4rem]'>
        {languages.length > 0 && languages.map((language: Language) => (
          <SelectItem value={language.value} key={language.value}>
            <LangImage language={language} />
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}