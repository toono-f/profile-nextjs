import { Mv } from "@/components/atoms/Mv";
import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

type T = typeof Mv;
type Story = ComponentStoryObj<T>;

export default { component: Mv } as ComponentMeta<T>;

export const Default: Story = {
  args: {},
};
