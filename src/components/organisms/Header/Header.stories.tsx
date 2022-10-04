import { Header } from "@/components/organisms/Header";
import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

type T = typeof Header;
type Story = ComponentStoryObj<T>;

export default { component: Header } as ComponentMeta<T>;

export const Default: Story = {
  args: {},
};
