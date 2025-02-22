'use client'
import { Tab, Tabs } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { TabColors, NavigationTabI } from './tabs.interfaces';

interface CommonTabsProps {
  tabList: NavigationTabI[];
  textColor?: TabColors;
  indicatorColor?: TabColors;
}

const NavigationTabs = ({tabList, textColor = TabColors.PRIMARY, indicatorColor = TabColors.PRIMARY}: CommonTabsProps) => {
  const router = useRouter();
  const [ currentTabPath, setCurrentTabPath ] = useState<string>('');

  const handleNavigateByTab = (e: React.SyntheticEvent, tabPath: string) => {
    setCurrentTabPath(tabPath);
    router.push(`/${tabPath}`);
  }

  return (
    <Tabs 
      value={currentTabPath} 
      onChange={handleNavigateByTab} 
      textColor={textColor} 
      indicatorColor={indicatorColor}
    >
      {tabList.map((tab: NavigationTabI) => (
        <Tab 
          key={tab.path} 
          component="a"
          id={`navigation-tab-${tab.path}`}
          value={tab.path} 
          label={tab.label} 
        />
      ))}
    </Tabs>
  );
};

export default NavigationTabs;