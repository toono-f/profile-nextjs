import { Header } from "@/components/organisms/Header";
import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

export default { component: Header } as ComponentMeta<typeof Header>;

export const Index: ComponentStoryObj<typeof Header> = {
  args: {},
};
