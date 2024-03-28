import Link from "next/link";

export default function AcceptStatute() {

  return (
    <div className="flex items-center space-x-2">
      <p>Akceptuję</p>
      <Link
        href="#"
        className="underline text-sm font-medium text-[#030303]"
      >
        Regulamin serwisu
      </Link>
    </div>
  )
}