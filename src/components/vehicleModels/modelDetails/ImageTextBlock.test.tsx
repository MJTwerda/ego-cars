import { act, render, RenderResult, waitFor } from '@testing-library/react';
import ImageTextBlock, { ImageTextBlockProps } from './ImageTextBlock';

const mockPropsWhitoutModel: ImageTextBlockProps = {
  image: {
    src: '/img1.jpg',
    alt: 'Image 1',
    position: 'left'
  },
  textInfo: {
    title: {
      text: 'Title 1',
      variant: 'h4'
    },
    description: 'Description 1'
  }
}

describe('Testing <ImageTextBlock /> component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('Snapshot component whitout "model" prop', async()=> {
    let component: RenderResult;

    await act(async () => {
      component = render(<ImageTextBlock image={mockPropsWhitoutModel.image} textInfo={mockPropsWhitoutModel.textInfo} />);
    });

    await waitFor(() => {
      expect(component).toMatchSnapshot();

      const images = component.getAllByRole('img');
      expect(images.length).toBe(1);
      expect(images[0]).toHaveAttribute('alt', 'Image 1');
      expect(images[0]).toHaveClass('lg:mr-12');

      const titleInfo = component.getByText('Title 1');
      expect(titleInfo).toBeInTheDocument();
    });
  });

  test('Snapshot component with "model" prop', async()=> {
    const mockPropsWhitModel: ImageTextBlockProps = {
      ...mockPropsWhitoutModel,
      image: {
        ...mockPropsWhitoutModel.image,
        position: 'right'
      },
      textInfo: {
        ...mockPropsWhitoutModel.textInfo,
        description: '<p>Description 2</p>',
        model: 'Model 1'
      }
    };
    let component: RenderResult;

    await act(async () => {
      component = render(<ImageTextBlock image={mockPropsWhitModel.image} textInfo={mockPropsWhitModel.textInfo} />);
    });

    await waitFor(() => {
      expect(component).toMatchSnapshot();
      const image = component.getByRole('img');
      expect(image).toBeInTheDocument();
      expect(image).toHaveAttribute('alt', 'Image 1');
      expect(image).toHaveClass('lg:ml-12');
      const modelInfo = component.getByText('Model 1');
      expect(modelInfo).toBeInTheDocument();
    });

  });
});