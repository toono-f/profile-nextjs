import * as stories from "@/components/atoms/MovieModal/MovieModal.stories";
import { composeStories } from "@storybook/testing-react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

const { Default } = composeStories(stories);

describe("src/components/Atoms/MovieModal/MovieModal.tsx", () => {
  test("Atoms ใงใใ", () => {
    const { container } = render(<Default />);
    expect(container).toBeAtom();
  });
});
