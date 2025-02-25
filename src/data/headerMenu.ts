import { MenuItemI } from "@/components/menu/menu.interfaces";

export const menuItems: MenuItemI[] = [
  {
    label: 'Modelos',
    path: '/',
  },
  {
    label: 'Servicios y Accesorios',
    path: 'model-sheet',
  },
  {
    label: 'Financiación',
    path: 'financing',
  },
  {
    label: 'Reviews y Comunidad',
    path: 'reviews-and-community',
    bottomDivider: true,
  },
  {
    label: 'Toyota Mobility Service',
    path: 'toyota-1',
  },
  {
    label: 'Toyota Gazoo Racing',
    path: 'toyota-2',
  },
  {
    label: 'Toyota Híbridos',
    path: 'toyota-hybrid',
    bottomDivider: true,
  },
  {
    label: 'Concesionarios',
    path: 'concessions',
  },
  {
    label: 'Test Drive',
    path: 'test-drive',
  },
  {
    label: 'Contacto',
    path: 'contact',
    bottomDivider: true,
  },
  {
    label: 'Actividades',
    path: 'activities',
  },
  {
    label: 'Servicios al Cliente',
    path: 'client-services',
  },
  {
    label: 'Ventas Especiales',
    path: 'special-sales',
  },
  {
    label: 'Innovación',
    path: 'innovation',
  },
  {
    label: 'Prensa',
    path: 'press',
  },
  {
    label: 'Acerca de...',
    path: 'about',
  }
];