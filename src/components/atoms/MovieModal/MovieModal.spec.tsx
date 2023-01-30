import "@testing-library/jest-dom";

import { composeStories } from "@storybook/testing-react";
import { render } from "@testing-library/react";

import * as stories from "@/components/atoms/MovieModal/MovieModal.stories";

const { Default } = composeStories(stories);

describe("src/components/Atoms/MovieModal/MovieModal.tsx", () => {
  test("Atoms である", () => {
    const { container } = render(<Default />);
    expect(container).toBeAtom();
  });
});
