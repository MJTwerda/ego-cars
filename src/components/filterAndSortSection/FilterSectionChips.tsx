import { vehicleFilterTabs } from '@/data/vehicleFilterTabs';
import { Chip, Typography } from '@mui/material';
import CommonMenu from '../menu/Menu';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';


export interface FilterSectionLabelI {
  label: string;
  isStrong?: boolean;
}

interface FilterSectionChipsProps {
  handleFilterModels: (tabValue: string) => void;
  filterLabel: FilterSectionLabelI;
}
const FilterSectionChips = ({ handleFilterModels, filterLabel }: FilterSectionChipsProps) => {

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