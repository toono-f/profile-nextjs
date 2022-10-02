import { Button } from "@/components/atoms/Button";
import { render } from "@testing-library/react";

describe("Button", () => {
  test("should first", () => {
    const { getByText } = render(<Button href="/">リンクボタン</Button>);
    expect(getByText("リンクボタン")).toBeTruthy();
  });
});
