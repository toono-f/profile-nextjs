import { Title } from "@/components/atoms/Title";
import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

type T = typeof Title;
type Story = ComponentStoryObj<T>;

export default { component: Title } as ComponentMeta<T>;

export const Default: Story = {
  args: {
    children: <span>タイトル</span>,
  },
};
