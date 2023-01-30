import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { Mv } from "@/components/atoms/Mv";

type T = typeof Mv;
type Story = ComponentStoryObj<T>;

export default { component: Mv } as ComponentMeta<T>;

export const Default: Story = {
  args: {},
};
