import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function AcceptStatute() {

  return (
    <>
      <Label htmlFor="statute">Akceptuję</Label>
      <Link
        href="#"
        className="underline text-sm font-medium text-[#030303]"
      >
        Regulamin serwisu
      </Link>
    </>
  )
}