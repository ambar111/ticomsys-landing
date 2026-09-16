import type { IconType } from 'react-icons';
import { SiDell, SiEpson, SiFujitsu, SiHp, SiKodak, SiNorton } from 'react-icons/si';
import { FaMicrosoft } from 'react-icons/fa';

export interface Partner {
  name: string;
  logo: string;
  scale?: number;
}

export const featuredPartner: Partner = {
  name: 'AQuarius Software',
  logo: '/images/AquariusLogos/Aquarius%20Blanco.svg',
};

export const partners: Partner[] = [
  { name: 'APC', logo: '/images/Partners/APC.png' },
  { name: 'Canon', logo: '/images/Partners/Canon.svg' },
  { name: 'Dell Technologies', logo: '/images/Partners/DellTechnologies.svg', scale: 2.2 },
  { name: 'Epson', logo: '/images/Partners/Epson.png' },
  { name: 'Fujitsu', logo: '/images/Partners/Fujitsu.svg' },
  { name: 'Grandstream', logo: '/images/Partners/Grandstream.webp' },
  { name: 'HP', logo: '/images/Partners/HP.webp' },
  { name: 'Kodak Alaris', logo: '/images/Partners/KodakAlaris.png' },
  { name: 'Microsoft', logo: '/images/Partners/Microsoft.png' },
  { name: 'Nexxt Solutions', logo: '/images/Partners/NexxtSolutions.png', scale: 1.3 },
  { name: 'Norton', logo: '/images/Partners/Norton.png', scale: 1.3 },
  { name: 'Ubiquiti', logo: '/images/Partners/Ubiquiti-logo-dark.png', scale: 1.4 },
];