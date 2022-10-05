import { render } from "@testing-library/react-native";

import NavigationExample from "..";

describe("Basic Navigation", () => {
  it("should navigate somewhere", () => {
    const { getByText } = render(<NavigationExample />);

    expect(getByText("Hi there")).toBeTruthy();
  });
});
