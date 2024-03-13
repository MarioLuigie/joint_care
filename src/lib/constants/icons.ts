interface Social {
  alt: string
  src: string
  href: string
}

export const socials: Social[] = [
  { alt: "Facebook", src: "/assets/icons/facebook.svg", href: "https://facebook.pl" },
  { alt: "Instagram", src: "/assets/icons/instagram.svg", href: "https://instagram.pl" },
  { alt: "LinkedIn", src: "/assets/icons/linkedin.svg", href: "https://linkedin.pl" },
];

interface Languages {
  width: number
  height: number
  alt: string
  src: string
  href: string
  value: string
}

export const languages: Languages[] = [
  { width: 20, height: 20, alt: "Polish", src: "/assets/icons/poland (11).svg", href: "#", value: "poland"},
  { width: 20, height: 20, alt: "Polish", src: "/assets/icons/poland (11).svg", href: "#", value: "german"},
];
