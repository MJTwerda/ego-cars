import { act, render, RenderResult, waitFor } from '@testing-library/react';
import { useRouter } from 'next/navigation';
import ModelCard, { ModelListProps } from './ModelCard';

const mockProps: ModelListProps = {
  vehicleData: {
    id: 12345,
    segment: 'Segment 1',
    year: 2022,
    price: 10000,
    thumbnail: '/thumbnail1.jpg',
    name: 'Model 1',
    photo: '/img1.jpg',
  }
};

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

const mockPush = jest.fn();
(useRouter as jest.Mock).mockReturnValue({ push: mockPush });

describe('ModelCard', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render', async () => {
    let component: RenderResult;
    await act(async () => {
      component = render(<ModelCard vehicleData={mockProps.vehicleData} />);
    });

    await waitFor(() => {
      expect(component).toMatchSnapshot();
    });
  });

  it('should navigate when clicked', async () => {
    let component: RenderResult;
    await act(async () => {
      component = render(<ModelCard vehicleData={mockProps.vehicleData} />);
    });

    await waitFor(async () => {
      const link = component.getByRole('link');

      expect(link).toHaveAttribute('href', '/model-sheet?id=12345');
    });

  });
});