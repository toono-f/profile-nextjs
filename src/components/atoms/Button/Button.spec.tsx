import * as stories from "@/components/atoms/Button/Button.stories";
import { composeStories } from "@storybook/testing-react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

const { Default } = composeStories(stories);

// describe("Button", () => {
//   test("Button である", () => {
//     const { getByText } = render(<Default />);
//     expect(getByText("Button")).toBeTruthy();
//   });
// });

describe("src/components/atoms/Button/Button.tsx", () => {
  test("Atoms である", () => {
    const { container } = render(<Default />);
    expect(container).toBeAtom();
  });
});
