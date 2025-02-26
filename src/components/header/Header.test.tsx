import { act, render, RenderResult, waitFor } from "@testing-library/react";
import { useRouter } from "next/navigation";
import Header from "./Header";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
  usePathname: jest.fn(),
}));

const mockPush = jest.fn();
(useRouter as jest.Mock).mockReturnValue({ push: mockPush });

describe('Header', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render', async () => {
    let component: RenderResult;
    await act(async () => {
      component = render(<Header />);
    });

    await waitFor(() => {
      expect(component).toMatchSnapshot();
    });
  });
});