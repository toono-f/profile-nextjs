import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { MovieModal } from "@/components/atoms/MovieModal";

type T = typeof MovieModal;
type Story = ComponentStoryObj<T>;

export default { component: MovieModal } as ComponentMeta<T>;

export const Default: Story = {
  args: {},
};
