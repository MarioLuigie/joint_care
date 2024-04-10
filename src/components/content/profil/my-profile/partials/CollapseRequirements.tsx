import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function CollapseRequirements() {

  return (
    <div className='w-[250px]'>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <p className='text-[13px] underline text-jc-gray7'>Zwiń wymagania do plików</p>
          </AccordionTrigger>
          <AccordionContent className='flex flex-col gap-1'>
            <div className='flex flex-between text-jc-gray7 text-[13px]'>
              <p>Min. rozmiar:</p>
              <p>3000 x 3000px</p>
            </div>
            <div className='flex flex-between text-jc-gray7 text-[13px]'>
              <p>Max. waga pliku:</p>
              <p>10MB</p>
            </div>
            <div className='flex flex-between text-jc-gray7 text-[13px]'>
              <p>Akceptowalne formaty:</p>
              <p>JPEG, PNG</p>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}