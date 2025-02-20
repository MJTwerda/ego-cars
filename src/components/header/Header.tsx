import { Box } from "@mui/material";
import Image from "next/image";
import egoCarsLogo from '../../../public/ego-cars-logo.png';
import CommonMenu from "../menu/Menu";
import CommonTabs from "../tabs/Tabs";
import { TabValue } from '../tabs/tabs.interfaces';

const Header = () => {

  const headerTabs =[
    {
    value: TabValue.MODELS,
    label: 'Modelos'
    }, {
    value: TabValue.MODELS_TAB,
    label: 'Ficha de Modelo'
  }];

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

      <CommonMenu />
    </div>
  )
};

export default Header;