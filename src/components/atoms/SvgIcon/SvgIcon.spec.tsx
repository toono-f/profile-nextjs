import "@testing-library/jest-dom";

import { composeStories } from "@storybook/testing-react";
import { act, render } from "@testing-library/react";

import * as stories from "@/components/atoms/SvgIcon/SvgIcon.stories";

const { Default } = composeStories(stories);

describe("src/components/atoms/SvgIcon/SvgIcon.tsx", () => {
  test("atoms である", async () => {
    const { container } = render(<Default />);
    await act(async () => {
      expect(container).toBeAtom();
    });
  });
});
