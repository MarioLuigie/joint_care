//components
import Group from "@/components/shared/containers/Group"
import Paper from "@/components/shared/containers/Paper"
import ToggleButtons from "@/components/shared/common/ToggleButtons"

export default function BasicDatas() {
  
  return (
		<Group className="flex flex-col gap-4 w-full h-full">
			<Paper>
        <p className="text-[26px] font-bold">Dane podstawowe</p>
        <div className="flex-center gap-2 p-2 bg-jc-gray0 rounded-[12px]">
          <ToggleButtons />
        </div>
			</Paper>
    </Group>
  )
}