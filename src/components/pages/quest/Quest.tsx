//components
import AtmosphericConditions from "@/components/forms/quest/Q1_AtmosphericConditions"
import BasicDatas from "@/components/forms/quest/Q2_BasicDatas"
import JointsPainfull from "@/components/forms/quest/Q3_JointsPainfull"
import JointsSwollen from "@/components/forms/quest/Q4_JointsSwollen"
import LifeStyle from "@/components/forms/quest/Q8_LifeStyle"
import Medicines from "@/components/forms/quest/Q9_Medicines"
import MonitoringWristband from "@/components/forms/quest/Q7_MonitoringWristband"
import PhysicalActivity from "@/components/forms/quest/Q6_PhysicalActivity"
import PhysiotherapyTreatments from "@/components/forms/quest/Q5_PhysiotherapyTreatments"
import Paper from "@/components/shared/containers/Paper"

type QuestMap = {
  [key: string]: JSX.Element
}

export default function Quest({ slug }: { slug: string }) {

  const questMap: QuestMap = {
    "1": <AtmosphericConditions />,
    "2": <BasicDatas />,
    "3": <JointsPainfull />,
    "4": <JointsSwollen />,
    "5": <PhysiotherapyTreatments />,
    "6": <PhysicalActivity />,
    "7": <MonitoringWristband />,
    "8": <LifeStyle />,
    "9": <Medicines />,
  }
  
  return (
    <Paper className="w-full min-h-full flex flex-col items-center justify-start">
      {questMap[slug]}
    </Paper>
  )
}