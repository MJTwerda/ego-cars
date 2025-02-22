import { vehicleFilterTabs } from '@/data/vehicleFilterTabs';
import { Chip, Typography } from '@mui/material';

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
      <Typography variant='body1' className="flex self-center mr-4 sm:flex">
        {filterLabel.isStrong ? <strong>{filterLabel.label}</strong> : filterLabel.label}
      </Typography>

      {vehicleFilterTabs.map((tab) => (
        <div key={tab.value} className='flex self-center hidden lg:flex lg:justify-around lg:mr-4'>
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