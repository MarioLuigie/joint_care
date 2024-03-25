import Link from 'next/link'

export default function RegisterWarning() {

  return (
    <>
      <p>Konto z tym adresem e-mail jest już zarejestrowane.</p>
      <div className="flex items-center gap-2 text-jc-text1">
        <Link href="/auth/login" className="jc-warning-link underline">
          Zaloguj się
        </Link>
        <p className="jc-warning-link">lub</p>
        <Link
          href="/auth/forgot-password"
          className="jc-warning-link underline"
        >
          Przypomnij hasło
        </Link>
      </div>
    </>

  )
}