import { Social, Language } from '@/lib/types'

export const socials: Social[] = [
	{
		src: '/assets/icons/facebook.svg',
		href: 'https://facebook.pl',
		width: 27,
		height: 27,
		alt: 'Facebook',
		ariaLabel: 'Link do Facebook',
	},
	{
		src: '/assets/icons/linkedin.svg',
		href: 'https://linkedin.pl',
		width: 27,
		height: 27,
		alt: 'LinkedIn',
		ariaLabel: 'Link do Linkedin',
	},
	{
		src: '/assets/icons/instagram.svg',
		href: 'https://instagram.pl',
		width: 27,
		height: 27,
		alt: 'Instagram',
		ariaLabel: 'Link do Instagram',
	},
]

export const languages: Language[] = [
	{
		value: 'poland',
		src: '/assets/icons/poland.svg',
		width: 20,
		height: 20,
		alt: 'Polish',
		ariaLabel: 'Polish Language',
	},
]
