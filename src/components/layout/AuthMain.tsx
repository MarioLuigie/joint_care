export default function AuthMain({ children }: { children: React.ReactNode }) {

  return (
    <main className="flex justify-center items-center grow bg-jc-bg">
      { children }
    </main>
  )
}