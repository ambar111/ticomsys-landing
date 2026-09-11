export interface NavItem {
  label: string;
  href: string;
}

export const navItems: NavItem[] = [
  { label: 'Inicio', href: '#home' },
  { label: 'Servicios', href: '#services' },
  { label: 'Productos', href: '#products' },
  { label: 'Clientes', href: '#clients' },
  { label: 'Por qué nosotros', href: '#why-us' },
  { label: 'Nosotros', href: '#about' },
  { label: 'Contacto', href: '#contact' },
];
