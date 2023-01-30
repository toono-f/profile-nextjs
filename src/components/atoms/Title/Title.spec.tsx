import "@testing-library/jest-dom";

import { composeStories } from "@storybook/testing-react";
import { render } from "@testing-library/react";

import * as stories from "@/components/atoms/Title/Title.stories";

const { Default } = composeStories(stories);

describe("src/components/atoms/Title/Title.tsx", () => {
  test("Atoms である", () => {
    const { container } = render(<Default />);
    expect(container).toBeAtom();
  });
});
