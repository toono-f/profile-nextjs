import { ZennIcon } from "@/components/atoms/ZennIcon";
import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

type T = typeof ZennIcon;
type Story = ComponentStoryObj<T>;

export default { component: ZennIcon } as ComponentMeta<T>;

export const Default: Story = {
  args: {},
};
