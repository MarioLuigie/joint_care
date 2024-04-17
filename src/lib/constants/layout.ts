import { routes } from '@/lib/constants'
import { Social, Language } from '@/lib/types/layout'

export const navbar = [
	{
		label: 'Dashboard',
		icon: '/assets/icons/dashboard.svg',
		route: '/',
	},
	{
		label: 'Opaska monitorująca',
		icon: '/assets/icons/ecg-monitor.svg',
		route: '/',
	},
	{
		label: 'Przyjmowane leki',
		icon: '/assets/icons/pills.svg',
		route: '/',
	},
	{
		label: 'Aktywność fizyczna',
		icon: '/assets/icons/athletics.svg',
		route: '/',
	},
	{
		label: 'Wizyty lekarskie',
		icon: '/assets/icons/stethoscope.svg',
		route: '/',
	},
	{
		label: 'Ustawienia',
		icon: '/assets/icons/settings.svg',
		route: '/',
	},
]

export const topbar = [
	{
		label: 'Mój profil',
		icon: '/assets/icons/user.svg',
		route: routes.PROFILE_MY_PROFILE,
		id: 'profile',
	},
	{
		label: 'Ustawienia',
		icon: '/assets/icons/settings.svg',
		route: routes.PROFILE_SETTINGS,
		id: 'settings',
	},
	{
		label: 'Zmiana hasła',
		icon: '/assets/icons/password.svg',
		route: routes.PROFILE_CHANGE_PASSWORD,
		id: 'change-password',
	},
]

export const questSidebar = [
	{
		label: 'Warunki atmosferyczne',
		route: "/",
		id: '1',
	},
	{
		label: 'Dane podstawowe',
		route: "/",
		id: '2',
	},
	{
		label: 'Stawy bolesne: LSO',
		route: "/",
		id: '3',
	},
	{
		label: 'Stawy obrzęknięte: LBO',
		route: "/",
		id: '4',
	},
	{
		label: 'Zabiegi fizjoterapeutyczne',
		route: "/",
		id: '5',
	},
	{
		label: 'Aktywność fizyczna',
		route: "/",
		id: '6',
	},
	{
		label: 'Opaska monitorująca',
		route: "/",
		id: '7',
	},
	{
		label: 'Styl życia',
		route: "/",
		id: '8',
	},
	{
		label: 'Leki',
		route: "/",
		id: '9',
	},
]

export const socials: Social[] = [
	{
		alt: 'Link do Facebook',
		href: 'https://facebook.pl',
		src: '/assets/icons/facebook.svg',
		size: 27,
	},
	{
		alt: 'Link do Linkedin',
		href: 'https://linkedin.pl',
		src: '/assets/icons/linkedin.svg',
		size: 27,
	},
	{
		alt: 'Link do Instagram',
		href: 'https://instagram.pl',
		src: '/assets/icons/instagram.svg',
		size: 27,
	},
]

export const languages: Language[] = [
	{
		alt: 'Polish Language',
		src: '/assets/icons/poland.svg',
		value: 'poland',
		size: 20,
	},
]
