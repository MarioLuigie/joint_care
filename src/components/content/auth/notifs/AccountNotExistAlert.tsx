import Link from "next/link";

import { routes } from "@/lib/constants";

export default function AccountNotExistAlert() {

  return (
    <>
      <p>Konto o podanym adresie e-mail nie istnieje.</p>
      <div className="flex gap-1">
        <p>Sprawdź poprawność adresu lub</p>
        <Link href={routes.REGISTER}>
          <p className="jc-warning-link underline">utwórz nowe konto</p>
        </Link>
      </div>
    </>
  )
}