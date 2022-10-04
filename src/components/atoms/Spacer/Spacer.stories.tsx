import { Spacer } from "@/components/atoms/Spacer";
import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

type T = typeof Spacer;
type Story = ComponentStoryObj<T>;

export default { component: Spacer } as ComponentMeta<T>;

export const Default: Story = {
  args: {
    size: "md",
  },
};
