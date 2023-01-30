import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { Header } from "@/components/organisms/Header";

type T = typeof Header;
type Story = ComponentStoryObj<T>;

export default { component: Header } as ComponentMeta<T>;

export const Default: Story = {
  args: {},
};
