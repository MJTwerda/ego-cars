import { Box } from "@mui/material";
import Image from "next/image";
import egoCarsLogo from '../../../public/ego-cars-logo.png';
import CommonMenu from "../menu/Menu";
import { MenuItemI } from "../menu/menu.interfaces";
import CommonTabs from "../tabs/Tabs";
import { TabValue } from '../tabs/tabs.interfaces';

const Header = () => {

  // TODO: Llevar esta data a un archivo aparte
  const headerTabs =[
    {
    value: TabValue.MODELS,
    label: 'Modelos'
    }, {
    value: TabValue.MODELS_TAB,
    label: 'Ficha de Modelo'
  }];

  const menuItems: MenuItemI[] = [
    {
      label: 'Modelos',
      path: 'models',
    },
    {
      label: 'Servicios y Accesorios',
      path: 'services-and-accessories',
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

  return (
    <div className="flex justify-between m-4">
      <div className="flex w-2/4">
        <Image
          alt='Ego Cars logo'
          src={'/ego-logo.svg'}
          width={38}
          height={40}
        />
        <div className="hidden sm:flex">
          <CommonTabs tabList={headerTabs} />
        </div>
      </div>

      <CommonMenu menuItems={menuItems} />
    </div>
  )
};

export default Header;