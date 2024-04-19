import Quest from "@/components/pages/quest/Quest";

export default function QuestPage({ params }: { params: any}) {

  return (
    <Quest slug={params.slug}/>
  )
}