import { render, screen, fireEvent, act, waitFor, RenderResult } from "@testing-library/react";
import NavigationTabs from "./NavigationTabs";
import { TabColors, NavigationTabI } from "./tabs.interfaces";
import { usePathname, useRouter } from "next/navigation";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
  usePathname: jest.fn(),
}));

const mockPush = jest.fn();
(useRouter as jest.Mock).mockReturnValue({ push: mockPush });

const tabList: NavigationTabI[] = [
  { path: "/", label: "Model" },
  { path: "model-sheet", label: "Model Sheet" },
];

describe("NavigationTabs", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should be render correctly with custom colors", async() => {
    (usePathname as jest.Mock).mockReturnValue("/");
    let component: RenderResult;

    await act(() => {
      component = render(
        <NavigationTabs
          tabList={tabList}
          textColor={TabColors.SECONDARY}
          indicatorColor={TabColors.SECONDARY}
        />
      );
    });
    
    await waitFor(() => {
      expect(component).toMatchSnapshot();
    });
  });

  it("should render tabs correctly", async() => {
    (usePathname as jest.Mock).mockReturnValue("/");
    let component: RenderResult;

    await act(() => {
      component = render(<NavigationTabs tabList={tabList} />);
    })
    
    await waitFor(() => {
      expect(component).toMatchSnapshot();
      tabList.forEach((tab) => {
        const modelTab = component.getByTestId(`navigation-tab-${tab.path}`);
        expect(modelTab).toBeInTheDocument();
      });
    })

  });

  it("should highlight the active tab based on pathname", async() => {
    (usePathname as jest.Mock).mockReturnValue("/model-sheet");
    let component: RenderResult;

    await act(() => {
      component = render(<NavigationTabs tabList={tabList} />);
    });

    await waitFor(() => {
      const activeTab = screen.getByRole("tab", { name: "Model Sheet" });
      expect(activeTab).toHaveAttribute("aria-selected", "true");
    });

  });

  it("should navigate when clicking a tab", async() => {
    (usePathname as jest.Mock).mockReturnValue("/");
    let component: RenderResult;

    await act(() => {
      component = render(<NavigationTabs tabList={tabList} />);
    });

    await waitFor(() => {
      const modelSheetTab = screen.getByRole("tab", { name: "Model Sheet" });
      fireEvent.click(modelSheetTab);
  
      expect(mockPush).toHaveBeenCalledWith("/model-sheet");
    });
  });

  it("should set default tab when pathname does not match", async() => {
    (usePathname as jest.Mock).mockReturnValue("/unknown");
    let component: RenderResult;

    await act(() => {
      component = render(<NavigationTabs tabList={tabList} />);
    });

    await waitFor(() => {
      const defaultTab = screen.getByRole("tab", { name: "Model" });
      expect(defaultTab).toBeInTheDocument();
    });

  });
});