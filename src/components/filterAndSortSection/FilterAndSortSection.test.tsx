import { act, fireEvent, render, RenderResult, waitFor } from "@testing-library/react";
import { useRouter } from "next/navigation";
import FilterAndSortSection from "./FilterAndSortSection";
import { FilterAndSortProps } from './FilterAndSortSection';

const mockProps: FilterAndSortProps = {
  modelList: [
    {
      id: 12345,
      segment: 'Segment 1',
      year: 2022,
      price: 10000,
      thumbnail: '/thumbnail1.jpg',
      name: 'Model 1',
      photo: '/img1.jpg',
    },
    {
      id: 67890,
      segment: 'Segment 2',
      year: 2021,
      price: 8000,
      thumbnail: '/thumbnail2.jpg',
      name: 'Model 2',
      photo: '/img2.jpg',
    }
  ]
};

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

const mockPush = jest.fn();
(useRouter as jest.Mock).mockReturnValue({ push: mockPush });

describe('FilterAndSortSection', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render', async () => {
    let component: RenderResult;
    await act(async () => {
      component = render(<FilterAndSortSection modelList={mockProps.modelList} />);
    });

    await waitFor(() => {
      expect(component).toMatchSnapshot();
    });
  });

  it('clicking on filter option, the handleFilterModels function should be called', async() => {
    let component: RenderResult;
    await act(async () => {
      component = render(<FilterAndSortSection modelList={mockProps.modelList} />);
    });

    await waitFor(() => {
      const optionCars = component.getByText('Autos');
      expect(optionCars).toBeInTheDocument();
      fireEvent.click(optionCars);

      const optionAll = component.getByText('Todos');
      expect(optionAll).toBeInTheDocument();
      fireEvent.click(optionAll);
    });
  });

  it('clicking on sort options, the handleSortModels function should be called', async () => {
    let component: RenderResult;
    await act(async () => {
      component = render(<FilterAndSortSection modelList={mockProps.modelList} />);
    });

    await waitFor(() => {
      fireEvent.click(component.getAllByTestId('common_menu_icon_btn')[1]); // Por el primer elemento es el del Header

      // Más viejos primero
      const oldestBtn = component.getByText('Más viejos primero');
      expect(oldestBtn).toBeInTheDocument();
      fireEvent.click(oldestBtn);

      // Más nuevos primero
      const newestBtn = component.getByText('Más nuevos primero');
      expect(newestBtn).toBeInTheDocument();
      fireEvent.click(newestBtn);

      // Menor precio primero
      const priceAsc = component.getByText('De menor a mayor precio');
      expect(priceAsc).toBeInTheDocument();
      fireEvent.click(priceAsc);

      // Mayor precio primero
      const PriceDesc = component.getByText('De mayor a menor precio');
      expect(PriceDesc).toBeInTheDocument();
      fireEvent.click(PriceDesc);

      // Nada
      const random = component.getByText('Nada');
      expect(random).toBeInTheDocument();
      fireEvent.click(random);
    });

  });
});