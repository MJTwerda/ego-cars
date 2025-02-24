'use client'
import { Tab, Tabs } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { TabColors, NavigationTabI } from './tabs.interfaces';

interface CommonTabsProps {
  tabList: NavigationTabI[];
  textColor?: TabColors;
  indicatorColor?: TabColors;
}

const NavigationTabs = ({ tabList, textColor = TabColors.PRIMARY, indicatorColor = TabColors.PRIMARY }: CommonTabsProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const [ currentTabPath, setCurrentTabPath ] = useState<string>("");

  useEffect(() => {
    const matchingTab = tabList.find(tab => `/${tab.path}` === pathname);
    if (matchingTab) {
      setCurrentTabPath(matchingTab.path);
    } else {
      setCurrentTabPath("/");
    }
  }, [pathname, tabList]);

  const handleNavigateByTab = (e: React.SyntheticEvent, tabPath: string) => {
    setCurrentTabPath(tabPath);
    router.push(`/${tabPath}`);
  };

  return (
    <Tabs 
      value={currentTabPath || false} 
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