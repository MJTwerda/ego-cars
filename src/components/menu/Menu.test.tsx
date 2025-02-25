import { act, fireEvent, render, RenderResult, waitFor } from "@testing-library/react";
import { useRouter } from "next/navigation";
import CommonMenu, { CommonMenuProps } from "./Menu";
import CloseIcon from '@mui/icons-material/Close';

const mockHandleClick = jest.fn();

const mockProps: CommonMenuProps = {
  menuLabel: {
    label: 'Menu',
  },
  menuIconClosed: <CloseIcon />,
  menuItems: [
    {
      label: 'Item 1',
      path: '/',
    },
    {
      label: 'Item 2',
      bottomDivider: true,
      handleClick: mockHandleClick
    },
    {
      label: 'Item 3',
      path: 'item-3'
    }
  ],
  justifyItems: 'start'
};

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

const mockPush = jest.fn();
(useRouter as jest.Mock).mockReturnValue({ push: mockPush });

describe('Menu', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render', async () => {
    let component: RenderResult;
    await act(async () => {
      component = render(<CommonMenu {...mockProps} />);
    });

    await waitFor(() => {
      expect(component).toMatchSnapshot();
    });
  });

  it('should render with all props', async () => {
    const newProps: CommonMenuProps = {
      ...mockProps,
      menuLabel: {
        ...mockProps.menuLabel,
        isStrong: true
      },
      menuIconOpened: <></>,
      showCloseButton: true,
      justifyItems: 'end'
    }
    let component: RenderResult;
    await act(async () => {
      component = render(<CommonMenu {...newProps} />);
    });

    await waitFor(() => {
      expect(component).toMatchSnapshot();
      const iconButton = component.getByTestId('common_menu_icon_btn');
      fireEvent.click(iconButton);

      expect(component.getByRole('menu')).toBeInTheDocument();
      fireEvent.click(iconButton);
    });
  });

  it('should close clicking on Menu Icon button', async () => {
    const newProps: CommonMenuProps = {
      ...mockProps,
      showCloseButton: true,
    }
    let component: RenderResult;

    await act(async () => {
      component = render(<CommonMenu {...newProps} />);
    });

    await waitFor(() => {
      fireEvent.click(component.getByTestId('common_menu_icon_btn'));
      expect(component.getByTestId('common_menu_close_btn')).toBeInTheDocument();
    });
  });

  it('should show close button option if showCloseButton is true', async () => {
    const newProps: CommonMenuProps = {
      ...mockProps,
      showCloseButton: true,
    }
    let component: RenderResult;

    await act(async () => {
      component = render(<CommonMenu {...newProps} />);
    });

    await waitFor(() => {
      fireEvent.click(component.getByTestId('common_menu_icon_btn'));

      const closeBtnOption = component.getByTestId('common_menu_close_btn');
      expect(closeBtnOption).toBeInTheDocument();

      fireEvent.click(closeBtnOption);
    });

  });

  it('should navigate clicking on Link option', async () => {
    const newProps: CommonMenuProps = {
      ...mockProps,
      showCloseButton: true,
    }
    let component: RenderResult;

    await act(async () => {
      component = render(<CommonMenu {...newProps} />);
    });

    await waitFor(() => {
      fireEvent.click(component.getByTestId('common_menu_icon_btn'));

      const navigateBtn = component.getByTestId('common_menu_item_Item 3');
      expect(navigateBtn).toBeInTheDocument();

      const menuItemLink = component.getByTestId('common_menu_item_link_/');
      expect(menuItemLink).toHaveAttribute('href', '/');

      fireEvent.click(navigateBtn);
    });

  });

  it('should execute option function clicking on option', async () => {
    const newProps: CommonMenuProps = {
      ...mockProps,
      showCloseButton: true,
    }
    let component: RenderResult;

    await act(async () => {
      component = render(<CommonMenu {...newProps} />);
    });

    await waitFor(() => {
      fireEvent.click(component.getByTestId('common_menu_icon_btn'));

      const option2 = component.getByTestId('common_menu_item_Item 2');
      expect(option2).toBeInTheDocument();

      fireEvent.click(option2);

      expect(mockHandleClick).toHaveBeenCalledTimes(1);
    });

  });
})