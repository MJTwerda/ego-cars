import { Chip, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import CommonMenu from '../menu/Menu';


export interface FilterSectionLabelI {
  label: string;
  isStrong?: boolean;
}

interface FilterSectionChipsProps {
  handleFilterModels: (tabValue: string) => void;
  filterLabel: FilterSectionLabelI;
}
const FilterSectionChips = ({ handleFilterModels, filterLabel }: FilterSectionChipsProps) => {

  const vehicleFilterTabs = [
    {
      label: "Todos",
      value: "all",
      handleClick: () => handleFilterModels("all"),
    },
    {
      label: "Autos",
      value: "Sedan",
      handleClick: () => handleFilterModels("Sedan"),

    },
    {
      label: "Pickups y Comerciales",
      value: "Pickups y Comerciales",
      handleClick: () => handleFilterModels("Pickups y Comerciales"),

    },
    {
      label: "SUVs y Crossovers",
      value: "SUVs",
      handleClick: () => handleFilterModels("SUVs"),

    },
  ];

  return (
    <div className='flex w-2/4 sm:w-3/4'>
      <Typography variant='body1' className="flex self-center sm:flex">
        {filterLabel.isStrong ? <strong>{filterLabel.label}</strong> : filterLabel.label}
      </Typography>

      <div className='flex lg:hidden'>
        <CommonMenu
          menuLabel={{ label: "" }}
          menuIconClosed={<ExpandMoreIcon />}
          menuIconOpened={<ExpandLessIcon />}
          menuItems={vehicleFilterTabs}
          justifyItems='start'
        />
      </div>

      {vehicleFilterTabs.map((tab) => (
        <div key={tab.value} className='flex self-center hidden lg:flex lg:justify-around lg:ml-4'>
          <Chip
            label={tab.label}
            onClick={() => handleFilterModels(tab.value)}
          />
        </div>
      ))}
    </div>
  )
};

export default FilterSectionChips;