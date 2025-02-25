import { act, render, RenderResult, waitFor } from '@testing-library/react';
import ModelDetails, { ModelDetailsProps } from './ModelDetails';

const mockProps: ModelDetailsProps = {
  vehicleData: {
    id: 12345,
    segment: 'Segment 1',
    year: 2022,
    price: 10000,
    thumbnail: '/thumbnail1.jpg',
    name: 'Model 1',
    title: 'Title 1',
    description: 'Description 1',
    photo: '/img1.jpg',
    model_features: [],
    model_highlights: []
  }
};

describe('ModelDetails', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render', async () => {
    let component: RenderResult;
    await act(async () => {
      component = render(<ModelDetails vehicleData={mockProps.vehicleData} />);
    });


    await waitFor(() => {
      expect(component).toMatchSnapshot();
      const images = component.getAllByRole('img');
      expect(images.length).toBe(1);
    });
  });

  it('should render with highlights info', async () => {
    const propsWithHighlights: ModelDetailsProps = {
      ...mockProps,
      vehicleData: {
        ...mockProps.vehicleData,
        model_highlights: [
          {
            title: 'Highlight 1',
            content: '<p>Content 1</p>',
            image: '/img1.jpg'
          },
          {
            title: 'Highlight 2',
            content: '<p>Content 2</p>',
            image: '/img2.jpg'
          }
        ]
      }
    }
    let component: RenderResult;
    await act(async () => {
      component = render(<ModelDetails vehicleData={propsWithHighlights.vehicleData} />);
    });


    await waitFor(() => {
      expect(component).toMatchSnapshot();
      const images = component.getAllByRole('img');
      expect(images.length).toBe(3);
    });
  });

});