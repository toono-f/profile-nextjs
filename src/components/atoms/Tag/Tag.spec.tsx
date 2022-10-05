import * as stories from "@/components/atoms/Tag/Tag.stories";
import { composeStories } from "@storybook/testing-react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

const { Default } = composeStories(stories);

describe("src/components/atoms/Tag/Tag.tsx", () => {
  test("Atoms である", () => {
    const { container } = render(<Default />);
    expect(container).toBeAtom();
  });
});
