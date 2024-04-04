import Image from 'next/image'

export default function Header() {
	return (
		<header className="flex-start pl-[30px] h-[80px] bg-white">
			<Image
				src="/assets/logo/jointCare-logo.svg"
				width={115}
				height={35}
				alt="Joint Care Logo"
				aria-label="Logo Joint Care"
			/>
		</header>
	)
}