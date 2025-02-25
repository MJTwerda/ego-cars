import { render, screen, fireEvent, RenderResult, act, waitFor } from '@testing-library/react';
import FilterSectionChips from './FilterSectionChips';
import '@testing-library/jest-dom';
import { Chip } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { FilterSectionChipsProps } from './FilterSectionChips';

const mockLabel = 'Filtrar por';
const mockHandleFilterModels = jest.fn();

const mockProps: FilterSectionChipsProps = {
  handleFilterModels: mockHandleFilterModels,
  filterLabel: {
    label: mockLabel,
    isStrong: true
  }
}

describe('FilterSectionChips', () => {
  it('should render the filter section label correctly', async () => {
    let component: RenderResult;

    await act(() => {
      component =render(
        <FilterSectionChips 
          handleFilterModels={mockProps.handleFilterModels} 
          filterLabel={mockProps.filterLabel} 
        />
      );
    });

    await waitFor(() => {
      expect(component).toMatchSnapshot();
      const label = screen.getByText(mockLabel);
      expect(label).toBeInTheDocument();
      expect(label).toContainHTML('<strong>Filtrar por</strong>');
    })
  });

  it('should render the filter section label correctly', async () => {
    const newProps = {
      ...mockProps,
      filterLabel: {
        label: mockLabel,
        isStrong: false
      }
    }
    let component: RenderResult;

    await act(() => {
      component =render(
        <FilterSectionChips 
          handleFilterModels={newProps.handleFilterModels} 
          filterLabel={newProps.filterLabel} 
        />
      );
    });

    await waitFor(() => {
      expect(component).toMatchSnapshot();
      const label = screen.getByText(mockLabel);
      expect(label).toBeInTheDocument();
      expect(label).not.toContainHTML('<strong>Filtrar por</strong>');
    })
  });

  it('clicking on option, the handleFilterModels function should be called', async() => {
    let component: RenderResult;

    await act(() => {
      component =render(
        <FilterSectionChips 
          handleFilterModels={mockProps.handleFilterModels} 
          filterLabel={mockProps.filterLabel} 
        />
      );
    });

    await waitFor(() => {
      const optionAll = component.getByText('Todos');
      expect(optionAll).toBeInTheDocument();
      fireEvent.click(optionAll);
      expect(mockHandleFilterModels).toHaveBeenCalledTimes(1);
      expect(mockHandleFilterModels).toHaveBeenCalledWith('all');
    });
  });

  it('should handle clicking on the menu items in mobile view', async() => {
    let component: RenderResult;

    await act(() => {
      component =render(
        <FilterSectionChips 
          handleFilterModels={mockProps.handleFilterModels} 
          filterLabel={mockProps.filterLabel} 
        />
      );
    });

    await waitFor(() => {
      fireEvent.click(component.getByTestId('common_menu_icon_btn'));
  
      const menuItems = component.getAllByRole('menuitem');
      fireEvent.click(menuItems[0]); // Click on "Todos"
      expect(mockHandleFilterModels).toHaveBeenCalledWith('all');
  
      fireEvent.click(menuItems[1]); // Click on "Autos"
      expect(mockHandleFilterModels).toHaveBeenCalledWith('Sedan');
  
      fireEvent.click(menuItems[2]); // Click on "Pickups y Comerciales"
      expect(mockHandleFilterModels).toHaveBeenCalledWith('Pickups y Comerciales');
  
      fireEvent.click(menuItems[3]); // Click on "SUVs y Crossovers"
      expect(mockHandleFilterModels).toHaveBeenCalledWith('SUVs');
    });

  });
});
