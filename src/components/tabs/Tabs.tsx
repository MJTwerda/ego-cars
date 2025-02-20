'use client'
import { Tab, Tabs } from "@mui/material";
import { useState } from "react";
import { TabColors, TabI, TabValue } from './tabs.interfaces';

interface CommonTabsProps {
  tabList: TabI[];
  textColor?: TabColors;
  indicatorColor?: TabColors;
}

const CommonTabs = ({tabList, textColor = TabColors.PRIMARY, indicatorColor = TabColors.PRIMARY}: CommonTabsProps) => {
  const [ tabValue, setTabValue ] = useState<TabValue>(TabValue.MODELS);

  const handleChangeTabValue = (e: React.SyntheticEvent, tabValue: TabValue) => {
    setTabValue(tabValue);
  }

  return (
    <Tabs 
      value={tabValue} 
      onChange={handleChangeTabValue} 
      textColor={textColor} 
      indicatorColor={indicatorColor}
    >
      {tabList.map((tab: TabI) => (
        <Tab key={tab.value} value={tab.value} label={tab.label} />
      ))}
    </Tabs>
  );
};

export default CommonTabs;