import * as stories from "@/components/organisms/MovieModal/MovieModal.stories";
import { composeStories } from "@storybook/testing-react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

const { Default } = composeStories(stories);

describe("src/components/organisms/MovieModal/MovieModal.tsx", () => {
  test("organisms である", () => {
    const { container } = render(<Default />);
    expect(container).toBeOrganisms();
  });
});
