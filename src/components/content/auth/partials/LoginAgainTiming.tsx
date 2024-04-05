export default function LoginAgainTiming() {

  interface TimeChank {
    time: string
  }

  const TimeChank = ({ time }: TimeChank) => (
    <div className='flex-center rounded bg-[#F5F8FC] w-[30px] h-[30px] text-base text-[#030303] font-semibold'>
      {time}
    </div>
  )

  return (
    <div className='flex items-center gap-3'>
      <p>Zaloguj się ponownie za</p>
      <div className='flex gap-2'>
        <TimeChank time="2" />
        <p>:</p>
        <TimeChank time="46" />
      </div>
    </div>
  )
}