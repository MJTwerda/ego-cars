import { menuItems } from "@/data/headerMenu";
import { headerTabs } from "@/data/headerTabs";
import Image from "next/image";
import CommonMenu from "../menu/Menu";
import NavigationTabs from "../tabs/NavigationTabs";

const Header = () => {

  return (
    <div className="flex justify-between m-4 border-b-2 border-b-opacity-40">
      <div className="flex w-2/4">
        <Image
          alt='Ego Cars logo'
          src={'/ego-logo.svg'}
          width={38}
          height={40}
          className="mr-20"
        />
        <div className="hidden sm:flex">
          <NavigationTabs tabList={headerTabs} />
        </div>
      </div>

      <CommonMenu menuItems={menuItems} />
    </div>
  )
};

export default Header;