import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { Spacer } from "@/components/atoms/Spacer";

type T = typeof Spacer;
type Story = ComponentStoryObj<T>;

export default { component: Spacer } as ComponentMeta<T>;

export const Default: Story = {
  args: {
    size: "md",
  },
};
