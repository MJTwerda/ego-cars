import { render, screen, fireEvent, act, waitFor } from '@testing-library/react';
import ImageCarousel from './ImageCarousel';
import { ModelFeaturesI } from '../interfaces/models.interfaces';

const mockModelFeatures: ModelFeaturesI[] = [
  { image: '/img1.jpg', name: 'Model 1', description: 'Description 1' },
  { image: '/img2.jpg', name: 'Model 2', description: 'Description 2' },
  { image: '/img3.jpg', name: 'Model 3', description: 'Description 3' },
];

describe('ImageCarousel', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render the images and text', async () => {
    render(<ImageCarousel modelFeatures={mockModelFeatures} />);

    await waitFor(() => {
      expect(screen.getByAltText('Model 1')).toBeInTheDocument();
      expect(screen.getByText('Model 1')).toBeInTheDocument();
      expect(screen.getByText('Description 1')).toBeInTheDocument();
    });
  });

  it('should navigate to the next slide when the next button is clicked', async () => {
    render(<ImageCarousel modelFeatures={mockModelFeatures} />);

    const nextButton = screen.getByTestId('image_carousel_next_button');
    await act(() => {
      fireEvent.click(nextButton);
    });

    await waitFor(() => {
      expect(screen.getByText('Model 2')).toBeInTheDocument();
    });
  });

  it('should navigate to the previous slide when the previous button is clicked', async () => {
    render(<ImageCarousel modelFeatures={mockModelFeatures} />);

    const prevButton = screen.getByTestId('image_carousel_prev_button');
    await act(() => {
      fireEvent.click(prevButton);
    });

    await waitFor(() => {
      expect(screen.getByText('Model 3')).toBeInTheDocument();
    });
  });

  it('should change images when clicking on pagination indicators', async () => {
    render(<ImageCarousel modelFeatures={mockModelFeatures} />);

    const indicatorBtn = screen.getByTestId('image_carousel_indicator_0')
    await act(() => {
      fireEvent.click(indicatorBtn);
    });

    await waitFor(() => {
      expect(screen.getByText('Model 2')).toBeInTheDocument();
    });
  });

  it('should update itemsPerView on window resize', async () => {
    render(<ImageCarousel modelFeatures={mockModelFeatures} />);
    
    act(() => {
      global.innerWidth = 500;
      global.dispatchEvent(new Event('resize'));
    });

    await waitFor(() => {
      expect(screen.getByText('Model 1')).toBeInTheDocument();
    });
  });
});