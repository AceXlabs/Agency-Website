
export interface MenuItem {
    href: string;
    label: string;
  }
 
export const menuItems: MenuItem[] = [
    { href: '/about', label: 'About us' },
    { href: '/#services', label: 'Services' },
    { href: '/team', label: 'Team' },
    { href: '/#projects', label: 'Use Cases' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/articles', label: 'Blog' },
  ];
